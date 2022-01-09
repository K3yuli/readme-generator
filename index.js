// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const generateMd = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

inquirer.prompt([
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'title',
        message: "What is your project's title?"
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license should your project have?',
        choices: [
            'MIT',
            'GPL v2',
            'Apache license 2.0',
            'BSD 3-clause',
            'ISC',
            'Unlicense'
        ]
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        default: ''
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?',
        default: ''
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repository?'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'What does the user need to know about contributing to the repository?'
    }
]);


const promptUser = () => {
    return inquirer
    .prompt(questions);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
