let inquirer = require("inqurirer");
let fs = require("fs");


inquirer
    .prompt([{
        type: "input",
        messages: "Lets build a profile document, what is your GitHub user name?",
        name: "userName"
    }])
    .then(function(response) {
        //GitHub API information
        const queryURL = "https://api.github.com/users/" + userName
        let userName =

    })

const questions = [
    "Lets build a profile document, what is your GitHub user name?",
    "What is your favorite color?"
];

function writeToFile(fileName, data) {

}

function init() {

    init();