var Score = 0 ;
var delayTime = 500 ;
var gamePaused = false ;
///////////////////////////////////////////////////////////////////////// game control
/* 
* game control
* call runGame to start the game
*/

var runGame = function(){ // finished
    while(true)
    {
        moveSnake();
        if(checkCollision()) {break;}
        snakeEatFood();
        delayGame();
    }
    viewGameOver();
};

var delayGame = function(){
    do{
        // make delay by the amount of "delayTime" variable
    }while(gamePaused); 
};

var viewGameOver = function(){
    // view the " Game Over " and the score of the user
    // and new game button
};

var startNewGame = function(){
   // reset all the variables
}; 

///////////////////////////////////////////////////////////////////////// User control
/*
* key pressed event should change snake direction
* by calling "changeSnakeDirection();"
* and pass string "up" or "down" or "right" or "left"
*
* there are key to pause the game >> change "gamePaused" to true or false
*/

///////////////////////////////////////////////////////////////////////// movement
/*
* snake movement
* snake is always moving the gamer only change
* the moving direction
*/
var snakeDirection = "right"; // ("up" , "down" , "right" , "left")

var moveSnake = function(){
    // move the snake a step according to " snakeDirecton "
};

var changeSnakeDirection = function(direction){ // finished
   snakeDirection = direction ;
};

///////////////////////////////////////////////////////////////////////// collision
/*
* check for collision and end the game
* returns yes in case of collision
*/
 
var checkCollision = function(){  // finished
  return ( checkTailCollision() || checkWallCollision() );
};

var checkTailCollision = function(){
// snake collision with itself
// return bool  
};

var checkWallCollision = function(){
// snake collision with any wall (if found)
// return bool
};

////////////////////////////////////////////////////////////////////////// eat food
/*
* checks if snake ate something
* then make the snake taller and increment the score
* and regenerate the food somewhere else.
*/

var snakeEatFood = function(){  //finished
 if (checkFood())
 {
     updateSnakeLength();
     updateScore();
     foodRegeneration();
 }
};

var checkFood = function(){
// checks if snake is eating food
// returns bool (true if yes)
};

var updateSnakeLength = function(){
// extend snake length after eating food
};

var updateScore = function(){  // finished
  score++;
};

var foodRegeneration = function(){ // finished
  deleteCurrentFood();
  generateNewFood();
};

var deleteCurrentFood = function(){
  // delete the eaten food
};

var generateNewFood = function(){
 // generate food in random place
};


