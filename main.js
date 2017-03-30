window.onload = function() {
  // Need to set listeners on the site rate stars (show thank you dialog on submit)
  // Need to load the average rating for the rate stars and set the right image resources.
  // Need to set the number of votes count to the right of the stars
  var http = new XMLHttpRequest();
  var stars = document.getElementsByClassName( 'rate-star' );

  /*
  for( var i = 0; i < stars.length; i++ ) {
    stars[i].addEventListener( 'click', function( event ) {
      var rating = this.getAttribute( 'data-rate' );

      // Send this rating to api to record it and send back new vote count and average

  }
  */


  http.onreadystatechange = function() {
    if( this.readyState == 4 && this.status == 200 ) {
      var resp = JSON.parse( this.responseText );
      // ratecount
      // averagerate

      for( var i = 0; i < resp.averagerate; i++ ) {
        stars[i].setAttribute( 'src', 'res/all-but-home/star.png' );
        document.getElementById( "ratecount" ).innerText = resp.ratecount + " Votes";
      }

    }
  }

  http.open( "GET", "http://dylanrose.me/Personal/api/get-rate-info.php" );
  http.send();




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
  var stars = document.getElementsByClassName( 'rate-star' );

  for( var i = 0; i <= which; i++ ) {
    stars[i].setAttribute( 'src', 'res/all-but-home/star.png' );
  }
}

function starUnHover( which ) {
  var stars = document.getElementsByClassName( 'rate-star' );

  for( var i = 0; i < stars.length; i++ ) {

    /** NEED TO SET THE HIGHLIGHTED STARS BACK TO WHERE THEY WERE ON PAGE LOAD (ON THE AVERAGE) */

    stars[i].setAttribute( 'src', 'res/star-unfill.png' )
  }

}
