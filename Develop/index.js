// Dependacies and variables
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please provide a project title. (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please provide a project title');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username. (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your Github username');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'repo',
        message: 'Please enter a name for repo. (Required)',
        validate: repoInput => {
            if (repoInput) {
                return true;
            } else {
                console.log('Please enter a name for repo');
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description for application. (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please provide a description for application');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usuage',
        message: 'Please provide info for using the application. (Required)',
        validate: usuageInput => {
            if (usuageInput) {
                return true;
            } else {
                console.log('Please provide info for using the application');
                return false;
            }
        }
    },
    {
        type: 'rawlist',
        name: 'license',
        message: 'Please select a license. (Required)',
        choices: ["agpl-3.0","gpl-3.0",]
    },
];

var pjson = require('./package.json');
console.log(pjson.version);

// TODO: Create a function to write README file
function writeToFile(fileName, data)
 {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            return console.log(err)
        }
        console.log("done") 
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)


// Function call to initialize app
// .then (console.log(inquirer.answers))
    .then(answers => {
        console.log(answers)
        const generateString = generateMarkdown(answers)
        
     writeToFile('README.md', generateString)})

    .catch(err => {
        console.log(err);
    })
}
init ()
