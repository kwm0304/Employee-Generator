const Intern = require('../lib/intern')

test('To see if correct school is returned from constructor', () => {
    const exampleSchool = 'UNCC'
    const intern = new Intern('Kenan', 1, 'example@gmail.com', exampleSchool)

    expect(intern.school).toBe(exampleSchool)
})

test('To see if getSchool method returns correct school', () => {
    const exampleSchool = 'UNCC'
    const intern = new Intern ('Kenan', 1, 'example@gmail.com', exampleSchool)

    expect(intern.getSchool()).toBe(exampleSchool)
})

test('To see if getRole method returns intern', () => {
    const employeeRole = 'Intern'
    const intern = new Intern

    expect(intern.getRole()).toBe(employeeRole)
})