//gotta import employee
const Employee = require(./Employee.js);
// Engineer functions pretty  uch the same as Employee 
function Engineer(data){
    Employee.call(this, data);
    this.role = 'Engineer';
    this.github = data.github;
};


Engineer.prototype.getName = function() {
    return `The Engineer's name is ${this.name}`
};
Engineer.prototype.getName = function() {
    return `The Engineer's ID is ${this.id}`;
};
Engineer.prototype.getName = function() {
    return `The Engineer's email is ${this.email}`
};
Engineer.prototype.getName = function() {
    return `The Engineer's GitHub is ${this.github}`;
};
Engineer.prototype.getName = function() {
    return `The Engineer's role is ${this.role}`
};

module.exports = Engineer;