# Lost Bots Final Project
* Braden Rucinski
* Joe Wong

## Link to the working page
[LostBotsTheGame](http://joewong.me:3001)

## Link to Github
[Github-LostBots](https://github.com/JoeWongSolutions/LostBots)

## How to use the application
This is a game to teach how to use algorithms. The controls are simple, click on new game and use the arrow keys to navigate the maps. Collect as much food as possible into the food bin. Use the programming terminal on the left of the screen to enter controls for the robot to follow by clicking Record Program and then using the arrow keys to enter commands. Click on Stop Record to end programming and click Run Program to have the robot follow the commands.

The Global Chat system is located on the right of the screen. To start chatting, enter a nickname into the input box and press enter. The message input box will appear and you may start chatting in the message box. To hide the chat, press the green button marked with an arrow and it will hide. Pressing the green button again will show the chat.

## What Technologies we used
Trivial Technologies: HTML5, CSS3, Javascript, Jquery
Phaser.io: Animation, gaming framework built with javascript that streamlines game creation in web.
Socket.io: Broadcasting API that allows updating multiple clients with very little code.
Node.js: Main backend framework used to create the server.
Express.js: Node middleware that handles many of the servers ajax requests.
Forever.js: Node middleware that allows a script to run forever.

## Who did What
Braden worked largely on the frontend using Javascript and Phaser.io to produce the game. He also created the images and music for the game.

Joe worked on the backend, setting up node and express to handle events coming from the client. He also created the user interface for the chat and set up the backend with Socket.io. Joe also did the documentation for the project as well as debugging.

## Where to look for when grading:
Lostbots/lostbots/public/index.html
    This is the main workhorse for the game. All of the javascript/jquery elements control the user's input and draw the canvas accordingly. The chat's handling is also done inside this file.
    
Lostbots/lostbots/public/mainMenu/mainmenu.js
    This is the updated code using Phaser.io. Eventually all of the code will be ported into other contrl.js files and then index.html will no longer contain any javascript/jquery logic.
    
Lostbots/lostbots/index.js
    This is the main server script used to handle all ajax and contains the Socket.io handling.