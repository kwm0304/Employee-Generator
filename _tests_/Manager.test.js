const Manager = require('../lib/manager')

test('To see if correct school is returned from constructor', () => {
    const manager = new Manager('Kenan', exampleOfficeNumber)
    const exampleOfficeNumber = 1

    expect(manager.officeNumber).toBe(exampleOfficeNumber)
})

test('To see if getRole method returns manager', () => {
    const manager = new Manager

    expect(manager.getRole()).toBe('Manager')
})