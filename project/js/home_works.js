//Gmail clicker
// Gmail checker
const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^[a-zA-Z0-9._%+-]+@+[0-9a-z.]+\.com$/

function validateGmail() {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
        gmailInput.value = ''
    } else {
        gmailResult.innerHTML = 'NOT OK'
        gmailResult.style.color = 'red'
    }
}

gmailButton.onclick = validateGmail

gmailInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        validateGmail()
    }
})

////move_block
const child_block = document.querySelector('.child_block')
const parent_block = document.querySelector('.parent_block')

let positionX = 0, positionY = 0;

const offsetWidth = parent_block.offsetWidth - child_block.offsetWidth
const offsetHeight = parent_block.offsetHeight - child_block.offsetHeight

const moveBlock = () => {
    if (positionX < offsetHeight && positionY === 0) {
        positionX++
        child_block.style.left = positionX + 'px'
        requestAnimationFrame(moveBlock)
    } else if (positionX >= offsetWidth && positionY < offsetHeight) {
        positionY++
        child_block.style.top = `${positionY}px`
        requestAnimationFrame(moveBlock)
    }
     else if (positionX > 0 && positionY === offsetHeight) {
        positionX--
        child_block.style.left = positionX + 'px'
        requestAnimationFrame(moveBlock)
    }
     else if (positionX >= 0 && positionY >= 0) {
        positionY--
        child_block.style.top = `${positionY}px`
        requestAnimationFrame(moveBlock)
     }
}

    moveBlock()
//COUNTER APP

const seconds = document.querySelector('#seconds')
const starButton = document.querySelector('#start')
const stopButton = document.querySelector('#stop')
const resetButton = document.querySelector('#reset')

let counter = 0

let interval = undefined

const start = () => {
    interval = setInterval(() => {
        counter++
        seconds.innerText = counter
    },1000)
}

const stopCounter = () => {
    clearInterval(interval)
    starButton.disabled = false
}

starButton.onclick = () => {
    start()
    starButton.disabled = true
}

stopButton.onclick = () => stopCounter()

resetButton.onclick = () => {
    stopCounter()
    counter = 0
    seconds.innerText = counter
}

