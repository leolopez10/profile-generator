let inquirer = require("inquirer");
let fs = require("fs");
let axios = require("axios");
let generateHTML = require("./generateHTML");







































// let gitHubUserName;

// inquirer
//     .prompt([{
//             type: "input",
//             message: "Hi, let's create a profile document. What is your name?",
//             name: "name"
//         },
//         {
//             type: "input",
//             message: "Lets build a profile document, what is your GitHub user name?",
//             name: "userName"
//         },
//         {
//             type: "rawlist",
//             message: "What is your favorite color?",
//             choices: ["Green", "Blue", "Pink", "Red"],
//             name: "color"
//         }
//     ])
//     .then(function(response) {
//         //GitHub API information using Axios
//         axios
//             .get(queryURL)
//         var githubUsername = response.username.split(' ').join('') + ".json";
//         const queryURL = "https://api.github.com/users/" + gitHubUserName;
//         console.log(queryURL);
//     })