
import { snakeSpeed } from "./snake.js";

const muteMusic = document.getElementById('muteMusic')
const musicMuteIcons = ["Icons/Musical-note-blueViolet.png", "Icons/Musical-note-blackFill-blueViolet.png"]

const muteEffects = document.getElementById('muteEffects')
const muteEffectsIcons = ["Icons/speaker-white-Purple-thickerOutline.png", "Icons/speaker-Black-Purple.png"]

// Functionality for the muteMusic control.
muteMusic.addEventListener('click', function() {
    if (backingMusic.muted) {
        backingMusic.muted = false
        muteMusic.src = musicMuteIcons[0]
    } else {
        backingMusic.muted = true
        muteMusic.src = musicMuteIcons[1]
    }
})


muteEffects.addEventListener('click', function() {
    if (eatSound.muted || gameOverSound.muted) {
        eatSound.muted = false
        gameOverSound.muted = false
        muteEffects.src = muteEffectsIcons[0]
    } else {
        eatSound.muted = true
        gameOverSound.muted = true
        muteEffects.src = muteEffectsIcons[1]
    }
})



export const eatSound = new Audio('sounds/mixkit-quick-lock-sound-2854_WYoUWz8p.wav')
eatSound.preload = 'auto'

export const gameOverSound = new Audio('sounds/mixkit-retro-arcade-game-over-470.wav')
gameOverSound.preload = 'auto'
gameOverSound.volume = 1


export const backingMusic = new Audio('sounds/Loop for snake 44k wEffects 5mins.mp3')
backingMusic.preload = 'auto'
backingMusic.volume = 0.25
backingMusic.playbackRate = (snakeSpeed * snakeSpeed / 18)