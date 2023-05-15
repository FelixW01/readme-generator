// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `https://img.shields.io/badge/license-${license}-blue`
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
  return `[![License: MIT](${renderLicenseBadge}.svg)](https://opensource.org/licenses/${license})`
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    return `
    # License
    ${renderLicenseLink(license)}
    `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  https://github.com/${data.username}/${data.title}
  # Description
  ${data.description}
  #Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  # Installation
  ${data.installation}
  # Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ${data.license}
  # Contributing
  ${data.contributing}
  # Tests
  ${data.tests}
  # Questions
  If you have any questions about the app, please contact ${data.email}. 
`;
}

module.exports = generateMarkdown;
