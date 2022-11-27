function templateHelper(cardArray) {
    //Array to hold genFunction html
    const renderedHTML = []

    const genManager = function (manager) {
        return `<article class="card">
        <section class="card-title">
        <p class="name">${manager.getName()}</p>
        <p class="fa-solid fa-mug-hot"> ${manager.getRole()}</p>
    </section>
    <section>
        <p class="id">ID: ${manager.getId()}</p>
        <p class="email"><a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
        <p class="officeNumber">Office Number: ${manager.officeNumber}</p>
    </section>
        </article>`
    }
    //If role == engineer
    const genEngineer = function (engineer) {
        return `<article class="card">
        <section class="card-title">
            <p class="name">${engineer.getName()}</p>
            <p class="fa-solid fa-glasses"> ${engineer.getRole()}</p>
        </section>
        <section>
            <p class="id">ID: ${engineer.getId()} </p>
            <p class="email"><a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
            <p class="gitHub"><a href="https://github.com/${engineer.getGitHub()}" target="_blank" rel="noopener noreferrer">GitHub: ${engineer.getGitHub()}</a></p>
        </section>
        </article>`
    }
    //If role == intern
    const genIntern = function (intern) {
        return ` <article class="card">
        <section class="card-title">
            <p class="name">${intern.getName()}</p>
            <p class="fa-solid fa-user-graduate"> ${intern.getRole()}</p>
        </section>
        <section>
            <p class="id">ID: ${intern.getId()}</p>
            <p class="email"><a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
            <p class="school">School: ${intern.getSchool()}</p>
        </section>
        </article>`
    }
   //Using getRole method to assign objects in cardArray to appropriate functions -> push to html array -> join them together (concatenating components together into one chunk)
    cardArray.forEach(function(confirmedEmployee) {
        if (confirmedEmployee.getRole() === 'Manager') {
            renderedHTML.push(genManager(confirmedEmployee))
        } else if (confirmedEmployee.getRole() === 'Engineer') {
            renderedHTML.push(genEngineer(confirmedEmployee))
        } else renderedHTML.push(genIntern(confirmedEmployee))
    })

    return renderedHTML.join('')
}

//Exporting the html page to be written
module.exports = (cardArray) => {
    return `

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header>My Team</header>
        <card class="cards">
        ${templateHelper(cardArray)}
        </card>
    </main>
    </body>
    </html>
    `
}