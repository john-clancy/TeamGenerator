const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

//function to generate cards
const generateCards = teamDataArr => {
    if (teamDataArr.length === 0) {
        return '';
    }
    return `
    ${teamDataArr
        .filter(element => element instanceof Manager)
        .map(({role, name, id, email, officeNumber}) => {
        return `
                    <li>
                        <div class="card m-4" style="width: 18rem;">
                            <div class="card-header bg-gradient">
                                <p class="fs-4 fw-bold">${name}</p</br>
                                <p class="fs-5 fw-bolder"><i class="fa-solid fa-mug-hot"></i>  ${role}</p>
                                
                            </div>
                            <ul class="list-group list-group-flush p-4">
                                <li class="list-group-item fw-semibold">ID: ${id}</li>
                                <li class="list-group-item fw-semibold">Email: <a href="mailto: ${email}">${email}</a></li>
                                <li class="list-group-item fw-semibold">Office Number: ${officeNumber}</li>
                            </ul>
                        </div>
                    </li>
        `;
        })
        .join('')}
    ${teamDataArr
        .filter(element => element instanceof Engineer)
        .map(({role, name, id, email, github}) => {
        return `
                    <li>
                        <div class="card m-4" style="width: 18rem;">
                            <div class="card-header bg-gradient">
                                <p class="fs-4 fw-bold">${name}</p</br>
                                <p class="fs-5 fw-bolder"><i class="fa-solid fa-gears"></i>  ${role}</p>
                            </div>
                            <ul class="list-group list-group-flush p-4">
                                <li class="list-group-item fw-semibold">ID: ${id}</li>
                                <li class="list-group-item fw-semibold">Email: <a href="mailto: ${email}">${email}</a></li>
                                <li class="list-group-item fw-semibold">GitHub: <a href="https://www.github.com/${github}" target="_blank">${github}</a></li>
                            </ul>
                        </div>
                    </li>
        `;
        })
        .join('')}
    ${teamDataArr
        .filter(element => element instanceof Intern)
        .map(({role, name, id, email, school}) => {
        return `
                    <li>
                        <div class="card m-4" style="width: 18rem;">
                            <div class="card-header bg-gradient">
                            <p class="fs-4 fw-bold">${name}</p</br>
                            <p class="fs-5 fw-bolder"><i class="fa-solid fa-graduation-cap"></i>  ${role}</p>
                            </div>
                            <ul class="list-group list-group-flush p-4">
                                <li class="list-group-item fw-semibold">ID: ${id}</li>
                                <li class="list-group-item fw-semibold">Email: <a href="mailto: ${email}">${email}</a></li>
                                <li class="list-group-item fw-semibold">School: ${school}</li>
                            </ul>
                        </div>
                    </li>
        `;
        })
    .join('')}
    `;
};
const generatePage = (data) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <header>
            <nav class="navbar bg-gradient">
                <div class="container-fluid justify-content-center">
                    <span class="navbar-brand mb-0 py-5 h1 fs-1 text-light text-center">Team Profile</span>
                </div>
            </nav>
        </header>
        <main>
            <div class="container-fluid d-flex justify-content-center">
                <ul class="d-flex flex-row flex-wrap list-unstyled justify-content-center">
                    ${generateCards(data)}
                </ul>
            </div>
        </main>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
            crossorigin="anonymous"></script>
    </body>
    </html>
    `
}


module.exports = generatePage