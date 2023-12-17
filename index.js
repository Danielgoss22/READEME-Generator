// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of you Project?",
    name: "title",
    when: () => options.name,
  },
  {
    type: "checkbox",
    message: "What sections would you like to add to your README?",
    choices: [
      "Description",
      "Table of Contents",
      "Instalation",
      "Usage",
      "License",
      "Contributing",
      "Tests",
      "Questions",
    ],
    name: "sections",
    when: () => options.choices,
  },
];

inquirer.prompt([]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
