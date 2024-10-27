//
// class Cars {
//     constructor(model, color, wheels) {
//         this.model = model;
//         this.color = color;
//         this.wheels = wheels;
//     }
//
//     start() {
//         console.log("Машина заведена");
//     }
// }
//
//
// class Sedan extends Cars {
//     constructor(model, color, wheels, trunkSize) {
//         super(model, color, wheels);
//         this.trunkSize = trunkSize;
//     }
// }
//
//
// class Truck extends Cars {
//     constructor(model, color, wheels, payloadCapacity) {
//         super(model, color, wheels);
//         this.payloadCapacity = payloadCapacity;
//     }
// }
//
//
// class ElectricCar extends Cars {
//     constructor(model, color, wheels, batteryCapacity) {
//         super(model, color, wheels);
//         this.batteryCapacity = batteryCapacity;
//     }
// }
//
//
// const sedanCar = new Sedan("Toyota Camry", "черный", 4, "500 литров");
// const truckCar = new Truck("Volvo FH", "белый", 6, "20000 кг");
// const electricCar = new ElectricCar("Tesla Model S", "красный", 4, "100 кВт·ч");
//
//
// sedanCar.start();
// truckCar.start();
// electricCar.start();
//
//
// console.log(sedanCar);
// console.log(truckCar);
// console.log(electricCar);



class TrafficLight {
    constructor() {

        this.colors = {
            red: 'Стоп',
            yellow: 'Ждите',
            green: 'Идите'
        };
    }


    showSignal() {
        const color = prompt("Введите цвет светофора (red, yellow, green):").toLowerCase();


        switch (color) {
            case 'red':
                alert(this.colors.red);
                break;
            case 'yellow':
                alert(this.colors.yellow);
                break;
            case 'green':
                alert(this.colors.green);
                break;
            default:
                alert("Ошибка: введите один из следующих цветов: red, yellow, green.");
        }
    }
}


const trafficLight = new TrafficLight();
trafficLight.showSignal();
