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

function submitEvent(entry) {
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

function renderEntry(entry) {

  var list = document.createElement('li');

  var row = document.createElement('div');
  row.setAttribute('class', 'row');
  list.appendChild(row);

  var columnHalf = document.createElement('div');
  columnHalf.setAttribute('class', 'column-half');
  row.appendChild(columnHalf);

  var image = document.createElement('img');
  image.setAttribute('class', 'entry-img');
  image.setAttribute('src', entry.photoUrl);
  columnHalf.appendChild(image);

  var secondColumn = document.createElement('div');
  secondColumn.setAttribute('class', 'column-half');
  row.appendChild(secondColumn);

  var entryHeader = document.createElement('h3');
  var entryHeaderText = document.createTextNode(entry.title);
  entryHeader.setAttribute('class', 'entry-header');
  secondColumn.appendChild(entryHeader);
  entryHeader.appendChild(entryHeaderText);

  var entryParagraph = document.createElement('p');
  var entryText = document.createTextNode(entry.notes);
  secondColumn.appendChild(entryParagraph);
  entryParagraph.appendChild(entryText);
  return list;
}

var list = document.querySelector('ul');
document.addEventListener('DOMContentLoaded', DOMContentLoaded);

function DOMContentLoaded(event) {
  for (var i = 0; i < data.entries.length; i++) {
    var entry = renderEntry(data.entries[i]);
    list.appendChild(entry);
  }
}
