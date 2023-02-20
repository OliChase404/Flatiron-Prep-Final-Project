
import {update as updateSnake, draw as drawSnake, snakeSpeed, getSnakeHead, snakeIntersection} from "./snake.js";
import {update as updateFood, draw as drawFood} from "./food.js";
import {outsideGrid, incrementGridSize} from "./grid.js";
import {backingMusic, gameOverSound} from "./sound.js"

//Check for mobile device and redirect if nessarcary.
if (screen.width <= 768) {
    window.location = "snakeMobile.html";
}

// Game Over restart screen
const popUp = document.getElementById('popUp')
const restart = document.getElementById('restart')
const soundControl = document.getElementById('soundControl')
restart.addEventListener("click", function(){
    location.reload()
})

let lastRenderTime = 0;
let gameOver = false
const gameWindow = document.getElementById('gameWindow')

window.requestAnimationFrame(main);

// Main game loop Sets loop time. Runs game functions. Handles gameOver events = true. Plays game music.
function main(currentTime) {
    if (backingMusic.paused) {backingMusic.play()}
    if (gameOver){
        backingMusic.pause()
        gameOverSound.play()
        gameWindow.style.display = "none"
        soundControl.style.display = "none"
        popUp.style.display = "block"
        restart.style.display = "block"
        return
    }
    //increases music speed as snakeSpeed increases
    backingMusic.playbackRate = (snakeSpeed / 10)

    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / snakeSpeed) {return}
    lastRenderTime = currentTime;
    incrementGridSize()
    update()
    draw()
}



function update() {
    updateSnake()
    updateFood()
    checkDeath()
}


function draw() {
    gameWindow.innerHTML = ''
    drawSnake(gameWindow)
    drawFood(gameWindow)
}


function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}

