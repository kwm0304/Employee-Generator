const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, github) {
        //super needed to access 'this.'
        super(name, id, email);
        this.github = github;
    }
    getGitHub() {
        return this.github;
    };
    getRole() {
        return 'Engineer';
    };
}

module.exports = Engineer;