// 1.
const numbers = [25, 14, -12, 2, -38, 3,]
const positiveNumbs = numbers.filter(num => {
    if (num > 0 && Math.trunc(num) === num)
    return num
})

const sum = positiveNumbs.reduce(
    (acc, curr) => acc + curr
)
console.log(`sum is ${sum}`) 



//2.
const arrColor = ['red', 'blue', 'black', 'red', 'green', 'green', 'blue', 'red']

const colorCount = arrColor.reduce((colorAcc, color) => {
        if (!colorAcc[color]) { 
            colorAcc[color] = 1
        } else {
            colorAcc[color]++
        }
        return colorAcc
    }
, {})

console.log(colorCount)

// 3
class Car {
    constructor(brand, model, speed = 0, motion = 'The car is not moving'){
        this.brand = brand
        this.model = model
        this.speed = speed
        this.motion = motion
    }
    
    showCar(){
        console.log(
            `
My Car:

brand - ${this.brand} 
model - ${this.model} 
speed - ${this.speed} 
motion - ${this.motion} 
            `
        )
    }

    check_motion () {
        console.log(`სიჩქარე - ${this.speed}`)
        if (this.speed === 0) {
            this.motion = 'მანქანა გაჩერებულია'
        } else {
            this.motion = 'მანქანა მოძრაობს'
        }
        console.log(`${this.motion}
        `)
    }

    accelerate (speed) {
        this.speed = speed
        console.log('accelerate')
        this.check_motion()
    }

    brake (speed) {
        if (speed >= this.speed)
            console.log(`brake
დამუხრუჭების სიჩქარე უნდა იყოს მიმდინარე სიჩქარეზე ნაკლები`)
        else {
            this.speed = speed
            console.log('brake')
        }
        this.check_motion()
    }

    emergency_brake (speed) {
        if (speed !== 0)
        console.log(`emergency brake
დამუხრუჭების სიჩქარე უნდა იყოს ნული`)
    else {
        this.speed = speed
        console.log('emergency brake')
    }
    this.check_motion()
    }

    status () {
        console.log(
            `
მანქანა ${this.brand} ${this.model} მოძრაობს ${this.speed} კმ/სთ სიჩქარით და სტატუსია: ${this.motion}
            `
        )
    }
}

const car = new Car('jeep', 'wrangler')
car.showCar()

car.check_motion()

car.accelerate(70)

car.brake(100)
car.brake(90)

car.status()

car.emergency_brake(3)
car.emergency_brake(0)

car.status()



// 4
function addAsync(first, second) {
    return new Promise((resolve, reject) => {
        if ( (typeof first === 'number' && typeof second === 'number')) {
            resolve('Success')
            console.log('Promise resolved')
        } else {
            reject('Error')
            console.log('Promise rejected')
        }
})
.then((res) => {
    console.log(res)
})
.catch((res) => {
    console.log(res)
})
}

addAsync()
addAsync(2)
addAsync(2, '4')
addAsync(null, 5)
addAsync(2, 4)
addAsync(0, 0)
