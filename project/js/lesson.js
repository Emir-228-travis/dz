//phone checker

const phoneInput = document.querySelector('#phone-input');
const phoneButton = document.querySelector('#phone-button');
const phoneResult = document.querySelector('#phone-result');



const regExp = /^\+996 [2579] \d{2} \d{2}-\d{2}-\d{2}$/
phoneButton.onclick =  () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML= 'OK'
    }
    else{
        phoneResult.innerHTML = 'NOT OK'
        phoneResult.style.color = 'red'
    }
}