const Engineer = require('../lib/Engineer')

test('To see if correct github is returned from constructor', () => {
    const exampleGitHub = 'kwm0304'
    const engineer = new Engineer('Kenan', 1, 'example@gmail.com', exampleGitHub)

    expect(engineer.github).toBe(exampleGitHub)
})

test('To see if getGitHub method returns correct engineer github', () => {
    const exampleGitHub = 'kwm0304'
    const engineer = new Engineer ('Kenan', 1, 'example@gmail.com', exampleGitHub)

    expect(engineer.getGitHub()).toBe(exampleGitHub)
})

test('To see if getRole method returns Engineer', () => {
    const employeeRole = 'Engineer'
    const engineer = new Engineer

    expect(engineer.getRole()).toBe(employeeRole)
})