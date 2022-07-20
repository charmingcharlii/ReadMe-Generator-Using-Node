// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require('fs');
const imports = require('./utils/generateMarkdown')
const path = require('path')
// import generateMarkdown from 'genegenerateMarkdown.js'
// const process = require('process')
// const Choices = require('inquirer/lib/objects/choices');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What would you like the title to be?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Add a description.',
        name: 'desc',
    },
    {
        type: 'input',
        message: 'Add installation instructions.',
        name: 'install'
    },
    {
        type: 'input',
        message: 'Add usage information.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Add contribution guidelines.',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Add test instructions.',
        name: 'test',
    },
    {
        // switch statement
        type: 'checkbox',
        message: 'Pick a license.',
        choices: ['Public domain', 'Permissive', 'LGPL', 'Copyleft', 'Proprietary', 'None'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'What is your GitHub Username?',
        name: 'user',
    },
    {
        type: 'input',
        message: 'Add the link to your GitHub profile.',
        name: 'profile',
    },
    {
        type: 'input',
        message: 'Add your email.',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Describe the best way to get in contact with you.',
        name: 'contact',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log("Success")
        const mark = imports(answers)
        writeToFile("ReadMe.md", mark)
    })
    // .then((answers) => fs.writeToFile)
}

// Function call to initialize app
init();

