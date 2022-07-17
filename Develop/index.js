// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require('fs');
// const imports = require('./generateMarkdown')
const process = require('process')
// const Choices = require('inquirer/lib/objects/choices');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        question: 'What would you like the title to be?',
    },
    {
        type: 'input',
        question: 'Add a description.',
    },
    {
        type: 'input',
        question: 'Add installtion instructions.',
    },
    {
        type: 'input',
        question: 'Add usage information.',
    },
    {
        type: 'input',
        question: 'Add contribution guidelines.',
    },
    {
        type: 'input',
        question: 'Add test instructions.',
    },
    {
        // switch statement
        type: 'checkbox',
        question: 'Pick a license.',
        choices: ['Public domain', 'Permissive', 'LGPL', 'Copyleft', 'Proprietary'],
    },
    {
        type: 'input',
        question: 'What is your GitHub Username?',
    },
    {
        type: 'input',
        question: 'Add the link to your GitHub profile.',
    },
    {
        type: 'input',
        question: 'Add your email.',
    },
    {
        type: 'input',
        question: 'Describe the best way to get in contact with you.',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("ReadMe.md", 'string', (err) => {
        if (err){
            console.log(err)
        } else {
            console.log('Success')
        }
    }).then.path.join(data).process.cwd(fileName)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    // console.log(questions)
}
//     .then((answers) => fs.writeToFile)
// }

// Function call to initialize app
init();
