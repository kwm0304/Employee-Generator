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
    const id = 1
    const employee = new Employee('Kenan', id)
    
    expect(employee.id).toBe(1)
});

test('To see if correct email was returned from constructor', () => {
    const email = 'example@gmail.com'
    const employee = new Employee('Kenan', 1, email)
    

    expect(employee.email).toBe(email)
});

test('To see if getName method returns correct name', () => {
    const testName = 'Cameron'
    const employee = new Employee(testName)

    expect(employee.getName()).toBe('Cameron')
})

test('To see if getRole method reutrns Employee', () => {
    const employeeRole = 'Employee'
    const employee = new Employee

    expect(employee.getRole()).toBe(employeeRole)
})

test('To see if getId method returns the correct id', () => {
    const id = 1
    const employee = new Employee('Kenan', id)

    expect(employee.getId()).toBe(id)
});

test('To see if getEmail returns the correct email', () => {
    const email = 'example@gmail.com'
    const employee = new Employee ('Kenan', 1, email)

    expect(employee.getEmail()).toBe(email)
})