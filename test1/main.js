// number 1

const regExp = /Регулярные выражения/

const containsOnlyDigits = (str) => {
    const regExp = /^\d+$/;
    return regExp.test(str);
}

console.log(containsOnlyDigits("12345")); // Выведет true
console.log(containsOnlyDigits("12a45")); // Выведет false



//number 2


const logEverySecond = () => {
    let seconds = 1;
    setInterval(() => {
        console.log(`прошла секунда!!!`);
        seconds++
    },1000)
}


logEverySecond();


//number 3
const count = () => {
    let i = 1;
    const interval = setInterval(() => {
        console.log(i)
        if (i === 10) {
            clearInterval(interval);
        }
        i++
    },1000)
}
count()


// number 5
const getData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET",'data.json' )

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200 ) {
            const response = JSON.parse(xhr.responseText);
            console.log(response)
        }
    }
    xhr.send()
}
getData()

//number 5

const colorBox = document.getElementById("#colorBox");
    colorBox.addEventListener('click',() => {
colorBox.classList.toggle('active-background');
})