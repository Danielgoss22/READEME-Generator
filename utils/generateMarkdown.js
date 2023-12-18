function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  if (license === "ISC") {
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
  }
  if (license === "Apache license 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  if (license === "Eclipse Public License 1.0") {
    return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
  }
  if (license === "The Unlicense") {
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
  }
  if (license === "none") {
    return "";
  }
}

function renderLicenseLink(license) {
  if (license === "none") {
    return "";
  } else {
    return "- [License](#license)";
  }
}

function renderLicenseSection(license) {
  if (license === "none") {
    return "";
  } else {
    return "## License";
  }
}

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}


## Description
${data.description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
${renderLicenseLink(data.license)}
  

## Installation
${data.instalation}



## Usage
${data.usage}



## License

I am using ${data.license}


## Contributors
${data.contribute}


## Test
${data.test}


## Questions
${data.github}

You can reach me with any questions at ${data.email}
`;
}

module.exports = generateMarkdown;
