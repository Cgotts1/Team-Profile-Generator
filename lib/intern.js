const employee = require("./Employee")

class Intern extends Intern{
    constructor(name, id, email, officeGitEmail){
        super(name, id, email, officeGitEmail)
        this.officeGitEmail = officeGitEmail
    }
    getRole(){
        return 'Intern'
    }
    getofficeGitEmail(){
        return this.officeGitEmail
    }
}

//will use super


module.exports = Intern;