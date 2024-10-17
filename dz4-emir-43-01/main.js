

    let counterValue = 0;
    const counter = document.getElementById('counter');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');

    incrementButton.addEventListener('click', () => {
    counterValue++;
    updateCounter('increment');
});

    decrementButton.addEventListener('click', () => {
    if (counterValue > 0) {
    counterValue--;
    updateCounter('decrement');
}
});

    function updateCounter(action) {
    counter.textContent = counterValue;
    if (action === 'increment') {
    counter.style.color = 'green';
} else if (action === 'decrement') {
    counter.style.color = 'red';
}
}

//     // Функционал для отслеживания координат курсора
//     const trackingBox = document.getElementById('trackingBox');
//     const coordinatesDisplay = document.getElementById('coordinates');
//
//     trackingBox.addEventListener('mousemove', (event) => {
//     const rect = trackingBox.getBoundingClientRect();
//     const x = event.clientX - rect.left;
//     const y = event.clientY - rect.top;
//     coordinatesDisplay.textContent = `X: ${x}, Y: ${y}`;
// });

    // Функционал для светофора
//     const redLight = document.getElementById('redLight');
//     const yellowLight = document.getElementById('yellowLight');
//     const greenLight = document.getElementById('greenLight');
//     const trafficMessage = document.getElementById('trafficMessage');
//
//     function updateTrafficLight(color) {
//     redLight.style.backgroundColor = 'gray';
//     yellowLight.style.backgroundColor = 'gray';
//     greenLight.style.backgroundColor = 'gray';
//
//     if (color.toLowerCase() === 'красный') {
//     redLight.style.backgroundColor = 'red';
//     trafficMessage.textContent = 'STOP';
// } else if (color.toLowerCase() === 'желтый') {
//     yellowLight.style.backgroundColor = 'yellow';
//     trafficMessage.textContent = 'READY';
// } else if (color.toLowerCase() === 'зеленый') {
//     greenLight.style.backgroundColor = 'green';
//     trafficMessage.textContent = 'GO';
// } else {
//     trafficMessage.textContent = 'Invalid color';
// }
// }
//
//     const userColor = prompt('Введите цвет светофора (Красный, Желтый, Зеленый):');
//     updateTrafficLight(userColor);
