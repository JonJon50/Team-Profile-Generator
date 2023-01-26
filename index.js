const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./src/page-template.js");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Array for answers to questions
const newStaffMemberData = [];

// Array object questions asked
const questions = async () => {
  const answers = await inquirer.prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is your ID number?",
      name: "id",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
    {
      type: "list",
      message: "What is your role?",
      name: "role",
      choices: ["Engineer", "Intern", "Manager"],
    },
  ]);
;
// console.log()answers
//  manager selected, answer these questions
if (answers.role === "Manager") {
  const managerAns = await inquirer.prompt([
    {
      type: "input",
      message: "What is your office number?",
      name: "officeNumber",
    },
  ])
  .then((data) => {
    console.log(data.officeNumber)
    const newManager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      data.officeNumber
    );
    newStaffMemberData.push(newManager);
  promptQuestions()
  })
//  // const newManager = new Manager(
//    // answers.name,
//     answers.id,
//     answers.email,
//     answers.officeNumber
//   );
//   newStaffMemberData.push(newManager);
// promptQuestions()
  // if engineer selected answer these set questions
} else if (answers.role === "Engineer") {
  const githubAns = await inquirer.prompt([
    {
      type: "input",
      message: "What is your get Github user name?",
      name: "github",
    },
  ]);
  const newEngineer = new Engineer(
    answers.name,
    answers.id,
    answers.email,
    githubAns.github
  );
  newStaffMemberData.push(newEngineer);
  // if Intern selected, answer these questions
  promptQuestions()
} else if (answers.role === "Intern") {
  const internAns = await inquirer.prompt([
    {
      type: "input",
      message: "What university did you attend?",
      name: "school",
    },
  ]);
  const newIntern = new Intern(
    answers.name,
    answers.id,
    answers.email,
    internAns.school
  );
  newStaffMemberData.push(newIntern);
  promptQuestions()
}
}

 async function promptQuestions() { 
 const addMemberAns = await inquirer.prompt([
    {
      name: "addMember",
      type: "list",
      choices: ["Add a new member", "Create team"],
      message: "What would you like to do next?",
    },
  ]);
    if (addMemberAns.addMember === "Add a new member") {
     console.log("This add a new member")
      questions();
}
    if(addMemberAns.addMember === "Create team"){
      console.log("This create team")
      createTeam();
    }
    }
 
function createTeam() {
  fs.writeFileSync(
    "./dist/team.html", generateTeam(newStaffMemberData),"utf-8");
  console.log("New Hire");
}
     questions()