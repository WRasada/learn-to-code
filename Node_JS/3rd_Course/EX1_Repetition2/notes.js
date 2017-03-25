const fs = require('fs');

let fetchNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('notes_data.json'));
  } catch (err) {
    return [];
  }
};

let saveNotes = (notes) => {
  fs.writeFileSync('notes_data.json', JSON.stringify(notes));
};

let addNote = (title, body) => {
  let notes = fetchNotes();
  let note = {
    title,
    body
  };

  let duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

let getAll = () => fetchNotes();

let getNote = (title) => {
  let notes = fetchNotes();
  let filteredNotes = notes.filter((note) => note.title === title);
  return filteredNotes[0];
};

let removeNote = (title) => {
  let notes = fetchNotes();
  let filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
};

let logNote = (note) => {
  console.log('------');
  console.log(`Title: ${note.title}.`)
  console.log(`Body: ${note.body}.`)
  console.log('------');
};

module.exports = {
  addNote,
  logNote,
  getAll,
  getNote,
  removeNote
}
