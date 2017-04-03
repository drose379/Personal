var averageRate = null;
var stars = null;

window.onload = function() {
  // Need to set listeners on the site rate stars (show thank you dialog on submit)
  // Need to load the average rating for the rate stars and set the right image resources.
  // Need to set the number of votes count to the right of the stars
  stars = document.getElementsByClassName( 'rate-star' );

  for( var i = 0; i < stars.length; i++ ) {
    stars[i].addEventListener( 'click', function( event ) {
      var rating = this.getAttribute( 'data-rate' );

      let rHttp = new XMLHttpRequest();

      rHttp.onreadystatechange = function () {
        if( this.readyState == 4 && this.status == 200 ) {
          // Update the stars and average count, say thank you for vote
          clearStars();
          var resp = JSON.parse( this.responseText );
          averageRate = resp.averagerate;

          for( var i = 0; i < resp.averagerate; i++ ) {
            stars[i].setAttribute( 'src', 'res/star.png' );
          }

          document.getElementById( "ratecount" ).innerText = resp.ratecount + " Votes";

          swal({
            "title": "Thank You!",
            "text": "Thanks for voting!",
            "timer": 1500,
            "showConfirmButton": false,
            "type": "success"
          });

        }
      };
      rHttp.open( "POST", "http://dylanrose.me/Personal/api/add-rating.php" );
      rHttp.send( JSON.stringify( {"newrate": rating} ) );


  });
}

  // Get initial data
  var http = new XMLHttpRequest();
  http.onreadystatechange = function() {
    if( this.readyState == 4 && this.status == 200 ) {
      var resp = JSON.parse( this.responseText );
      averageRate = resp.averagerate;

      for( var i = 0; i < resp.averagerate; i++ ) {
        stars[i].setAttribute( 'src', 'res/star.png' );
      }

      document.getElementById( "ratecount" ).innerText = resp.ratecount + " Votes";

    }
  }

  http.open( "GET", "http://dylanrose.me/Personal/api/get-rate-info.php" );
  http.send();


  // Handle form submit
  document.getElementById('contact-form').addEventListener( 'submit', function( event ) {
    event.preventDefault();
    var sendicon = document.getElementById( "send-img" );
    var progress = document.getElementById( "form-progress" );

    sendicon.style.display="none";
    progress.style.display="block";

    var name = document.getElementById( "first" ).value
    + " "
    + document.getElementById( "last" ).value;

    var replyto = document.getElementById( "replyto" ).value;
    var message = document.getElementById( "msg" ).value;

    var data = {
      "name": name,
      "replyto": replyto,
      "message": message
    };

    var http = new XMLHttpRequest();

    http.onreadystatechange = function() {
      if( this.readyState == 4 && this.staus == 200 ) {
        // Show a swal, if status is anything but 200 and readystate is 4, show error, but switch button back to regular send
        console.log( this.responseText );
      }
    }

    http.open( "POST", "http://dylanrose.me/Personal/api/send-mail.php" );
    http.send( JSON.stringify( data ) );

    // Send the data over to api with ajax
    // Switch the send button in the submit button with a loading spinner inside the button
    // Show a swal for 1 second when successfully sent (response from ajax request)

  } );




}




function handleLinkHover( which, element ) {
  switch( which ) {
    case '1' :
      element.setAttribute( 'src', 'res/github-hover.svg' );
      break;
    case '2':
      element.setAttribute( 'src', 'res/linkedin-hover.svg' );
      break;
    case '3':
      element.setAttribute( 'src', 'res/download-hover.svg' );
      break;
  }
}

function handleLinkUnhover( which, element ) {

  switch( which ) {
    case '1':
      element.setAttribute( 'src', 'res/github-grey.svg' );
      break;
    case '2':
      element.setAttribute( 'src', 'res/linkedin-grey.svg' );
      break;
    case '3':
      element.setAttribute( 'src', 'res/download.svg' );
      break;
  }

}

function starHover( which ) {
  if( which < (averageRate - 1) )
    clearStars();

  for( var i = 0; i <= which; i++ ) {
    stars[i].setAttribute( 'src', 'res/star-blue.png' );
  }
}

function starUnHover( which ) {
  clearStars();
  for( var i = 0; i < averageRate; i++ ) {
    stars[i].setAttribute( 'src', 'res/star.png' );
  }
}

function clearStars() {
  for( var i = 0; i < stars.length; i++ ) {
    stars[i].setAttribute( 'src', 'res/star-unfill.png' );
  }
}
