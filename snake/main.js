
import { update as updateSnake, draw as drawSnake, snakeSpeed, getSnakeHead, snakeIntersection } from "./snake.js";
import {update as updateFood, draw as drawFood} from "./food.js";
import { outsideGrid } from "./grid.js";

let lastRenderTime = 0;
let gameOver = false
const gameWindow = document.getElementById('gameWindow')

function main(currentTime) {
    if (gameOver){
        if (confirm('Game Over. Press ok to restart.')) {
            window.location = '/snake.html'
        }
        return
    }


    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / snakeSpeed) {return}
    lastRenderTime = currentTime;
    update()
    draw()
}

window.requestAnimationFrame(main);

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
