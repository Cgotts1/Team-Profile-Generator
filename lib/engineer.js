const employee = require("./Employee")

class Engineer extends Employee{
    constructor(name, id, email, officeGitSchool){
        super(name, id, email, officeGitSchool)
        this.officeGitSchool = officeGitSchool
    }
    getRole(){
        return 'Engineer'
    }
    getofficeGitEmail(){
        return this.officeGitSchool
    }
}
//will use super

module.exports = Engineer;