// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const gm = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    "What is your GitHub username",
    "What is your email address?",
    "What is the project name?",
    "Please write a short description of your project.",
    "What kind of license should your project have?",
    "What command should be run to install dependencies?",
    "What command should be run to run tests?",
    "What does the user need to know about using this repo?",
    "What does the user need to know about contributing to the repo?"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
     );
}

// TODO: Create a function to initialize app
function init() {
   
   inquirer
  .prompt([
      {
          type: 'input',
          name: 'githubUserName',
          message: questions[0],
      },
      {
          type: 'input',
          name: 'email',
          message: questions[1],
      },
      {
          type: 'input',
          name: 'projectName',
          message: questions[2],
      },
    //   {
    //       type: 'input',
    //       name: 'description',
    //       message: questions[3],
    //   },
    //   {
    //     type: 'list',
    //     name: 'license',
    //     message: questions[4],
    //     choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', "BSD 3", "None"],
    // },
    // {
    //     type: 'input',
    //     name: 'installation',
    //     message: questions[5],
    // },
    // {
    //     type: 'input',
    //     name: 'test',
    //     message: questions[6],
    // },
    // {
    //     type: 'input',
    //     name: 'information',
    //     message: questions[7],
    // },
    // {
    //     type: 'input',
    //     name: 'contribution',
    //     message: questions[8],
    // },
  ])
  .then((answers) => {
    const readmeContent = gm.generateMarkdown(answers);
    writeToFile("README.md", readmeContent);

})
}
// Function call to initialize app
init();


