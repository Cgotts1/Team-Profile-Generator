const Employee = require("../lib/Employee");
// const {getOfficeNumber} = require("../lib/Manager")


describe("Testing Employee Class", () => {
  it("should be able to create instance of Manager", () => {
    //data set up
    const name = "Man";
    const id = 77;
    const email = "Man.com";
    const officeNumber = 2     
    //create case
    const employee = new Employee(name, id, email, officeNumber);
    //make assertion
    expect(employee.name).toBe(name);
    expect(employee.id).toBe(id);
    expect(employee.email).toBe(email);
    expect(employee.officeNumber).toBe(officeNumber);
  });
});

//test all aspects of this class