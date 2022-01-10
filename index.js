// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
function promptUser(){
    return inquirer.prompt([
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
        message: 'What license is best for your project?',
        choices: [
            'MIT',
            'GPL v2',
            'Apache License 2.0',
            'BSD 3-clause',
            'ISC',
            'Unlicense'
        ]
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm install inquirer'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?',
        default: 'npm run test'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repository?'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Who contributed to the repository?'
    }
]);
}


// TODO: Create a function to write README file
async function init() {
    try {
        const answers = await promptUser();
        const generateContent = generateMarkdown(answers)

        await writeFileAsync('README.md', generateContent)
        console.log('Success! README has been generated. Please check your directory.')
    } catch(err) {
        console.log(err);
    }
}

// Function call to initialize app
init();
