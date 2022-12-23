function sum(a, b) {
    return a+b;
}

function capitalize(string) {
    const capital = string[0].toUpperCase();
    return capital + string.slice(1);
}

function reverseString(string) {

    // return string.split("").reverse().join("");
    if (string === "") return "";
    else return reverseString(string.substr(1)) + string.charAt(0);
}

class Calculator {
    constructor(){}

    add(a, b){
        return a + b;
    }

    substract(a, b){
        return a - b;
    }

    divide(a, b){
        return a / b;
    }

    multiply(a, b){
        return a * b;
    }
}


const calc = {
    add: (a, b) => {return a + b}, 
    substr: (a, b) => {return a - b}, 

}


console.log(calc.add(2,3));





// console.log(capitalize("aco"))
// console.log(reverseString("aco"))






















module.exports = sum; 

