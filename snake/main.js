
import { update as updateSnake, draw as drawSnake, snakeSpeed, getSnakeHead, snakeIntersection } from "./snake.js";
import {update as updateFood, draw as drawFood} from "./food.js";
import { outsideGrid } from "./grid.js";

const gameOverSound = new Audio('sounds/mixkit-retro-arcade-game-over-470.wav')
gameOverSound.preload = 'auto'
gameOverSound.volume = 1

// Game Music
const backingMusic = new Audio('sounds/Loop for snake 44k wEffects 5mins.mp3')
backingMusic.preload = 'auto'
backingMusic.volume = 0.25
backingMusic.playbackRate = (snakeSpeed * snakeSpeed / 18)

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
        // if (confirm('Game Over. Press ok to restart.')) {
        //     window.location = '/snake.html'
        // }
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


// window.requestAnimationFrame(main);


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

