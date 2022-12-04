const employee = require("./Employee")

class Engineer extends Employee{
    constructor(name, id, email, officeGitEmail){
        super(name, id, email, officeGitEmail)
        this.officeGitEmail = officeGitEmail
    }
    getRole(){
        return 'Engineer'
    }
    getofficeGitEmail(){
        return this.officeGitEmail
    }
}
//will use super

module.exports = Engineer;