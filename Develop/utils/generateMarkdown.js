// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ''

  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    return `\n  * ${license}\n`
}

const generateCollaborators = collaboratorNames => {
  if (!collaboratorNames) {
  return ''
  } else {
    let newNames = collaboratorNames.split(',')
    let finalNames = newNames.forEach(name => {
      console.log(name)
      return `
      \n${name}
      `
    })
    console.log(finalNames)
    return `
    ${finalNames}
    `
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Test](#test)
  * [Contact](#contact)

  ## Installation
  The following command is used to install the necessary dependencies:

  \`\`\`
  ${data.installation}
  \`\`\`

  ## License
  ${renderLicenseSection(data.license)}

  
  ## Usage
  ${data.usage}

  ## Contributors
  ${generateCollaborators(data.collaboratorNames)}

  ## Test
  The following command is used to test this project:

  \`\`\`
  ${data.test}
  \`\`\`

  ## Contact
    To see more of my projects view my github at [${data.githubUsername}](https://github.com/${data.githubUsername})
    If you have any questions you can contact me at ${data.email}
`
}

module.exports = generateMarkdown;
