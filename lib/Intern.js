const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, id, email) {
        super(name, id, email)
        this.school = school;
    
    Intern.prototype.getSchool = function() {
        return this.school;
    };
    Intern.prototype.getRole = function() {
        return 'Intern';
    };
}}

module.exports = Intern;