const fs      = require('fs'),
      yargs   = require('yargs');

const notes   = require('./notes');

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

const command = argv._[0];

if (command === 'add') {
  let note = notes.addNote(argv.title, argv.body);

  if (note) {
    notes.logNote(note);
  } else {
    console.log(`Title: '${argv.title}' already exists! Please use a different name.`);
  }
} else if (command === 'list') {
  let allNotes = notes.getAll();
  allNotes.forEach(note => notes.logNote(note));
} else if (command === 'read') {
  let note = notes.getNote(argv.title);
  notes.logNote(note);
} else if (command === 'remove') {
  let removedNote = notes.removeNote(argv.title);
  let message = removedNote ? `Title: '${argv.title}' has been removed.` : `Note not found`;
  console.log(message);
} else {
  console.log('Invalid command : Type --help for options');
}
