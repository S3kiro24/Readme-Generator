const fs = require('fs');
const inquirer = require('inquirer');

const licenses = [
  'MIT License',
  'GNU GPLv3',
  'Apache License 2.0',
  'ISC License',
  'None'
];

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How do you install your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How do you use your project?',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'What are the contribution guidelines?',
    },
    {
      type: 'input',
      name: 'testing',
      message: 'What are the testing instructions?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: licenses,
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'What is your GitHub username?',
    },
  ])
  .then((answers) => {
    // Create the README content
    const readmeContent = `
# ${answers.title}

## Description

${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribution Guidelines](#contribution-guidelines)
- [Testing Instructions](#testing-instructions)
- [Questions](#questions)
- [License](#license)

## Installation

${answers.installation}

## Usage

${answers.usage}

## Contribution Guidelines

${answers.contribution}

## Testing Instructions

${answers.testing}

## Questions

If you have any questions, please feel free to reach out to me on [GitHub](https://github.com/${answers.githubUsername}).

## License

This project is licensed under the ${answers.license}.

![License Badge](https://img.shields.io/badge/license-${encodeURIComponent(answers.license)}-green)

---

`;

    // Write the README.md file
    fs.writeFile('README.md', readmeContent, (err) => {
      if (err) {
        console.error('Error writing README.md:', err);
      } else {
        console.log('README.md has been successfully generated!');
      }
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });
