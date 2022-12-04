const employee = require("./Employee")

class Manager extends Manager{
    constructor(name, id, email, officeGitSchool){
        super(name, id, email, officeGitSchool)
        this.officeGitSchool = officeGitSchool
    }
    getRole(){
        return 'Manager'
    }
    getofficeGitEmail(){
        return this.officeGitSchool
    }
}


//will use super

module.exports = Manager;