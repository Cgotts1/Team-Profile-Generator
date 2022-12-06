const Employee = require("../lib/Employee");

describe("Testing Employee Class", () => {
  it("should be able to create instance of an engineer", () => {
    //data set up
    const name = "Eng"; 
    const id = 77;
    const email = "eng@gmail.com";
    const gitHub = "9"     //Added this one myself
    //create case
    const employee = new Employee(name, id, email, gitHub);
    //make assertion
    expect(employee.name).toBe(name);
    expect(employee.id).toBe(id);
    expect(employee.email).toBe(email);
    expect(employee.gitHub).toBe(gitHub);
  });
});

//test all aspects of this class