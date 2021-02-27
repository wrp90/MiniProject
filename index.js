// prompt user for name, location, bio, linkedin URL, github url

const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your location?',
        name: 'location',
    },
    {
        type: 'input',
        message: 'What is your bio page?',
        name: 'bio',
    },
    {
        type: 'input',
        message: 'What is your linkedin URL?',
        name: 'linkedin',
    },
    {
        type: 'input',
        message: 'What is your github url?',
        name: 'github',
    },
  ])
  .then((response) => {
    const userInput = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
            <link rel="stylesheet" type="text/css" href="style.css">
            <title>Node Mini Project</title>
        </head>
        <body>
            <div class="container">
                <div id="${response.name}">
                    <h3 id="answer1">${response.name}</h3>
                </div>
                <div id="${response.location}">
                    <h3 id="answer1">${response.location}</h3>
                </div>
                <div id="${response.bio}">
                    <h3 id="answer1">${response.bio}</h3>
                </div>
                <div id="${response.linkedin}">
                    <h3 id="answer1">${response.linkedin}</h3>
                </div>
                <div id="${response.github}">
                    <h3 id="answer1">${response.github}</h3>
                </div>
            </div>
            <script href="index.js"></script>
        </body>
        </html>
    `;

    fs.writeFile('index.html', userInput, (err) =>
        err ? console.error(err) : console.log('Success!')
    );


  });

