# PIP The Diver

## Description

PIP The Diver is a game where the player has to pick the garbage under the sea and shoot up incoming dangers, human-made, while trying not to hit or kill any fish. The game ends if your score goes below zero or if you git some of the deadly obstacles.

## MVP (DOM - CANVAS)

- PIP the diver is floating on the left of the screen
- Obstacles appear randomly from the right.
- PIP can shoot sea star to destroy dangers which don't belong under the sea.
- Hitting or Killing fish results in a decrease of your score
- Speed and number of obstacles increases with the score and time played.

## Data Structure

# index.js

First create a data source Object for all the images and function that loops that object to add properties to each path inside the source Object. This data will then be use for every image in the game. The game uses the Canvas element to animate the images. There are 2 canvas overlapped, one is only for the background. Some of the main functions are: 

```
drawBG() {}
drawPip() {}
drawFish() {}
drawBullet() {}
bulletShoot() {}
gotShot() {}
displayScore() {}
drawScore() {}
pipCollided() {}
pipCollidedHuman() {}
animate() {}
```

And to dinamically set the canvas size to the window size: 

setCanvasSize() {}

# styles.css 

Holds all the styling for the game which aply mainly to the landing and game over frames and the transition between the 3: landing, game, game-over. So of the main classes are:

For the landing Page: 
```
.moving-bg .fade .game-intro .intro-container @keyframe animateTitle .button 
```
For the Game Board
```
#canvas-bg #canvas-game .score-container .score-display #score
```
For Game Over 
```
.game-over-bg .game-over-sea .score
```
And media queries for responsiveness


## States y States Transitions

Definition of the different states

- isMovingUp
- isMovingDown
- gameOver
- isShooting
- shot

## Links

### Github Pages
[Link url](https://pgtognoni.github.io/divers-game-Js-Ironhack/)

### Slides
URls for the project presentation (slides)
[Link Slides.com](https://docs.google.com/presentation/d/1o_ElCxHexQvmCBaNgh95rMNZpCO97rUyueiWwAyshTo/edit?usp=sharing)