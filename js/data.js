/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var previousEntries = localStorage.getItem('data-entries');

window.addEventListener('beforeunload', unload);

if (previousEntries !== null) {
  data = JSON.parse(previousEntries);
}

function unload(event) {
  var entriesJSON = JSON.stringify(data);
  localStorage.setItem('data-entries', entriesJSON);
}
