//=======================//
// Node Packet Managment               
//=======================//
const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const generateHTML = require("./generateHTML");
// const HTMLtoPDF = require("html-pdf")


//===========//
// Promises                            
//===========//

// const readFileAsync = util.promisify(fs.readFile);
// const writeFileAsync = util.promisify(fs.writeFile);


//========================================================================//
// These are constant variable that we will need to develop our PDF file                 
//========================================================================//
// const profileImg;
// const userName;
// const userLocation;
// const userGitProfile;
// const userBlog;
// const userBio;
// const numberOfRepos;
// const numberOfFollowers;
// const numberOfFollowing;

//=======================================================//
//  Prompt user to get github username and favorite color                 
//=======================================================//


inquirer
    .prompt([{
            type: "input",
            message: "Enter your GitHub username:",
            name: "username"
        },
        {
            type: "rawlist",
            message: "pick a color",
            choices: ["Green", "Blue", "Pink", "Red"],
            name: "color"
        }
    ])
    .then(function(userInput) {
        // console.log(userInput);
        //================================================
        // create variables for api and store user inputs
        //=================================================
        const gitHubLogin = userInput.username;
        const gitHubJSON = gitHubLogin + ".json";
        const color = userInput.color;

        //================================================
        //Write a function that will create a new document
        //================================================
        fs.writeFile(gitHubJSON, JSON.stringify(userInput, null, '\t'), function(err) {
            if (err) {
                return console.log(err);
            }

            const queryUrl = "https://api.github.com/users/" + gitHubLogin;
            const queryStarUrl = "https://api.github.com/users/" + gitHubLogin + "/starred";
            //====================================================
            //Run gitHubData function to retrieve user information
            //====================================================
            gitHubData(queryUrl);

            //=====================================================
            //Run gitHubStars function to get remaining github data
            //=====================================================
            gitHubStars(queryStarUrl);

        });

    });

function gitHubStars(queryStarUrl) {
    axios
        .get(queryStarUrl)
        .then(function(res) {
            let userStars = res.data.length;
            console.log(userStars);
        })
        .catch(function(err) {
            console.log(err);
        })
}

function gitHubData(queryUrl) {
    axios
        .get(queryUrl)
        .then(function(res) {

            let profileImg = res.data.avatar_url + ".png";
            let userName = res.data.login;
            let userLocation = res.data.location;
            let userGitProfile = res.data.html_url;
            let userBlog = res.data.blog;
            let userBio = res.data.bio;
            let numberOfRepos = res.data.public_repos;
            let numberOfFollowers = res.data.followers;
            let numberOfFollowing = res.data.following;
            console.log(profileImg, userName, userLocation, userGitProfile, userBlog, userBio, numberOfRepos, numberOfFollowers, numberOfFollowing);


        })
        .catch(function(err) {
            console.log(err);
        })
}



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