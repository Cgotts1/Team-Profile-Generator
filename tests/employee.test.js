const Employee = require("../lib/Employee");   // Require Employee class

describe("Testing Employee Class", () => {
  it("should be able to create instance", () => {
    // Data set up
    const name = "Ana";
    const id = 77;
    const email = "ana@ana.com";
    
    // Create case
    const employee = new Employee(name, id, email);
    
    // Make assertion
    expect(employee.name).toBe(name);
    expect(employee.id).toBe(id);
    expect(employee.email).toBe(email);
  });
});