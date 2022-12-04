const employee = require("./Employee")

class Intern extends Intern{
    constructor(name, id, email, officeGitSchool){
        super(name, id, email, officeGitSchool)
        this.officeGitSchool = officeGitSchool
    }
    getRole(){
        return 'Intern'
    }
    getofficeGitEmail(){
        return this.officeGitSchool
    }
}

//will use super


module.exports = Intern;