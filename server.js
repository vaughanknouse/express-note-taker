// Import Express package
const express = require('express');
// Import built-in Node.js package 'path' to resolve path of files that are located on the server
const path = require('path');
// Require the db.json file and assign it to a variable called `notesData`
const notesData = require('./db/db.json');
// Add index.js file route
const api = require('./routes/index.js');

// Set the port for the application, using a value from the environment variable PORT if available, or defaulting to 3001
const PORT = process.env.PORT || 3001;

// Initialize an instance of Express.js
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// Wildcard GET Route for homepage
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

// Start the Express server and listen on the specified port
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
})