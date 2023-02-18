
import { randomGridPosition } from "./grid.js"
import { onSnake, growSnake, snakeSpeed} from "./snake.js"

let food = getRandomFoodPosition()
const growthRate = 1
let score = 0
const scoreBoard = document.getElementById('scoreBoard')
scoreBoard.innerHTML = (`Score<br>${score}`)

// Check if food has been eaten. If so, move food, increase and display score
export function update() {
    if (onSnake(food)){
        growSnake(growthRate)
        food = getRandomFoodPosition()
        score++
        scoreBoard.innerHTML = (`Score<br>${score}`)
    }
  }
  
export function draw(gameWindow) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameWindow.appendChild(foodElement)
  }

function getRandomFoodPosition() {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}

