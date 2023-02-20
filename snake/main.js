
import { update as updateSnake, draw as drawSnake, snakeSpeed, getSnakeHead, snakeIntersection } from "./snake.js";
import {update as updateFood, draw as drawFood} from "./food.js";
import { outsideGrid } from "./grid.js";
import {backingMusic, gameOverSound} from "./sound.js"


// Game Over restart screen
const popUp = document.getElementById('popUp')
const restart = document.getElementById('restart')
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
        popUp.style.display = "block"
        restart.style.display = "block"
        return
    }
    //increases music speed as snakeSpeed increases
    backingMusic.playbackRate = (snakeSpeed / 10)

    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / snakeSpeed) {return}
    lastRenderTime = currentTime;
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

