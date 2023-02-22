
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
    switch(score) {
        case 20:
            gridSize = 31
            break
        case 40:
            gridSize = 41
            break
        case 60:
            gridSize = 51
            break
        case 80:
            gridSize = 61
            break
        case 100:
            gridSize = 101
            break
    }
        gameWindow.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
        gameWindow.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
}