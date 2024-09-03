//@ts-check

let isTheSkyBlue = true;
let isTheSunShing = true;

if(isTheSkyBlue) {
    isTheSunShing = false
    //this will run if true
    console.log("the sky is indeed blue");
} else if(isTheSunShing) {
    let gassColor = "green"
    console.log("it must be night and the grass is ", gassColor)
} else (
    //this will run if false
    console.log("it must be cloudy")
)

console.log(isTheSkyBlue, isTheSunShing)
