//=======================//
// Node Packet Managment               
//=======================//
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const axios = require("axios");
const generator = require("./generateHTML");
// const HTMLtoPDF = require("html-pdf")


//===========//
// Promises                            
//===========//

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);



//========================================================================//
// These are constant variable that we will need to develop our PDF file                 
//========================================================================//
let userInfo;
let userStars;

// let profileImg;
// let userName;
// let userLocation;
// let userGitProfile;
// let userBlog;
// let userBio;
// let numberOfRepos;
// let numberOfFollowers;
// let numberOfFollowing;


//=======================================================
//  Prompt user to get github username and favorite color                 
//=======================================================
function promptUser() {
    return inquirer.prompt([{
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




//=======================//
// Node Packet Managment               
//=======================//
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const axios = require("axios");
const puppeteer = require("puppeteer")
const generator = require("./generateHTML");

//===========//
// Promises                            
//===========//
const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);

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
//organize all the information I want into one object               
//=======================================================
function dataToObject(userInfo, userStars, inputName, userColor) {
    return data = {
        name: inputName,
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

//======================================
//function to write html to pdf
//======================================
async function HTMLtoPDF(html, fileNamePDF) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
    await page.setContent(html);
    await page.pdf({
        path: fileNamePDF,
        format: "A4",
    });

    await browser.close();
}

//====================================
//init function to run the whole thing
//====================================
async function init() {
    console.log("================================STARTING========================")
    let data = {};

    try {
        //Ask user git hub questions
        const userInput = await promptUser();
        //Store every answer
        const inputName = userInput.name
        const gitHubLogin = userInput.username;
        const userColor = userInput.color;
        const fileNameHTML = gitHubLogin + ".html";
        const fileNamePDF = gitHubLogin + ".pdf";

        //GET github user information and store them as an array of promises
        const res = await Promise.all(
            [
                axios.get(`https://api.github.com/users/${gitHubLogin}`),
                axios.get(`https://api.github.com/users/${gitHubLogin}/starred`),
            ]
        );

        //After successful GET: store responses to an array (use map to make  res.data and store into array)
        const [userInfo, userStars] = res.map(res => res.data);

        //Convert all the data from the GET promises and user responses into one object
        data = dataToObject(userInfo, userStars, inputName, userColor);

        //Make html template with all the data collected in object print
        html = generator.generateHTML(data);

        //make an html file
        writeFileAsync(fileNameHTML, html, err => err ? err : fileNameHTML);
        //make a pdf file
        HTMLtoPDF(html, fileNamePDF);

        //make a read file


        //log success
        console.log(" log is successful")


    } catch (err) {
        console.log(err);
    }

}
init();