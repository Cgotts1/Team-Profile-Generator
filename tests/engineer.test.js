const Engineer = require("../lib/Engineer");


describe("Testing Employee Class", () => {
  it("should be able to create instance of an engineer", () => {
    //data set up
    const name = "Eng"; 
    const id = 77;
    const email = "eng@gmail.com";
    const gitHub = "9"    

    // Create case
    const employee = new Engineer(name, id, email, gitHub);

    // Make assertion
    expect(employee.name).toBe(name);
    expect(employee.id).toBe(id);
    expect(employee.email).toBe(email);
    expect(employee.gitHub).toBe(gitHub);
  });
});