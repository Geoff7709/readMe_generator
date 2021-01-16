// requires
const fs = require('fs');
const inquirer = require('inquirer');
const Choice = require('inquirer/lib/objects/choice');
const generateMarkdown = require('./utils/generateMarkdown.js');
// array of questions for user
const questions = [
    {
        name: 'title',
        message: 'What is the name of your project?',
        default: 'Please choose a title'
    },
    {
        name: 'email',
        message: 'What is your email?',
        default: 'yourName@someplace.go'
    },
    {
        name: 'gitHub',
        message: 'What is your gitHub profile name?',
        default: 'gitProfile'
    },
    {
        name: 'repository',
        message: 'What is the name of the gitHub repository for this project?',
        default: 'repoName'
    },
    {
        name: 'description',
        message: 'Write a brief description of your application.',
        default: 'Incididunt sint tempor incididunt minim elit cillum minim.'
    },
    {
        type: "list",
        name: "lisence",
        message: "Choose what lisence you would like to include.",
        choices: ["Apache", "BSD", "MIT", "GNU"]
    },

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('file saved');
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(data => {
        writeToFile('README.md', generateMarkdown(data))
      })
      .catch(error => {
        if(error.isTtyError) {
          console.log(error);
        } else {
          console.log('Something else went wrong');
        }
      })
}

// function call to initialize program
init();
