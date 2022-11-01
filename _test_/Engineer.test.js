//import required for the file
const Engineer = require('../lib/Engineer');

//creates tests using jest to test just like in Employee
test('creates an engineer object', () => {
    data = {
        name: 'Bob',
        id: 1234,
        email: 'test@email.com',
        github: 'ghUsername'
    }
    const engineer = new Engineer(data);
    

    expect(engineer.name).toBe('Bob');
    expect(engineer.id).toBe(1234);
    expect(engineer.email).toBe('test@email.com');
    expect(engineer.github).toBe('ghUsername');
})


test("gets engineer's name", () => {
    const engineer = new Engineer('Bob');

    expect(engineer.getName()).toEqual(expect.any(String));
});


test("gets engineer's id", () => {
    const engineer = new Engineer('Bob');
    engineer.id = 1234;

    expect(engineer.getId()).toEqual(expect.stringContaining(engineer.id.toString()));
});


test("gets engineer's email", () => {
    const engineer = new Engineer('Bob');
    engineer.email = 'test@gmail.com'

    expect(engineer.getEmail()).toEqual(expect.stringContaining('@'));
});


test("gets engineer's github", () => {
    const engineer = new Engineer('Bob');
    engineer.github = 'ghUsername';

    expect(engineer.getGithub()).toEqual(expect.any(String));
})


test("gets engineer's role", () => {
    const engineer = new Engineer('Bob');
    engineer.role = 'engineer'

    expect(engineer.getRole()).toEqual(expect.any(String));
});