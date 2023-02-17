import { getinputdirection } from "./playerControl.js"

export let snakeSpeed = 4
const snakeBody = [{x: 11, y: 11}]

export function update() {
  const inputDirection = getinputdirection()
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = {...snakeBody[i] }
  }
  snakeBody[0].x += inputDirection.x
  snakeBody[0].y += inputDirection.y
}

export function draw(gameWindow) {
  snakeBody.forEach(segment => {
      const snakeElement = document.createElement('div')
      snakeElement.style.gridRowStart = segment.y
      snakeElement.style.gridColumnStart = segment.x
      snakeElement.classList.add('snake')
      gameWindow.appendChild(snakeElement)
  })
}