const Employee = require ('../lib/Employee')

test ('To see if new instance of Employee is created', () => {
    const employee = new Employee
    expect (employee).toBeInstanceOf(Employee)
});

test('To see if correct name was returned from constructor', () => {
    const employeeName = new Employee('Kenan');
    expect(employeeName.name).toBe('Kenan');
});

test('To see if correct id was returned from constructor', () => {
    const employee = new Employee('Kenan', id)
    const id = 1

    expect(employee.id).toBe(1)
});

test('To see if correct email was returned from constructor', () => {
    const employee = new Employee('Kenan', 1, email)
    const email = 'example@gmail.com'

    expect(employee.email).toBe(email)
});

test('To see if getName method returns correct name', () => {
    const employee = new Employee
    const testName = 'Cameron'

    expect(employee.getName()).toBe(testName)
})

test('To see if getRole method reutrns Employee', () => {
    const employee = new Employee

    expect(employee.getRole()).toBe('Employee')
})

test('To see if getId method returns the correct id', () => {
    const employee = new Employee('Kenan', id)
    const id = 1

    expect(employee.getId()).toBe(id)
});

test('To see if getEmail returns the correct email', () => {
    const employee = new Employee
    const employeeEmail = 'example@gmail.com'

    expect(employee.getEmail()).toBe(employeeEmail)
})