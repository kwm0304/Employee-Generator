//Might not end up being data or 'this.'
//Need to specify role
const genManager = function (answers) {
    return `<article class="card">
    <section class="card-title">
    <p class="name">${answers.name}</p>
    <p class="fa-solid fa-mug-hot"> ${answers.role}</p>
</section>
<section>
    <p class="id">ID: ${answers.id}</p>
    <p class="email">Email: <a href="mailto:${answers.email}"></a></p>
    <p class="officeNumber">Office Number: ${answers.officeNumber}</p>
</section>
    </article>`
}
//If role == engineer
const genEngineer = function (data) {
    return `<article class="card">
    <section class="card-title">
        <p class="name">Name: ${this.name}</p>
        <p class="fa-solid fa-glasses"> ${this.role}</p>
    </section>
    <section>
        <p class="id">ID: ${this.id} </p>
        <p class="email">Email: <a href="mailto:${this.email}"></a></p>
        <p class="gitHub" href="https://github.com/${this.github}" target="_blank" rel="noopener noreferrer" >GitHub: ${this.github}</p>
    </section>
    </article>`
}
//If role == intern
const genIntern = function (data) {
    return ` <article class="card">
    <section class="card-title">
        <p class="name">${this.name}</p>
        <p class="fa-solid fa-user-graduate"> ${this.role}</p>
    </section>
    <section>
        <p class="id">ID: ${this.id}</p>
        <p class="email">Email: ${this.email}<a href="mailto:${this.email}"></a></p>
        <p class="school">School: ${this.school}</p>
    </section>
    </article>`
}
//Everything but cards in html
function templateHelper (data) {
    return `<!DOCTYPE html>
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

        </card>
</main>
</body
</html>`
}