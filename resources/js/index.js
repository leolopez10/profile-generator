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


function gitHubData(queryUrl) {


    //getting github infomration
    axios
        .get(queryUrl)
        .then(function(res) {
            // console.log("Fetching user info.....");
            userInfo = {
                profileImg: res.data.avatar_url + ".png",
                userName: res.data.login,
                userLocation: res.data.location,
                userGitProfile: res.data.html_url,
                userBlog: res.data.blog,
                userBio: res.data.bio,
                numberOfRepos: res.data.public_repos,
                numberOfFollowers: res.data.followers,
                numberOfFollowing: res.data.following
            }
            console.log("Returning user info.....");
            return userInfo;

        })
        .catch(function(err) {
            console.log(err);
        })


}

function gitHubStars(queryStarUrl) {
    axios
        .get(queryStarUrl)
        .then(function(res) {
            userStars = res.data.length;
            console.log("Returning user stars.....");
            return userStars;
        })
        .catch(function(err) {
            console.log(err);
        })
}









promptUser()
    .then(function(userInput) {
        //================================================
        // create new pdf file
        //=================================================
        // console.log(userInput);
        const fileNamePDF = userInput.username.toLowerCase().split('').join("") + ".pdf";
        const fileNameHTML = userInput.username.toLowerCase().split('').join("") + ".html";

        // const userInputData = generator.generateHTML(userInput, userInfo);

        // const html = generatorHTML.generateHTML(userInfo, profileImg, userName, userLocation, userGitProfile, userBlog, userBio, numberOfRepos, numberOfFollowers, numberOfFollowing, userStars);

        //================================================
        //Write a function that will create a new document
        //================================================
        // writeFileAsync(fileNameHTML, userInputData, "utf8", function(err) {
        //     if (err) {
        //         console.log(err);
        //     }

        console.log("success");
        const gitHubLogin = userInput.username;
        const color = userInput.color;



        //===============
        //github queries
        //===============
        const queryUrl = `https://api.github.com/users/${gitHubLogin}`
        const queryStarUrl = `https://api.github.com/users/${gitHubLogin}/starred`

        //====================================================
        //Run gitHubData function to retrieve user information
        //====================================================
        gitHubData(queryUrl);
        gitHubStars(queryStarUrl);
        // })

        //=====================================================
        //Run gitHubStars function to get remaining github data
        //=====================================================
        // gitHubStars(queryStarUrl);

        //=======================
        //Generate HTML Document
        //=======================



    });
//====================================
//init function to run the whole thing
//====================================
// async function init() {
//     let data = {};
// }


// writeFileAsync(gitHubJSON, JSON.stringify(userInput, null, '\t'), function(err) {
//     if (err) {
//         return console.log(err);
//     }

// });



// .then(function({ username }) {
//     const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

//     axios.get(queryUrl).then(function(res) {
//         const repoNames = res.data.map(function(repo) {
//             return repo.name;
//         });

//         const repoNamesStr = repoNames.join("\n");

//         fs.writeFile("repos.txt", repoNamesStr, function(err) {
//             if (err) {
//                 throw err;
//             }

//             console.log(`Saved ${repoNames.length} repos`);
//         });
//     });
// });

// axios
//     .get("https://icanhazdadjoke.com/", config)
//     .then(function(res) {
//         const { joke } = res.data;

//         return appendFileAsync("jokes.txt", joke + "\n");
//     })
//     .then(function() {
//         return readFileAsync("jokes.txt", "utf8");
//     })
//     .then(function(data) {
//         console.log("Saved dad jokes:");
//         console.log(data);
//     })
//     .catch(function(err) {
//         console.log(err);
//     });

// getMovie();

// async function getMovie() {
//     try {
//         const { movie } = await inquirer.prompt({
//             message: "Search a movie:",
//             name: "movie"
//         });

//         const { data } = await axios.get(
//             `https://www.omdbapi.com/?t=${movie}&apikey=trilogy`
//         );

//         console.log(data);

//     } catch (err) {
//         console.log(err);
//     }
// }



































let gitHubUserName;

inquirer
    .prompt([{
            type: "input",
            message: "Hi, let's create a profile document. What is your name?",
            name: "name"
        },
        {
            type: "input",
            message: "Lets build a profile document, what is your GitHub user name?",
            name: "userName"
        },
        {
            type: "rawlist",
            message: "What is your favorite color?",
            choices: ["Green", "Blue", "Pink", "Red"],
            name: "color"
        }
    ])
    .then(function(response) {
        //GitHub API information using Axios
        axios
            .get(queryURL)
        var githubUsername = response.username.split(' ').join('') + ".json";
        const queryURL = "https://api.github.com/users/" + gitHubUserName;
        console.log(queryURL);
    })