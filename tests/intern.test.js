const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern")


describe("Testing Employee Class", () => {
  it("should be able to create instance of Intern", () => {
    //data set up
    const name = "Int";
    const id = 50;
    const email = "Int@gmail.com";
    const school = "UCLA"     //Added 

    //create case
    const employee = new Intern(name, id, email, school);

    //make assertion
    expect(employee.name).toBe(name);
    expect(employee.id).toBe(id);
    expect(employee.email).toBe(email);
    expect(employee.school).toBe(school);
  });
});