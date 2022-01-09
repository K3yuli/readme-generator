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
        message: 'What is your GitHub username? (Required)',
        validate: usernameInput => {
            if(usernameInput) {
                return true;
            } else {
                console.log('Please enter GitHub username');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: emailInput => {
            if(emailInput) {
                return true;
            } else {
                console.log('Please enter valid email address');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: "What is your project's title? (Required)",
        validate: titleInput => {
            if(titleInput) {
                return true;
            } else {
                console.log('Please enter the title for your Project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project (Required)',
        validate: descriptionInput => {
            if(descriptionInput) {
                return true;
            } else {
                console.log('Enter some description of project');
                return false;
            }
        }
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) {
            return console.log(err);
        }
        console.log('Success! Your README.md file has been generated')
    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
