# Express.js Note Taker

![License](https://img.shields.io/badge/License-MIT-blue.svg)

## Description ***


## Table of Contents
- [Express.js Note Taker](#expressjs-note-taker)
  - [Description \*\*\*](#description-)
  - [Table of Contents](#table-of-contents)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Installation \*\*\*](#installation-)
  - [Usage](#usage)
    - [Screenshots: \*\*\*](#screenshots-)
  - [Link to Deployed Application \*\*\*](#link-to-deployed-application-)
  - [Credits \*\*\*](#credits-)
  - [Test Instructions \*\*\*](#test-instructions-)
  - [License](#license)
  - [Questions](#questions)


## User Story

```md
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Acceptance Criteria

```md
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a "Save Note" button and a "Clear Form" button appear in the navigation at the top of the page
WHEN I click on the Save button
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes and the buttons in the navigation disappear
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column and a "New Note" button appears in the navigation
WHEN I click on the "New Note" button in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column and the button disappears
```

## Installation ***
To install the Express.js Note Taker, follow the following steps:
1.	Clone the repository to your local machine: `git clone https://github.com/vaughanknouse/express-note-taker.git`.
2.	Ensure that the current version of Node.js is installed. 
3.	Open the cloned repository in a CLI, such as Visual Studio (VS) Code.
4.	Navigate to the project directory in your terminal.


EDITS HERE***
5.	Initialize a project with `package.json` by typing `npm init -y` in the terminal where project files will be stored.
6.	Install `inquirer` version 8.2.4 by typing `npm i inquirer@8.2.4` in the terminal for information gathering.
7. Install the latest version of Jest by typing `npm i jest` for testing.
8.	Install other necessary dependencies by typing `npm i` in the command line to ensure that the `node-modules` folder is operating on your local device. 


## Usage
To use the Express.js Note Taker, follow the following steps:

EDITS HERE***
1.	Once the dependencies are installed, initialize the application with node.js by running the `index.js` file using the following command in the terminal: `node index.js`.
2.	The application will take you through a series of questions to customize your logo and prompt you to enter information about your logo, such as the text for the logo (up to 3 characters), a color keyword or hexadecimal number for the text color, a shape from the list (circle, square, triangle), and a color keyword or hexadecimal number for the shape color.
3.	Follow the `npm inquirer` prompt questions through sequential order within the directory.
4.	After all of the prompt questions have been answered properly, the application will generate your new logo in a `logo.svg` file based on your input and a message will display on the command line indicating that your logo has been generated.
5.	Once the new `logo.svg` file is generated, find your newly generated SVG file and review the file to see your generated logo.
6. At your discretion, you mae rename the `logo.svg` file to the file name of your choice.
7. Regarding future use, you may alter the prompted questions within the `index.js` file to best suit your needs. 
8. For unit testing instructions, navigate to the "Test Instructions" section of the README. 


### Screenshots: ***
The following screenshots demonstrate the application's functionality and appearance:

![Shows screenshot of the prompts made to the user via the inquirer command line interface.](assets/images/user-input-screenshot.png)

![Shows screenshot of an example  logo generated via the application.](assets/images/generated-logo-screenshot.png)

## Link to Deployed Application ***


## Credits ***
Used the following sources as tutorials and guidelines:

Full-Stack Blog Render Deployment Guide: https://coding-boot-camp.github.io/full-stack/render/render-deployment-guide

Also utilized the Xpert Learning Assistant for some portions of my code:
https://bootcampspot.instructure.com/courses/5293/external_tools/313


## Test Instructions ***
No tests were performed with this code.


## License
This project is licensed under the MIT license. For more information, please visit [this link](https://opensource.org/licenses/MIT).


## Questions
For any questions or feedback, please contact me via email at vaughanknouse@gmail.com.
Additionally, you can find me on GitHub at [vaughanknouse](https://github.com/vaughanknouse).
