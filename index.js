//Imports 
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const fs = require('fs');
const inquirer = require('inquirer');
const  templateHelper = require('./src/templateHelper')

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
            validate: value => {
            const valid = !isNaN(parseFloat(value));
            return valid || 'Must be a number'
            }, 
            filter: Number
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
        } else return employeeQuestions()
    })
};

managerQuestions()

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
            validate: value => {
                const valid = !isNaN(parseFloat(value));
                return valid || 'Must be a number'
            }, 
            filter: Number,
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
            when: (input) => input.role === "Engineer"
        },
        {
            type: 'input',
            name: 'school',
            message: "Employee school:",
            when: (input) => input.role === "Intern",
        },
        {
            type: 'confirm',
            name: 'newEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ]).then((response) => {
        const engineer = new Engineer(response.name, response.id, response.email, response.github)
        const intern = new Intern(response.name, response.id, response.email, response.school)
    
        if(response.role == 'Engineer') {
            team.push(engineer)
        } else (team.push(intern))
    
        if (response.newEmployee === true) {
            return employeeQuestions()
        } else writeToFile()
        console.log(team)
    })
}
    
    function writeToFile() {
        fs.writeFile('./dist/renderedoutput.html', templateHelper(team), err => {
            if (err)
            console.log(err);
            else {
                console.log('Employee profiles successfully generated.')
            }
        })
    }
}

init()
