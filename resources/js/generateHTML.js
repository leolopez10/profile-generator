// const colors = {
//     green: {
//         wrapperBackground: "#E6E1C3",
//         headerBackground: "#C1C72C",
//         headerColor: "black",
//         photoBorderColor: "#black"
//     },
//     blue: {
//         wrapperBackground: "#5F64D3",
//         headerBackground: "#26175A",
//         headerColor: "white",
//         photoBorderColor: "#73448C"
//     },
//     pink: {
//         wrapperBackground: "#879CDF",
//         headerBackground: "#FF8374",
//         headerColor: "white",
//         photoBorderColor: "#FEE24C"
//     },
//     red: {
//         wrapperBackground: "#DE9967",
//         headerBackground: "#870603",
//         headerColor: "white",
//         photoBorderColor: "white"
//     }
// };


function generateHTML(userInfo, profileImg, userName, userLocation, userGitProfile, userBlog, userBio, numberOfRepos, numberOfFollowers, numberOfFollowing, userStars) {
    // function generateHTML(userInfo) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" />
        <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
        <title>GitHub Profile</title>
        <style>
            @page {
                margin: 0;
            }
            
            *,
            *::after,
            *::before {
                box-sizing: border-box;
            }
            
            html,
            body {
                padding: 0;
                margin: 0;
            }
            
            html,
            body,
            .wrapper {
                height: 100%;
            }
            
            .wrapper {
                background-color: $ {
                    colors[data.color].wrapperBackground
                }
                ;
                padding-top: 100px;
            }
            
            body {
                background-color: white;
                -webkit-print-color-adjust: exact !important;
                font-family: 'Cabin', sans-serif;
            }
            
            main {
                background-color: #E9EDEE;
                height: auto;
                padding-top: 30px;
            }
            
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
                font-family: 'BioRhyme', serif;
                margin: 0;
            }
            
            h1 {
                font-size: 3em;
            }
            
            h2 {
                font-size: 2.5em;
            }
            
            h3 {
                font-size: 2em;
            }
            
            h4 {
                font-size: 1.5em;
            }
            
            h5 {
                font-size: 1.3em;
            }
            
            h6 {
                font-size: 1.2em;
            }
            
            .photo-header {
                position: relative;
                margin: 0 auto;
                margin-bottom: -50px;
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                background-color: $ {
                    colors[data.color].headerBackground
                }
                ;
                color: $ {
                    colors[data.color].headerColor
                }
                ;
                padding: 10px;
                width: 95%;
                border-radius: 6px;
            }
            
            .photo-header img {
                width: 250px;
                height: 250px;
                border-radius: 50%;
                object-fit: cover;
                margin-top: -75px;
                border: 6px solid $ {
                    colors[data.color].photoBorderColor
                }
                ;
                box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
            }
            
            .photo-header h1,
            .photo-header h2 {
                width: 100%;
                text-align: center;
            }
            
            .photo-header h1 {
                margin-top: 10px;
            }
            
            .links-nav {
                width: 100%;
                text-align: center;
                padding: 20px 0;
                font-size: 1.1em;
            }
            
            .nav-link {
                display: inline-block;
                margin: 5px 10px;
            }
            
            .workExp-date {
                font-style: italic;
                font-size: .7em;
                text-align: right;
                margin-top: 10px;
            }
            
            .container {
                padding: 50px;
                padding-left: 100px;
                padding-right: 100px;
            }
            
            .row {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                margin-top: 20px;
                margin-bottom: 20px;
            }
            
            .card {
                padding: 20px;
                border-radius: 6px;
                background-color: $ {
                    colors[data.color].headerBackground
                }
                ;
                color: $ {
                    colors[data.color].headerColor
                }
                ;
                margin: 20px;
            }
            
            .col {
                flex: 1;
                text-align: center;
            }
            
            a,
            a:hover {
                text-decoration: none;
                color: inherit;
                font-weight: bold;
            }
            
            @media print {
                body {
                    zoom: .75;
                }
            }
        </style>
    
        <body class="wrapper">
            <div class="col">
                <header>
                    <div class="photo-header">
                        <img src=${userInfo.profileImg}>
                        <h1>Hi!</h1>
                        <h2>My GitHub username is ${userInfo.userName}</h2>
                        <p>${userInfo.userLocation}</p>
                    </div>
                </header>
            </div>
            <main class="container">
                <div class="col">
                    <h3>${userInfo.userBio}</h3>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="card">
                            <h6>Public Repositories</h6>
                            <p>${userInfo.numberOfRepos}</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <h6>Followers</h6>
                            <p>${userInfo.numberOfFollowers}</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="card">
                            <h6>Github Stars</h6>
                            <p>${userStars}</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <h6>Following</h6>
                            <p>${userInfo.numberOfFollowing}</p>
                        </div>
                    </div>
                </div>
            </main>
            <footer class="wrapper">
            </footer>
        </body>`;
}

module.exports = { generateHTML }