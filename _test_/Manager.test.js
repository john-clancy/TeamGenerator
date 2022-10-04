//import required for this file
const Manager = require('../lib/Manager');

//creates tests using jest to test just like in Employee
test('creates an manager object', () => {
    data = {
        name: 'Bob',
        id: 1234,
        email: 'test@email.com',
        officeNumber: 4321
    }

    const manager = new Manager(data);
    

    expect(manager.name).toBe('Bob');
    expect(manager.id).toBe(1234);
    expect(manager.email).toBe('test@email.com');
    expect(manager.officeNumber).toBe(4321);
});


test("gets manager's name", () => {
    const manager = new Manager('Bob');

    expect(manager.getName()).toEqual(expect.any(String));
});


test("gets manager's id", () => {
    const manager = new Manager('Bob');
    manager.id = 1234;

    expect(manager.getId()).toEqual(expect.stringContaining(manager.id.toString()));
});


test("gets manager's email", () => {
    const manager = new Manager('Bob');
    manager.email = 'test@email.com'

    expect(manager.getEmail()).toEqual(expect.stringContaining('@'));
});

test("gets manager's office number", () => {
    const manager = new Manager('Bob');
    manager.officeNumber = 4321;

    expect(manager.officeNumber).toEqual(expect.any(Number));
})


test("gets manager's role", () => {
    const manager = new Manager('Bob');
    manager.role = 'manager';

    expect(manager.getRole()).toEqual(expect.any(String));
});