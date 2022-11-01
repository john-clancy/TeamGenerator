//imports required for this file
const Employee = require('../lib/Employee');

//creates tests using jest to test the employee constructor properties and methods
test('creates an employee object', () => {
    data = {
        name: 'Bob',
        id: 1234,
        email: 'test@email.com'
    }
    
    const employee = new Employee(data);

    expect(employee.name).toBe('Bob');
    expect(employee.id).toBe(1234);
    expect(employee.email).toBe('test@email.com');
})


test("gets employee's name", () => {
    const employee = new Employee('Bob');

    expect(employee.getName()).toEqual(expect.any(String));
});


test("gets employee's id", () => {
    const employee = new Employee('Bob');
    employee.id = 1234;

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
});


test("gets employee's email", () => {
    const employee = new Employee('Bob');
    employee.email = 'test@email.com'

    expect(employee.getEmail()).toEqual(expect.stringContaining('@'));
});


test("gets employee's role", () => {
    const employee = new Employee('Bob');
    employee.role = 'employee'

    expect(employee.getRole()).toEqual(expect.any(String));
});