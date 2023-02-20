
import {score} from "./food.js"

export let gridSize = 21


export function randomGridPosition(){
    return {
        x: (Math.floor(Math.random() * gridSize) + 1),
        y: (Math.floor(Math.random() * gridSize) + 1)
    }
}

export function outsideGrid(position){
    return (
        position.x < 1 || position.x > gridSize ||
        position.y < 1 || position.y > gridSize)
}

// Increcreases the grid size at set scores
export function incrementGridSize() {
    if (score <= 30) {
        gridSize = 21
    }
    if (score > 30 && score <= 60) {
        gridSize = 31
    }
    if (score > 60 && score <= 100) {
        gridSize = 41
    }
    if (score > 100) {
        gridSize = 61
    }
        gameWindow.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
        gameWindow.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
}