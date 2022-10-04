//gotta import employee
const Employee = require(./Employee.js);
// Intern functions pretty  uch the same as Employee 
function Intern(data){
    Employee.call(this, data);
    this.role = 'Intern';
    this.school = data.school;
};


Intern.prototype.getName = function() {
    return `The Inter's name is ${this.name}`;
};
Intern.prototype.getName = function() {
    return `The Inter's ID is ${this.id}`;
};
Intern.prototype.getName = function() {
    return `The Intern's email is ${this.email}`;
};
Intern.prototype.getName = function() {
    return `The Intern's school is ${this.school}`;
};
Intern.prototype.getName = function() {
    return `The Intern's role is ${this.role}`;
};

module.exports = Intern;