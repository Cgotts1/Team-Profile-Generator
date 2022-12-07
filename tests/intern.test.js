const Intern = require("../lib/Intern")     // Require Intern class


describe("Testing Employee Class", () => {
  it("should be able to create instance of Intern", () => {
    //data set up
    const name = "Int";
    const id = 50;
    const email = "Int@gmail.com";
    const school = "UCLA"

    // Create case
    const employee = new Intern(name, id, email, school);

    // Make assertion
    expect(employee.name).toBe(name);
    expect(employee.id).toBe(id);
    expect(employee.email).toBe(email);
    expect(employee.school).toBe(school);
  });
});