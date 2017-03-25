const fs = require('fs');
const _  = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};

const bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
};

const argv = yargs
  .command('add', 'Add a note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: titleOptions
  })
  .command('remove', 'Remove a note', {
    title: titleOptions
  })
  .help()
  .argv;

let title = argv.title;
let body = argv.body;
let command = argv._[0];

if (command === 'add') {
  let note = notes.addNote(title, body);

  if (note) {
    notes.logNote(note);
  } else {
    console.log(`Title: '${title}' already exists! Please specifiy a new title.`);
  }
} else if (command === 'list') {
  let allNotes = notes.getAll();
  allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
  let note = notes.getNote(title);
  notes.logNote(note);
} else if (command === 'remove') {
  let removedNote = notes.removeNote(title)
  let message = removedNote ? `'${title}' was removed!'` : 'Note was not found';
  console.log(message);
} else {
  console.log('Command not found');
}
