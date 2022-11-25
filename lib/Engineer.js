const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email) {
        super(name, id, email)
        this.github = github;
    
    Engineer.prototype.getGitHub = function() {
        return this.github;
    };
    Engineer.prototype.getRole = function() {
        return Engineer;
    };
}}

module.exports = Engineer;