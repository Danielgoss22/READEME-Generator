// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

function init() {
  inquirer
    .prompt([
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
        type: "confirm",
        message: "Would you like to add a Table of Contents?",
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
        type: "list",
        message: "What Licensing did you use?",
        choices: [
          "Apache license 2.0",
          "Eclipse Public License 1.0",
          "ISC",
          "The Unlicense",
          "MIT",
          "none",
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
    ])
    .then(function (userInfo) {
      const readMeTemplate = generateMarkdown(userInfo);
      console.log(readMeTemplate);
      fs.writeFile("README1.md", readMeTemplate, function (err) {
        err
          ? console.log("An error has taken place.")
          : console.log("Your information has been written to the file.");
      });
    });
}

init();
