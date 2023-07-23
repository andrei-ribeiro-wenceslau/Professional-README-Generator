// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const gm = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = 
[
    {
        type: 'input',
        name: 'githubUserName',
        message: "What is your GitHub username",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email address?",
    },
    {
        type: 'input',
        name: 'projectName',
        message: "What is the project name?",
    },
    {
        type: 'input',
        name: 'description',
        message: "Please write a short description of your project.",
    },
    {
        type: 'list',
        name: 'license',
        message: "What kind of license should your project have?",
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', "BSD 3", "None"],
    },
    {
        type: 'input',
        name: 'installation',
        message: "What command should be run to install dependencies?",
    },
    {
        type: 'input',
        name: 'test',
        message: "What command should be run to run tests?",
    },
    {
        type: 'input',
        name: 'information',
        message: "What does the user need to know about using this repo?",
    },
    {
        type: 'input',
        name: 'contribution',
        message: "What does the user need to know about contributing to the repo?",
    },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
     );
}

// TODO: Create a function to initialize app
function init() {
   
   inquirer
  .prompt(questions)
  .then((answers) => {
    const readmeContent = gm.generateMarkdown(answers);
    writeToFile("./generated_readme/README.md", readmeContent);

})
}
// Function call to initialize app
init();


