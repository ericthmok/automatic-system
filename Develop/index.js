// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe the project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide the installation instructions.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide the usage of the project.',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Please provide the contribution guidelines.',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide the testing instructions.',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName}`, data,(err) =>{
        if(err){
            console.log(err);
            return
        };
        console.log('README created')
    })
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
.then(answers=>generateMarkdown(answers))
.then(generateReadme=>writeToFile('README.md',generateReadme))
;
