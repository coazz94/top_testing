// map transform list in array ssame length each item transformed
// filter filtered array
// reject  opposite of filter
// find just returns  one element

// REDUCE
// takes 3 parameters a callback function, the result of the first loop eg, cb function takes 2 arguments
// total ist der Wert der jedes mal weitergegeben wird, und item ist halt das item in dem array
// x.reduce((total, num, index, array))

const items = [
    {name: "rice", price: 5},
    {name: "book", price: 20},
    {name: "Chicken", price: 10},
    {name: "Monitor", price: 100},
]
const totalPrice = items.reduce((total, item) => {
    return total + item.price;
}, 0)

// console.log(totalPrice);



const people = [
    {name: "Aco", age: 15},
    {name: "Jelena", age: 20},
    {name: "Zeljana", age: 25},
    {name: "Milan", age: 20},
    {name: "Sinisa", age: 15},
    {name: "Vladan", age: 23},
]

const test = people.reduce((group, person)=>{
    const age = person.age;
    if (group[age] == null) group[age] = [];
    group[age].push(person.name);
    return group;
}, {})



const array = [1,8,3,4,2,6]


const sum = array.reduce((result, num)=>{
    return result + num;
}, 0)

const smallest = array.reduce((total, num) => {
    return (total < num) ? total : num;
});

const biggest = array.reduce((total, num) => {
    return (total > num) ? total : num;
});


class arrayTools {
    constructor(array){
        this.array = array;
    }

    sum(){
        const sum =  this.array.reduce((result, num)=>{
            return result + num;
        }, 0)
        return sum;
    }

    smallest(){
        const smallest = array.reduce((total, num) => {
            return (total < num) ? total : num;
        });
        return smallest;
    }

    biggest(){
        const biggest = array.reduce((total, num) => {
            return (total > num) ? total : num;
        });
        return biggest;
    }

    average(){
        const average = this.sum() / this.array.length;
        return Math.floor(average);
    }

}


let x = new arrayTools(array);

console.log(x.average())