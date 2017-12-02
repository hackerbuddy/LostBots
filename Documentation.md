# Lost Bots Final Project
* Braden Rucinski - Game Developer, Hacker
* Joe Wong - Server Admin, Anti-Hacker

## Link to the working page
[LostBotsTheGame](http://joewong.me:3001)

## Link to Github
[Github-LostBots](https://github.com/JoeWongSolutions/LostBots)

## The problem
* Lack of good coders/interest in coding
* Coding is seen as boring
* Coding is too difficult to understand

## Our Solution
Create a game with minimal controls that will teach algorithms to new coders and make coding fun.

## How to use the application
This is a game to teach how to use algorithms. The controls are simple, click on new game and use the arrow keys to navigate the maps. Collect as much food as possible into the food bin. Use the programming terminal on the left of the screen to enter controls for the robot to follow by clicking Record Program and then using the arrow keys to enter commands. Click on Stop Record to end programming and click Run Program to have the robot follow the commands.

The Global Chat system is located on the right of the screen. To start chatting, enter a nickname into the input box and press enter. The message input box will appear and you may start chatting in the message box. To hide the chat, press the green button marked with an arrow and it will hide. Pressing the green button again will show the chat.

## What technologies we used and links to sources
Trivial Technologies: HTML5, CSS3, Javascript, Jquery
[Phaser.io](http://phaser.io/): Animation, gaming framework built with javascript that streamlines game creation in web.
[Socket.io](https://socket.io/): Broadcasting API that allows updating multiple clients with very little code.
[Node.js](https://nodejs.org/en/docs/): Main backend framework used to create the server.
[Express.js](https://expressjs.com/en/4x/api.html): Node middleware that handles many of the servers ajax requests.
Forever.js: Node middleware that allows a script to run forever.

## Who did what
Braden worked largely on the frontend using Javascript and Phaser.io to produce the game. He also created the images and music for the game.

Joe worked on the backend, setting up node and express to handle events coming from the client. He also created the user interface for the chat and set up the backend with Socket.io. Joe also did the documentation for the project as well as debugging.

## Pointers/Knowledge/Tips
* Work on parts of the game in small modules and add them in gradually.
* Define which technologies will be used from the beginning of the project, this will allow all members to build their code around any frameworks.
* Debug, debug, debug whenever you finish a small section. It really sucked when we finished a large portion of the game and found bugs but didn't know where they were coming from.

## Where to look for when grading:
#### Lostbots/lostbots/public/index.html
This is the main workhorse for the game. All of the javascript/jquery elements control the user's input and draw the canvas accordingly. The chat's handling is also done inside this file.
    
Drawing the game onto the canvas was a big part of the work involved in the game. Here, we call drawGrid() to draw each map (maps were arrays of characters indicating the tile to be placed) when a map change event occurs.
```Javascript
function drawGrid(grid) {
    console.log("new grid is " + grid.length + " height, width " + grid[0].length)
    for (i = 0; i < grid.length; i++) {
        for (j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == WALL) {
                gContext.drawImage(plainWallImage, j * CELL_SIZE, i * CELL_SIZE);
            }
            else if (grid[i][j] == FOOD) {
                gContext.drawImage(foodBarrelImage, j * CELL_SIZE, i * CELL_SIZE);
            }
            //////////////// PILE OF FOOD TILES ////////////////////
            //This is the codable pile
            else if (grid[i][j] == PILEOFFOOD) { //this is the actual interactable food 
                gContext.drawImage(bottomCenterFoodPile, j * CELL_SIZE, i * CELL_SIZE);
            }
            //these below are just image tiles

            ...
            
            else {
                gContext.drawImage(dirtImage, j * CELL_SIZE, i * CELL_SIZE);
            }
        }
    }
}
```
    
A big problem we faced when drawing the canvas was that the page would load with a blank canvas or with partially drawn canvas. We figured out that the images weren't fully loaded before the DOM was being drawn so our call to drawGrid() was happening too soon. The code we used to fix this bug is here:
```Javascript
var numImagesLoaded = 0;
function imagesInit(image){
    image.onload = function(){
        console.log(image+"was loaded.");
        numImagesLoaded++;
        if(numImagesLoaded >= 26){
            console.log("All images loaded!");
            drawGrid (ctrlRoom);
            grid= ctrlRoom;
            drawRobotDown(); //draw robot for the first time
        }
    }
}
```
Now we can call imagesInit() on each of our images and when the last image is loaded, the if statement will run and call drawGrid().

Another big part of the code to grade is the chat. Here is the code:
```Javascript
$(function () {
    var socket = io();
    
    $('#chatClose').click(function(){
        $('.chatBox').hide("slide", {direction: "right"}, function(){
            $('#chatOpen').show();
        });
    });
    
    $('#chatOpen').click(function(){
        $('#chatOpen').hide("highlight", "fast", function(){
            $('.chatBox').show("slide", {direction: "right"});
        });
    });
    
    $('#chatform').submit(function(){
        socket.emit('chat message', $('#m').val());
        $('#m').val('');
        return false;
    });
    $('chatform').hide();
    
    $('#userNickname').submit(function(){
        socket.emit('add user', $('#name').val());
        $('#userNickname').hide();
        $('chatform').show();
        return false;
    })
    socket.on('chat message', function(data){
        $('#messages').append($('<li>').text(data.username +": " + data.message));
    });
});
```
The first two blocks with chatOpen and chatClose are button handlers that can show and hide the chat. The next two blocks deal with form submission. To send a username or message to the server, we used a form and depending on which form was submitted, the socket API would handle differently. The last block handles the changes to the DOM when a message is sent from the server to the client.
#### Lostbots/lostbots/public/mainMenu/mainmenu.js
This is the updated code using Phaser.io. Eventually all of the code will be ported into other contrl.js files and then index.html will no longer contain any javascript/jquery logic.

The most important line of code in this file is:
```Javascript
var game = new Phaser.Game(maxX, maxY, Phaser.AUTO, 'main-menu', { preload: preload, create: create});
```
This line of code initializes the canvas with ID = main-menu with our variables and starts the Phaser API. The nice thing about Phaser.io is that they have a preload function which ensures all images are loaded before anything happens in the DOM:
```Javascript
function preload() {
    //loading images
    game.load.image('background','mainMenu/mainMenu.png'); 
    game.load.image('blank','mainMenu/blankBackground.png');
    ...
    game.load.audio('creditsMusic', 'mainMenu/credits.m4a');
 
}
``` 
#### Lostbots/lostbots/index.js
This is the main server script used to handle all ajax and contains the Socket.io handling.
```Javascript
var express = require('express');
var path = require('path');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req,res){
    res.send('Connected');
});

io.on('connection', function(socket){
    var addedUser = false;
    
    console.log('A user connected');
    socket.on('chat message', function(msg){
        io.emit('chat message', {username: socket.username, message: msg});
    });
    
    socket.on('add user', function(username){
        if(addedUser) return;
        socket.username = username;
        addedUser = true;
    });
});

http.listen(3001, function(){
  console.log('listening on *:3001');
});
```
From the code, you can see that after the require('socket.io') statement we can use our io variable to assign event listeners. The beauty here is that socket handles all of the sting escapes and injections and simplifies the code into a single line of code.
## Future Work
* Port the entire game into Phaser.io
* Create new levels, lore, instructions
