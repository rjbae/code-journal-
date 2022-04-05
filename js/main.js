/* global data */
/* exported data */
var placeHolderImage = document.querySelector('.placeholder');
var photoUrl = document.querySelector('.photourl');

photoUrl.addEventListener('input', imageEvent);

function imageEvent(event) {
  var photo = event.target.value;
  placeHolderImage.setAttribute('src', photo);
}
