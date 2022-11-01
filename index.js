//imports needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/htmlGeneration');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//create array to store team data
const teamDataArr = [];


//initial array of question for user input via the inquirer package
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the team manager's ID?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter the ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is team manager's email address?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter the email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the team manager's office number?",
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log('Please enter the office number!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: "Which type of teammember would you like to add?",
            choices: ['Engineer', 'Intern', "I don't want to add any more team members"]
        }
    ]).then(managerData => {
        let manager = new Manager(managerData);
        teamDataArr.push(manager);
        if (managerData.role === "Engineer") {
            console.log("ENGINEER QUESTIONS")
            engineerQuestions();
        } else if (managerData.role === "Intern") {
            console.log("INTERN QUESTIONS")
            internQuestions();
        } else {
            console.log("TEAM COMPLETE")
            const pageHTML = generatePage(teamDataArr);
                        writeToFile(pageHTML);
            copyStyles();
        }
    })
};





const engineerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's ID?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter the ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email address?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter the email address!');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the engineer's GitHub username.",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter the GitHub username!");
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: "Which type of teammember would you like to add?",
            choices: ['Engineer', 'Intern', "I don't want to add any more team members"]
        }

    ]).then(engineerData => {
        let engineer = new Engineer(engineerData);
        teamDataArr.push(engineer);
        if (engineerData.role === "Engineer") {
            console.log("ENGINEER QUESTIONS")
            engineerQuestions();
        } else if (engineerData.role === "Intern") {
            console.log("INTERN QUESTIONS")
            internQuestions();
        } else {
            console.log("TEAM COMPLETE")
            const pageHTML = generatePage(teamDataArr);
            writeToFile(pageHTML);
            copyStyles();
        }
    })
};

const internQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's ID?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter the ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email address?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter the email address!');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'school',
            message: "What school is the intern attending?",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter the school name!");
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: "Which type of teammember would you like to add?",
            choices: ['Engineer', 'Intern', "I don't want to add any more team members"]
        }
    ]).then(internData => {
        let intern = new Intern(internData);
        teamDataArr.push(intern);
        if (internData.role === "Engineer") {
            console.log("ENGINEER QUESTIONS")
            engineerQuestions();
        } else if (internData.role === "Intern") {
            console.log("INTERN QUESTIONS")
            internQuestions();
        } else {
            console.log("TEAM COMPLETE")
            const pageHTML = generatePage(teamDataArr);
            writeToFile(pageHTML);
            copyStyles();
        }
    })
}





//function to create page
const writeToFile = (data) => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) throw err;
    });
};

//function call to initiate questions
questions()