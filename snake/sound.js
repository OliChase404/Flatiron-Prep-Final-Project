
import { snakeSpeed } from "./snake.js";

export const gameOverSound = new Audio('sounds/mixkit-retro-arcade-game-over-470.wav')
gameOverSound.preload = 'auto'
gameOverSound.volume = 1

// Game Music
export const backingMusic = new Audio('sounds/Loop for snake 44k wEffects 5mins.mp3')
backingMusic.preload = 'auto'
backingMusic.volume = 0.25
backingMusic.playbackRate = (snakeSpeed * snakeSpeed / 18)