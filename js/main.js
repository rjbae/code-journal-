/* global data */
/* exported data */
var placeHolderImg = document.querySelector('.placeholder');
var photoUrl = document.querySelector('.photourl');

photoUrl.addEventListener('input', imageEvent);

function imageEvent(event) {
  var photo = event.target.value;
  placeHolderImg.setAttribute('src', photo);
}

var form = document.querySelector('.form');
form.addEventListener('submit', submitEvent);

function submitEvent(event) {
  event.preventDefault();
  var formEntry = {};
  formEntry.title = form.elements.title.value;
  formEntry.photoUrl = form.elements.photoUrl.value;
  formEntry.notes = form.elements.notes.value;
  formEntry.entryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(formEntry);
  placeHolderImg.setAttribute('src', 'images/placeholder-image-square.jpg');
  form.reset();
}
