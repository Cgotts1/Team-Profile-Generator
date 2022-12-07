const Manager = require("../lib/Manager"); // Require Manager class

describe("Testing Employee Class", () => {
  it("should be able to create instance of Manager", () => {
    //data set up
    const name = "Man";
    const id = 77;
    const email = "Man.com";
    const officeNumber = 2;
    // Create case
    const employee = new Manager(name, id, email, officeNumber);

    // Make assertion
    expect(employee.name).toBe(name);
    expect(employee.id).toBe(id);
    expect(employee.email).toBe(email);
    expect(employee.officeNumber).toBe(officeNumber);
  });
});