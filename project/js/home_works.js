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

let positionX = 0,positionY = 0;

const moveBlock = () => {
        if (positionX < 450) {
            positionX++
            child_block.style.left = positionX + 'px'
            requestAnimationFrame(moveBlock)
        }
}

moveBlock()

