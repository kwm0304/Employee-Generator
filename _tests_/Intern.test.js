const Intern = require('../lib/intern')

test('To see if correct school is returned from constructor', () => {
    const intern = new Intern('Kenan', 1, 'example@gmail.com', exampleSchool)
    const exampleSchool = 'UNCC'

    expect(intern.school).toBe(exampleSchool)
})

test('To see if getSchool method returns correct school', () => {
    const intern = new Intern
    const exampleSchool = 'UNCC'

    expect(intern.getSchool()).toBe(exampleSchool)
})

test('To see if getRole method returns intern', () => {
    const intern = new Intern

    expect(intern.getRole()).toBe('Intern')
})