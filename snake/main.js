
import { update as updateSnake, draw as drawSnake, snakeSpeed } from "./snake.js";
import {update as updateFood, draw as drawFood} from "./food.js";

let lastRenderTime = 0;
const gameWindow = document.getElementById('gameWindow')

function main(currentTime) {
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
}

function draw() {
    gameWindow.innerHTML =''
    drawSnake(gameWindow)
    drawFood(gameWindow)
}