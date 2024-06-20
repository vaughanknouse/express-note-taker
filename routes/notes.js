// Import express and call the Router method
const notes = require('express').Router();
// Destructure the 'uuidv4' module so we can add individual id's for each note
const { v4: uuidv4 } = require('uuid');
// Importing file system utility functions
const { readFromFile, readAndAppend, writeToFile, readAndDelete } = require('../helpers/fsUtils');

// GET Route for retrieving all notes
notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for adding a new note
notes.post('/', (req, res) => {
    console.info (`${req.method} request received to add note.`)

    const {title, text} = req.body;

    // If all the required properties are present
    if (title && text) {
        // Variable for the object we will save with a unique ID
        const newNote = {
            title,
            text,
            id: uuidv4(), // Generate a unique ID
        };

        // Appending new note to file
        readAndAppend(newNote, './db/db.json');

        res.json(newNotes); // Sending success response
      } else {
        res.json('Error in adding notes'); // Sending error response
      }
    });

// DELETE Route for deleting an existing note
notes.delete('/:id', (req, res) => {
  readAndDelete(req.params.id, "./db/db.json"); // Deleting note from file
  res.json('response'); // Sending response
});

// Exporting router for use in other files
module.exports = notes;