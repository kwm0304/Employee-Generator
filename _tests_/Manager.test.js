const Manager = require('../lib/manager')

test('To see if correct office number is returned from constructor', () => {
    const exampleOfficeNumber = 1
    const manager = new Manager ('Kenan', 1, 'example@gmail.com', exampleOfficeNumber)
   
    expect(manager.officeNumber).toBe(exampleOfficeNumber)
})

test('To see if getRole method returns manager', () => {
    const employeeRole = 'Manager'
    const manager = new Manager

    expect(manager.getRole()).toBe(employeeRole)
})