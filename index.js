//Imports 
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const fs = require('fs');
const inquirer = require('inquirer');

let team = []
//Question Arrays
function init() {

function managerQuestions () {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Manager name:', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter manager name");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Manager ID:",
            validate: idInput => {
                if  (isNaN(idInput)) {
                    console.log ("Please enter manager's id")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Manager email:",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter valid email')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Manager office number:",
            validate: officeNumber => {
                if  (isNaN(officeNumber)) {
                    console.log ('Please enter valid office number')
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'confirm',
            name: 'addEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ]).then((answers) => {
        let manager = new Manager (answers.name, answers.id, answers.email, answers.officeNumber)
        team.push(manager)
        if ((answers.newEmployee) === 'false') {
            return writeToFile()
        } else employeeQuestions()
    })
};

function employeeQuestions () {
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "New employee role:",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Employee name:", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter an employee's name");
                    return false; 
                }
            }
        },
        {
            type: 'number',
            name: 'id',
            message: "Employee ID:",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter the employee's ID")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Employee email:",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Employee GitHub:",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Please enter valid gitHub page")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Employee school:",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter intern's school.")
                }}
        },
        {
            type: 'confirm',
            name: 'newEmployee',
            message: 'Would you like to add more team members?',
            default: true
        }
    ]).then((response) => {
        if(response.role == 'Engineer') {
            team.push(new Engineer (response.name, response.id, response.email, response.github))
        } else team.push(new Intern (response.name, response.id, response.email, response.school))
    }).then((response) => {
        if (response.newEmployee === 'false') {
            return writeToFile()
        } else employeeQuestions()
    })
}
    
    function writeToFile() {
        fs.writeFile('./dist/renderedoutput', templateHelper(team), err => {
            if (err)
            console.log(err);
            else {
                console.log('Employee profiles successfully generated.')
            }
        })
    }
}
managerQuestions()
init()
