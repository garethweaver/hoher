var anchorLinks = document.getElementsByClassName('scroll-anchor');

for (i=0; i < anchorLinks.length; i++) {
  anchorLinks[i].addEventListener('click', scrollTo);
}

function scrollTo(e) {
  e.preventDefault();
  if (e.target.hash) {
    var elem = document.getElementById(e.target.hash.substring(1));
    elem ? elem.scrollIntoView({block: 'start', behavior: 'smooth'}) : null;
  }
}
