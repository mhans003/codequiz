# JavaScript Quiz
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Deployed Application 

[JavaScript Quiz - Heroku Deployment](https://javascript-quiz-game-mh.herokuapp.com/)

![Screenshot of JavaScript Quiz](./public/assets/images/screenshot.jpg)
![Screenshot of JavaScript Quiz](./public/assets/images/screenshot2.jpg)

## Description 

This Node Express application is a timed JavaScript quiz game that stores high scores using Mongoose/MongoDB. 

*As of 4/13, this application now uses Mongoose(MongoDB) instead of Sequelize(MySQL)*

The game initiates when the player presses the start button. The player has 90 seconds to answer as many JavaScript-related questions correctly as possible. Answering incorrectly results in a loss of time. When the game is over, the user has the option to store a name and the high score in the game's high scores list. 

The program ensures that the questions are shuffled upon each iteration of gameplay.

## Features

* Node.js application with Express Router. 
* MongoDB/Mongoose used to store/retrieve high scores. 
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


