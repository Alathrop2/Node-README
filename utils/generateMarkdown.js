// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

//! Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# Project Title ${renderLicenseBadge(data.license)} 
  ${data.title}
 # Description
  ${data.description}
  # installation
  ${data.installation}
  # usage
  ${data.usage}
  # contributors
  ${data.contributors}
  # test instructions
  ${data.testInstructions}
  # license
  ${data.license}
  # github
  ${data.github}
  # email
  If you have any additional questions about this project, email me at:
  ${data.email} 
`;
}

module.exports = generateMarkdown;
