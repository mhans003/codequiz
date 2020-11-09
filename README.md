# JavaScript Quiz
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Deployed Application 

[JavaScript Quiz - Heroku Deployment](https://javascript-quiz-game-mh.herokuapp.com/)

![Screenshot of JavaScript Quiz](./public/assets/images/screenshot.jpg)
![Screenshot of JavaScript Quiz](./public/assets/images/screenshot2.jpg)

## Description 

This Node Express application is a timed JavaScript quiz game that stores high scores using MySQL and/or LocalStorage. 

The game initiates when the player presses the start button. The player has 90 seconds to answer as many JavaScript-related questions correctly as possible. Answering incorrectly results in a loss of time. When the game is over, the user has the option to store a name and the high score in the game's high scores list. 

The program ensures that the questions are shuffled upon each iteration of gameplay.

## Installation

After repository is cloned to the local machine:
1) Config.json file (development environment) must be updated to reflect local machine.
2) Using MySQL Workbench, running init.sql initiates required database. 

## Features

* Node.js application with Express Router. 
* MySQL/Sequelize used to store/retrieve high scores. 
* Express Handlebars used to render content and pass data to HTML.
* Responsive to screen sizes across devices. 
* Incorporates Bootstrap utilities including container, modal, buttons, and navbar. 
* Demonstrates the use of the browser's local storage utilizing the localStorage and JSON objects. 
* Font Awesome icons support a more satisfying layout. 
* Sounds and CSS animations produce a more engaging gameplay experience. 
* Timer displays remaining time down to the hundredth second. 
* Dynamically-produced elements allow for a cleaner HTML homepage. 

## Contact

Michael Hanson
* michaeledwardhanson@gmail.com
* [GitHub](https://github.com/mhans003)
* [LinkedIn](https://www.linkedin.com/in/michaeledwardhanson/)

## License 

Licensed under the [MIT License](./LICENSE.txt).


