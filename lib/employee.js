class Employee {
    constructor(name,id,email, officeGitSchool){
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeGitSchool = officeGitSchool;
    }

    getName(){
        return this.name;   
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getofficeGitSchool(){
        return this.officeGitSchool
    }
    getRole(){
        return "Employee";
    }
}

module.exports = Employee;      //Check this later...