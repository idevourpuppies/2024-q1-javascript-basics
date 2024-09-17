//@ts-check

class Ball {
    constructor(typeValue) {
        this.type =typeValue
        this.color = "pink"
        this.bounce = 0;
        this.cost = 0.0;
    }

    play() {
        console.log(`boing ${this.type} is bouncy`)
    }
    
}

let red = new Ball("red ball")

red.color = "red";

let blue = new Ball("blue ball")
blue.color

red.play();
blue.play();