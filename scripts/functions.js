//@ts-check;

// let firstName = "mica"

let sayHi = function (firstName = "Captain No Name", age = 100000) {
let firstName = f;
let age = a;
let greeting = 'hello my name is $(firstname) and i and $(age) years old.';
// "Hello! my name is" + firstname + "and i am" + age + "years old.";
console.log(greeting);
};
sayHi()
sayH1 ("Nicholas", 14);
sayHi (firstName, 19);

//console.log(firstName);

function add(a,b) {
    let answer = a+b;
    return answer;
}

let additionAnswer = add("100", 5000);
add(5000, 98733240878);

console.log(additionAnswer, add(5000,98733240878));

let runMyStuff = (x, y, f) =>{
    let answer = f(x, y);
    return answer;
}

runMyStuff(maya, 19, sayHi)

let person = {
    isWearingBarneyShirt: false,
    isTotalyAwesome: false
};

function wearBarneyShirt(person) {
    person.isWearingBarneyShirt = true;
    person.isTotalyAwesome = true;
}

console.log(person);
wearBarneyShirt(person);
console.log(person);
