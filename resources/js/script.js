//=======================//
// Node Packet Managment               
//=======================//
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const axios = require("axios");
const generator = require("./generateHTML");
// const puppter = require("html-pdf")


//===========//
// Promises                            
//===========//

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

//=======================================================
//  Prompt user to get github username and favorite color                 
//=======================================================
function promptUser() {
    return inquirer.prompt([{
            type: "input",
            message: "Hi, what is your first and last name?",
            name: "name",
        },
        {
            type: "input",
            message: "Enter your GitHub username:",
            name: "username",
        },
        {
            type: "rawlist",
            message: "pick a color",
            choices: Object.keys(generator.colors),
            name: "color",
        }
    ])
}

//=======================================================
//  Prompt user to get github username and favorite color                 
//=======================================================
function dataToObject(userInfo, userStars, userColor) {
    return data = {
        profileImg: userInfo.avatar_url + ".png",
        userName: userInfo.login,
        userLocation: userInfo.location,
        userGitProfile: userInfo.html_url,
        userBlog: userInfo.blog,
        userBio: userInfo.bio,
        numberOfRepos: userInfo.public_repos,
        numberOfFollowers: userInfo.followers,
        numberOfFollowing: userInfo.following,
        color: userColor,
        stars: userStars.length,
    }
}

//====================================
//init function to run the whole thing
//====================================
async function init() {
    console.log("================================STARTING========================")
    let data = {};
    let fileName;

    try {
        //Ask user git hub questions
        const userInput = await promptUser();
        const gitHubLogin = userInput.username;
        const userColor = userInput.color;

        //GET github user information and store them with promises
        const res = await Promise.all(
            [
                axios.get(`https://api.github.com/users/${gitHubLogin}`),
                axios.get(`https://api.github.com/users/${gitHubLogin}/starred`),
            ]
        );

        //After successful GET store urls in an array for later
        const [userInfo, userStars] = res.map(res => res.data);

        //Take all the data from the responses and organize it into an object
        data = dataToObject(userInfo, userStars, userColor);

        //Make html file with all the data collected in object
        html = generator.generateHTML(data);
        console.log(html);
        console.log(" log is successful")


    } catch (err) {
        console.log(err);
    }

}
init();