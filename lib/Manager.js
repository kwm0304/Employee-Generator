const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email) {
        super(name, id, email)
        this.officeNumber = this.officeNumber;
    
    Manager.prototype.getRole = function() {
        return 'Manager';
    };
}}

module.exports = Manager;