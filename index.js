//bring in inquirer


//create a function that run inquierer prompt question .then(()=> inquirer.prompt.then)   Main point here: chain the promises so code doesnt end until you dont want anymore teammembers

//end point = loop through employee array and then convert to html

// Brough in inquirer
const inquirer = require("inquirer");
const fs = require("fs");


const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
// const { log } = require("console");
// const Employee = require("./lib/Employee")



let employees = []


// Console.log
console.log("Please build your team!");

// Questions at the beginning for creating a manager
const questionsManager = [
  {
    type: "input",
    message: "What is the team manager's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the team manager's id?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the team manager's email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the team manager's office number?",
    name: "officeNumber",
  },
];

// Main question that will be asked everytime an employee has been created
const mainQuestion = [
{
  type: "list",
  message: "Which type of team member would you like to add?",
  name: "position",
  choices: ["Engineer", "Intern", "I don't want to add anymore team members"],
}
];


// Questions for adding an Engineer
const questionsEngineer = [
  {
    type: "input",
    message: "What is the team Engineer's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the team Engineer's id?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the team Engineer's email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the team Engineer's GitHub username?",
    name: "gitHub",
  },
];


// Questions for adding an Intern
const questionsIntern = [
  {
    type: "input",
    message: "What is the team Intern's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the team Intern's id?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the team Intern's email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the team Intern's school?",
    name: "school",
  },
];


function generateHTML(){
  const template = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Team Generator</title>
  </head>



  <body>
  <header class="my-team">
    <h1 class="title">My Team</h1>
  </header>

  <div class="cards-container">
    <div class="card">
      <h2 class="name">${answers.name}</h2>
      <h3 class="role">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-cup-hot-fill"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6H.5ZM13 12.5a2.01 2.01 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5Z"
          />
          <path
            d="m4.4.8-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 3.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8Zm3 0-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 6.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8Zm3 0-.003.004-.014.019a4.077 4.077 0 0 0-.204.31 2.337 2.337 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.198 3.198 0 0 1-.202.388 5.385 5.385 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 9.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8Z"
          /></svg
        >Manager
      </h3>

      <div class="info">
        <h4>ID: ${answers.id}</h4>
        <h4>Email: ${answers.email}</h4>
        <h4>Office number: ${answers.officeNumber}</h4>
      </div>
    </div>
  </div>  
`;

  // Outputs readme file
  fs.writeFile("./dist/output.html", template, () => {
    console.log("Creating team...");
    generateHTML()
  });

}
// Enables prompting of questions and takes in users input
inquirer.prompt(questionsManager).then((answers) => {
  let newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
  employees.push(newManager)
  console.log(employees);
  mainQuestionFunction()

})







function mainQuestionFunction(){
  
  inquirer.prompt(mainQuestion).then((answers) => {        

//"Engineer", "Intern", "I don't want to add anymore team members"
if(answers.position === "Engineer"){
  inquirer.prompt(questionsEngineer).then((answers) => {
    let newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub)
    employees.push(newEngineer)
  console.log(employees)})
  mainQuestionFunction()
  
}

else if(answers.position === "Intern"){
  inquirer.prompt(questionsIntern).then((answers) => {
    let newIntern = new Intern(answers.name, answers.id, answers.email, answers.school)
    employees.push(newIntern)
  console.log(employees)})
  mainQuestionFunction()


}else{
  console.log("Generating team")
  //To do: Call generateProfile(employees) and forloop concating objects html cards
}
  })
}