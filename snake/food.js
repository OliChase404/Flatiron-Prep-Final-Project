
import { onSnake, growSnake } from "./snake.js"

let food = {
    x: (Math.floor(Math.random() * 21) + 1),
    y: (Math.floor(Math.random() * 21) + 1)
}
const growthRate = 1

export function update() {
    if (onSnake(food)){
        growSnake(growthRate)
        food = {
            x: (Math.floor(Math.random() * 21) + 1),
            y: (Math.floor(Math.random() * 21) + 1)
        }
    }
  }
  
export function draw(gameWindow) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameWindow.appendChild(foodElement)
  }

