// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of you Project?",
    name: "title",
  },
  {
    type: "input",
    message: "What would you like in your Description?",
    name: "description",
  },
  {
    type: "input",
    message: "What would you like in your Table of Contents?",
    name: "tableOfContent",
  },
  {
    type: "input",
    message: "What would you like in your Installation Instructions?",
    name: "installation",
  },
  {
    type: "input",
    message: "What would you like in your Usage Instructions?",
    name: "usage",
  },
  {
    type: "checkbox",
    message: "What Licensing did you use?",
    choices: [
      "Academic Free License v3.0",
      "Apache license 2.0",
      "Artistic license 2.0",
      "Boost Software License 1.0",
      "BSD 2-clause Simplified license",
      "BSD 3-clause New or Revised license",
      "BSD 3-clause Clear license",
      "BSD 4-clause Original or Old license",
      "BSD Zero-Clause license",
      "Creative Commons license family",
      "Creative Commons Zero v1.0 Universal",
      "Creative Commons Attribution 4.0",
      "Creative Commons Attribution ShareAlike 4.0",
      "Do What The F*ck You Want To Public License",
      "Educational Community License v2.0",
      "Eclipse Public License 1.0",
      "Eclipse Public License 2.0",
      "European Union Public License 1.1",
      "GNU Affero General Public License v3.0",
      "GNU General Public License family",
      "GNU General Public License v2.0",
      "GNU General Public License v3.0",
      "GNU Lesser General Public License family",
      "GNU Lesser General Public License v2.1",
      "GNU Lesser General Public License v3.0",
      "ISC",
      "LaTeX Project Public License v1.3c",
      "Microsoft Public License",
      "MIT",
      "Mozilla Public License 2.0",
      "Open Software License 3.0",
      "PostgreSQL License",
      "SIL Open Font License 1.1",
      "University of Illinois/NCSA Open Source License",
      "The Unlicense",
      "zLib License",
    ],
    name: "license",
  },
  {
    type: "input",
    message: "Who were the Contributors to this application?",
    name: "contribute",
  },
  {
    type: "input",
    message: "What Tests needed to be run?",
    name: "test",
  },
  {
    type: "input",
    message: "What is your GitHub profile?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your Email?",
    name: "email",
  },
];

inquirer.prompt([]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
