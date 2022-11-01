//employee function
function Employee(data) {
    this.name = data.name;
    this.id = data.id;
    this.email = data.email;
    this.role = data.role;

};
Employee.prototype.getName = function() {
    return `The Employee's name is ${this.name}`
}
Employee.prototype.getId = function() {
    return `The Employee's ID is ${this.id}`
}
Employee.prototype.getEmail = function() {
    return `The Employee's email is ${this.email}`
}
Employee.prototype.getRole = function() {
    return `The Employee's role is ${this.role}`
}
module.exports = Employee;