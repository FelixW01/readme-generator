// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generatorMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the title of the project?',
    name: 'title',
},
{
    type: 'input',
    message: 'What is the project about? Why did you build this project?',
    name: 'description',
},
{
    type: 'input',
    message: 'Table of Contents.',
    name: 'table of contents',
},
{
    type: 'input',
    message: 'What are the dependencies needed to run this app?',
    name: 'installation',
},
{
    type: 'input',
    message: 'How is the app used? include instructions.',
    name: 'usage',
},
{
    type: 'list',
    message: 'What licence is being used?',
    choices: ['MIT', 'BSD 3-Clause', 'BSD 2-Clause', 'Apache', 'Mozilla', 'IBM', 'None'],
    name: 'license',
},
{
    type: 'input',
    message: 'Who contributed to this project?',
    name: 'contributing',
},
{
    type: 'input',
    message: 'What commands are needed to test this app?',
    name: 'tests',
},
{
    type: 'input',
    message: 'Contact information.',
    name: 'questions',
},
{
    type: 'input',
    message: 'What is your github username?',
    name: 'username',
},
{
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) =>
    error
        ? console.error('There was an error writing the file: ', error)
        : console.log('Information Recorded'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile('README.md', generatorMarkdown(data))
        console.log(data)
    })};

// Function call to initialize app
init();
