
import { randomGridPosition } from "./grid.js"
import { getRandomColor } from "./randomColors.js"
import { onSnake, growSnake} from "./snake.js"
import { eatSound } from "./sound.js"

// const snake = document.getElementsByClassName("snake")


let food = getRandomFoodPosition()
const growthRate = 1
export let score = 0
const scoreBoard = document.getElementById('scoreBoard')
scoreBoard.innerHTML = (`Score<br>${score}`)

// Check if food has been eaten. If so, move food, increase and display score
export function update() {
    if (onSnake(food)){
        growSnake(growthRate)
        food = getRandomFoodPosition()
        score++
        scoreBoard.innerHTML = (`Score<br>${score}`)
        eatSound.play()

        // for (let i = 1; i < snake.length; i++) {
        //   snake[i].style.backgroundColor = "white";
        // }
    }
  }


//Draws the food element on the game window, also randomizes food color once per game loop.
export function draw(gameWindow) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameWindow.appendChild(foodElement)
    foodElement.style.backgroundColor = getRandomColor();
  }

function getRandomFoodPosition() {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}

