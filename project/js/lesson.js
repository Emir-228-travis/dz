//phone checker

const phoneInput = document.querySelector('#phone-input');
const phoneButton = document.querySelector('#phone_button');
const phoneResult = document.querySelector('#phone-result');


const regExp = /^\+996 [2579] \d{2} \d{2}-\d{2}-\d{2}$/
phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'OK'
    } else {
        phoneResult.innerHTML = 'NOT OK'
        phoneResult.style.color = 'red'
    }
}

//TAB SLIDER

const tabContentBlocks = document.querySelectorAll('.tab_content_block');
const tabs = document.querySelectorAll('.tab_content_item');
const tabsParent = document.querySelector('.tab_content_items');

let newTabContent = 0


const hideTabContent = () => {
    tabContentBlocks.forEach(block => {
        block.style.display = 'none'
    })
    tabs.forEach(tab => {
        tab.classList.remove('tab_content_item_active');
    })
}

const showTabContent = (id = 0) => {
    tabContentBlocks[id].style.display = " block"
    tabs[id].classList.add('tab_content_item_active');
}

hideTabContent()
showTabContent()

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((tab, tabIndex) => {
            if (event.target === tab) {
                hideTabContent()
                newTabContent = tabIndex
                showTabContent(newTabContent)
            }
        })
    }
}

const switchTab = () => {
    hideTabContent()
    showTabContent(newTabContent)
    newTabContent++
    if (newTabContent >= tabs.length) newTabContent = 0
}

setInterval(switchTab, 3000)

//converter

const usdInput = document.querySelector('#usd');
const somInput = document.querySelector('#som');
const eurInput = document.querySelector('#eur');


const converter = (element, targetElement) => {
    element.oninput = () => {
        const request = new XMLHttpRequest();
        request.open('GET', `../data/converter.json`);
        request.setRequestHeader('Content-type', 'application/json');
        request.send()

        request.onload = () => {
            const data = JSON.parse(request.response);
            targetElement.forEach(item => {
                if (item === somInput) {
                    item.value = (element.value * data[element.id]).toFixed(2)
                }
                else {
                    item.value = ((element.value * data[element.id]) / data[item.id]).toFixed(2)
                }
            })
            element.value === '' && (targetElement.forEach(e => e.value = ''))
        }
        request.onerror = () => {
            console.log('error')
        }
    }
}


converter(somInput, [usdInput, eurInput])
converter(usdInput, [somInput, eurInput])
converter(eurInput, [somInput, usdInput])