//gotta import employee
const Employee = require('./Employee');
// Manager functions pretty  uch the same as EmEmploployee 
function Manager(data) {
        Employee.call(this, data);
        this.role = 'Manager';
        this.officeNumber = data.officeNumber;
    };


Manager.prototype.getName = function () {
    return `The Manager's name is ${this.name}`
};
Manager.prototype.getName = function () {
    return `The Manager's ID is ${this.id}`
};
Manager.prototype.getName = function () {
    return `The Manager's email is ${this.email}`;
};
Manager.prototype.getName = function () {
    return `${this.name}'s role is ${this.role}`;
};

module.exports = Manager;