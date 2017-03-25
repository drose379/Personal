function handleLinkHover( which, element ) {

  switch( which ) {
    case '1' :
      element.setAttribute( 'src', 'res/github-hover.svg' );
      break;
    case '2':
    element.setAttribute( 'src', 'res/linkedin-hover.svg' );
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
  }

}
