import { getinputdirection } from "./playerControl.js"

// Set the starting speed of the snake
export let snakeSpeed = 4

// const snakeMovementSound = new Audio('sounds/mixkit-quick-lock-sound-2854.wav')

// The snakes body is an array of x/y coorinates inside the game window CSS grid
const snakeBody = [{x: 11, y: 11}]

let newSegments = 0


export function update() {
  addSegments()
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

// Adds one new segment to snake when food is eaten and increases snake speed.
export function growSnake(growth) {
  newSegments += growth
  snakeSpeed = (snakeSpeed + 0.2)
  // if (snakeBody.length > 1) {
  // let lastNewSegment = snakeBody[(snakeBody.length - 1)]
  // lastNewSegment.style.backgroundColor = "Blue"
  // }
}

export function onSnake(position, {ignoreHead = false} = {}) {
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false
      return equalPositions(segment, position)
  })
}

// Returns x/y coordinates of snake head
export function getSnakeHead() {
  return snakeBody[0]
}

export function snakeIntersection() {
  return onSnake(snakeBody[0], {ignoreHead: true})
}

function equalPositions(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments(){
  for(let i = 0; i < newSegments; i++){
    snakeBody.push({ ...snakeBody[snakeBody.length - 1]})
  }
  newSegments = 0
}