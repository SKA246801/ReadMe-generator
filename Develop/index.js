// TODO: Include packages needed for this application
const fs = require('fs');
const { prompts } = require('inquirer');
const inquirer = require('inquirer');
const path = require('path')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project',
        validate: nameInput => {
            if (nameInput) {
                return true
            } else {
                console.log('Please enter your name!')
                return false
            }
        }
    }, 
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true
            } else {
                console.log('Please enter a description!')
                return false
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm i',
        validate: installation => {
            if (installation) {
                return true
            } else {
                console.log('Please enter the command for to install your dependences!')
                return false
            }
        } 
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
        default: 'npm test',
        validate: test => {
            if (test) {
                return true
            } else {
                console.log('Please enter the comman to run tests!')
                return false
            }
        } 
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using this repo?',
        validate: usage => {
            if (usage) {
                return true
            } else {
                console.log('Please enter how to use the repo!')
                return false
            }
        } 
    },
    {
        type: 'confirm',
        name: 'confirmCollaborators',
        message: 'Would you like to add any collaborators?',
        default: false,
    },
    {
        type: 'input',
        name: 'collaboratorNames',
        message: 'Enter the name of the collaborators (separate them using a comma)',
        when: ({ confirmCollaborators }) => confirmCollaborators
    },
   {
       type: 'input',
       name: 'githubUsername',
       message: 'Enter your GitHub Username',
       validate: username => {
            if (username) {
                return true
            } else {
                console.log('Please enter your GitHub Username!')
                return false
            }
        } 
   },
   {
       type: 'input',
       name: 'email',
       message: 'Enter your email address',
       validate: email => {
            if (email) {
                return true
            } else {
                console.log('Please enter your email address!')
                return false
            }
        }
   }
];
// const collectInputs = async (inputs = []) => {
//     const prompts = [
//       {
//         type: 'input',
//         name: 'inputValue',
//         message: 'Enter some input: '
//       },
//       {
//         type: 'confirm',
//         name: 'again',
//         message: 'Enter another input? ',
//         default: true
//       }
//     ];
  
//     const { again, ...answers } = await inquirer.prompt(prompts);
//     const newInputs = [...inputs, answers];
//     return again ? collectInputs(newInputs) : newInputs;
//   };
  
//   const main = async () => {
//     const inputs = await collectInputs();
//     console.log(inputs);
//   };
  
//   main();
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(inquirerResponses => {
    console.log(inquirerResponses)
    writeToFile('readMe.md',generateMarkdown({ ...inquirerResponses }))
    }).catch(err => {
        if (err) {
            console.log(err)
        }
    })
}

// Function call to initialize app
init()

