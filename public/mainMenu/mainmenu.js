window.onload = function() {

        //  Note that this html file is set to pull down Phaser 2.5.0 from the JS Delivr CDN.
        //  Although it will work fine with this tutorial, it's almost certainly not the most current version.
        //  Be sure to replace it with an updated version before you start experimenting with adding your own code.

var maxY= 600;
var maxX= 800;
        
        
        
        
var game = new Phaser.Game(maxX, maxY, Phaser.AUTO, 'main-menu', { preload: preload, create: create});

function preload() {
    //loading images
    game.load.image('background','mainMenu/mainMenu.png'); 
    game.load.image('blank','mainMenu/blankBackground.png');
    game.load.image('happyGamer','mainMenu/smallerGamerGuy.png');
    game.load.image('wergeles', 'mainMenu/wergeles.jpg');
    game.load.image('logo', 'mainMenu/transparent_logo.png');
    game.load.image('greenRobotRight', 'mainMenu/evilRobotRight.png');
    game.load.image('greenRobotLeftFood', 'mainMenu/yellowBotLeft.png');
    game.load.image('creditsSprite', 'mainMenu/creditsSprite.png')
    
    //load atlas--an atlas is an animation
    game.load.atlas('newGameButton', 'mainMenu/newGameButton.png', 'mainMenu/newGameAtlas.json'); //test new shit
    game.load.atlas('loadGameButton', 'mainMenu/loadGameButton.png', 'mainMenu/loadGameButton.json');
    game.load.atlas('creditsButton', 'mainMenu/creditsButton.png', 'mainMenu/creditsButton.json');
    
    //load sounds
    game.load.audio ('beep', 'mainMenu/charangoSelect.m4a');
    game.load.audio('sfx', 'mainMenu/pop.m4a'); //audio file
    //music
    game.load.audio('menutrack', 'mainMenu/lostBotsIntro.m4a');
    game.load.audio('creditsMusic', 'mainMenu/credits.m4a');
 
}

//var button;
var background;
var fx;
var sprite;
var menutrack;       
var creditsMusic;
var selectedBeep;
var counter= 0;
var creditsCounter=0;
var text= 0;
var content = [
    " ",
    " Happy Gamer Studios presents",
    "     a CS 4830 production",
    " ",
];
var text;
var playCredits= false;
var index = 0;
var line = '';
var startGame= true;
var creditsSprite;
var gamerSprite;        
var wergelesSprite;
var group;      
var restoreGroup;
        
function create() { 

    group = game.add.group(); //make a group to add stuff to
    game.time.events.loop(Phaser.Timer.SECOND, updateCounter, this); //timing function, calls every second

    //pre-game menu---studio and wergeles photo
    text = game.add.text(32, 420, '', { font: "30pt Courier", fill: "#3df920", stroke: "#39ff14", strokeThickness: 2 });
    nextLine(); //testing text
         
    gamerSprite = game.add.sprite(game.world.centerX, game.world.centerY, 'happyGamer');
    gamerSprite.anchor.setTo(0.5, 0.8);
    gamerSprite.alpha = 0; //start faded out
    game.add.tween(gamerSprite).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
    
}

function updateCounter() {
/////////////////////////////////all timing events happen inside here //////////////
    counter++; //update counter, every second
    creditsCounter++; //also update creditsCounter
    console.log("counter is at " + counter + " and creditsCounter is " + creditsCounter);
    
    /////////start menu/////////////////////////
            if (counter ==4 && !playCredits){
                //fade out dude
                 game.add.tween(gamerSprite).to( { alpha: 0 }, 1500, Phaser.Easing.Linear.None, true);
            
            }

            if (counter ==5 && !playCredits){ //transition between gamer and wergeles
                  //fade out gamer..


                 //fade in wergeles!
                 wergelesSprite = game.add.sprite(game.world.centerX, game.world.centerY+15, 'wergeles');
                 wergelesSprite.anchor.setTo(0.5, 0.8);
                 wergelesSprite.alpha = 0; //start faded out
                 game.add.tween(wergelesSprite).to( { alpha: 1 }, 1500, Phaser.Easing.Linear.None, true);
            }


            if (counter ==9 && !playCredits){
                 game.add.tween(wergelesSprite).to( { alpha: 0 }, 1500, Phaser.Easing.Linear.None, true);
            }

            if (counter ==10 && !playCredits){
                mainMenu(); //where the menu shows up!
            }

            if(counter % 48 == 0 && !playCredits){ //every 48 seconds, loop the menutrack
                menutrack.play();
            }

        if (playCredits && creditsCounter== 3){
        group.ignoreChildInput= true;
            
        credits(); //play credits
    
        }
        if (playCredits && creditsCounter==37){
        playCredits= false;
        counter= 9; //will call main menu
        creditsCounter== 9;
        group.ignoreChildInput= false;
        creditsSprite.alpha = 1; //fade out that bad boy
        game.add.tween(creditsSprite).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
        }
        
    
    
  console.log("counter inside update functon is " + counter);

}

    
function mainMenu(){
    //after 9 seconds, cue to main menu
    
        game.stage.backgroundColor = '#000000';
   // background=  game.add.image(game.world.centerX, game.world.centerY, 'background').anchor.set(0.5);
 //       background = game.add.tileSprite(0, 0, 800, 600, 'background');
        //	We position the sprite in the middle of the game but off the top
//        sprite = game.add.sprite(game.world.centerX, -200, 'phaser');
//        sprite.anchor.set(0.5);

        //add sounds
        menutrack= game.add.audio('menutrack');
        selectedBeep= game.add.audio('beep');
        fx = game.add.audio('sfx');
        fx.allowMultiple = true;
        fx.addMarker('pop', 0, 0.4);

        //moving animation
         var sprite = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
        sprite.anchor.setTo(0.5, 2.5);
        sprite.alpha = 0; //start faded out
        game.add.tween(sprite).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
    
    
        //the border
        var borderSprite= game.add.sprite(game.world.centerX, game.world.centerY, 'background');
        
        borderSprite.anchor.setTo(0.5,0.5);
    
        //move the two little top robots
        
        var greenRobotRightImage = game.add.sprite(0, 65, 'greenRobotRight');
        var greenRobotLeftFood = game.add.sprite(maxX, 60, 'greenRobotLeftFood');
    
        game.physics.enable(greenRobotRightImage, Phaser.Physics.ARCADE);
        greenRobotRightImage.body.velocity.x=30;
        game.physics.enable(greenRobotLeftFood, Phaser.Physics.ARCADE);
        greenRobotLeftFood.body.velocity.x=-150;


        //menu buttons
        newGameButton= game.add.button(game.world.centerX- 240, 200, 'newGameButton', actionOnClick,this,'newgameuntouched','newgameselected');
        loadGameButton= game.add.button(game.world.centerX- 220, 310, 'loadGameButton', actionOnClick,this,'loadGameHover','loadGameUntouched');
        creditsButton= game.add.button(game.world.centerX- 250, 425, 'creditsButton', creditsOnClick,this,'creditsHover','creditsUntouched');
    
        //add buttons to a group...to destroy later
        group.add(greenRobotLeftFood);
        group.add(greenRobotRightImage);
        group.add(newGameButton);
        group.add(loadGameButton);
        group.add(creditsButton);
        group.add(sprite);
        group.add(borderSprite);
    
        restoreGroup= group;
        
        newGameButton.onInputOver.add(hoverOver, this);
        loadGameButton.onInputOver.add(hoverOver,this);
        creditsButton.onInputOver.add(hoverOver,this);
       
        menutrack.play(); //play once, then loop
    
}        
        
        
function hoverOver(){
    console.log('i hovered over stuff!');
    fx.play('pop');
}        
        
function over() {
    console.log('button over');
    
}

function out() {
    console.log('button out');
}

function actionOnClick () {  //only load and new game buttons do this
   // background.visible =! background.visible;
    selectedBeep.play();
    console.log('a button was clicked!');
    game.camera.fade(0x000000, 1500);//fade the game
    group.ignoreChildInput= true;
    closeMenu();
    menutrack.stop();
    soundtrack.play();
    
}
    
        
function closeMenu() {   
    document.getElementById("main-menu").style.visibility= "hidden";
    document.getElementById("main-game").style.display="inline-block";
}        
        

        
        
        
function creditsOnClick(){
    creditsCounter=0;
    playCredits= true;
    selectedBeep.play();
    game.camera.fade(0x000000, 1500);
}        
        
function credits(){
    //background=  game.add.image(game.world.centerX, game.world.centerY, 'blank').anchor.set(0.5);
    game.camera.resetFX();
    
    menutrack.stop();
    creditsMusic= game.add.audio('creditsMusic');
    creditsMusic.play(); 
    
    creditsSprite = game.add.sprite(-220, 0, 'creditsSprite'); //start moving up from bottom
    game.physics.enable(creditsSprite, Phaser.Physics.ARCADE);
    creditsSprite.body.velocity.y= -30; 
    
}   
        
        
function updateLine() {

    if (line.length < content[index].length)
    {
        line = content[index].substr(0, line.length + 1);
        // text.text = line;
        text.setText(line);
    }
    else
    {
        //  Wait 2 seconds then start a new line
        game.time.events.add(Phaser.Timer.SECOND * 2, nextLine, this);
    }

}

function nextLine() {

    index++;

    if (index < content.length)
    {
        line = '';
        game.time.events.repeat(100, content[index].length + 1, updateLine, this);
    }

}
        
        
//function render() {
//
//    game.debug.text("Time until event: " + game.time.events.duration.toFixed(0), 32, 32);
//    game.debug.text("Next tick: " + game.time.events.next.toFixed(0), 32, 64);
//
//}              
        
    };