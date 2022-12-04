const Employee = require("../lib/Employee");

describe("Testing Employee Class", () => {
  it("should be able to create instance", () => {
    //data set up
    const name = "Ana";
    const role = "Intern"   //Added this one myself
    const id = 77;
    const email = "ana@ana.com";
    const officeGitSchool = "userinput"     //Added this one myself
    //create case
    const employee = new Employee(name, role, id, email, officeGitSchool);
    //make assertion
    expect(employee.name).toBe(name);
    expect(employee.role).toBe(role);
    expect(employee.id).toBe(id);
    expect(employee.email).toBe(email);
    expect(employee.officeGitSchool).toBe(officeGitSchool);

  });
});

//test all aspects of this class

// No mocking necessary