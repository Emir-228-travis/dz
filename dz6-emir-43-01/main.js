const stringsArray = [];

function addAndReverseText() {
    const inputElement = document.getElementById("inputText");
    const text = inputElement.value;

    if (text) {

        const reversedText = text.split('').reverse().join('');
        stringsArray.push(reversedText);


        inputElement.value = '';


        displayReversedList();
    }
}

function displayReversedList() {
    const listElement = document.getElementById("reversedList");
    listElement.innerHTML = '';


    stringsArray.forEach((str) => {
        const listItem = document.createElement("li");
        listItem.textContent = str;
        listElement.appendChild(listItem);
    });
}

