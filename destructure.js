const personOne = {
    name: 'Kyle',
    age: 24,
    address: {
        city: 'Chicago',
        state: 'Detroit'
    }
};


const personTwo = {
    name: 'Sally',
    age: 32,
    address: {
        city: 'Newyork',
        state: 'California'
    }
};

const personThree = {
    age: 24,
    favoritefood: 'WaterMelon'
}

let { name, age } = personOne;
console.log(name);
console.log(age);


// adding a second variable name as firstNAme and a default value to favoritefood
let { name: firstName, age, favoriteFood = "Rice" } = personTwo;

//using the spread operator in the object 
let { name: firstName, ...rest } = personTwo;
console.log(rest);
console.log(name);

// destructuring a nested array
const { name: firstName, address: { city} } = personTwo;
console.log(city)

// combining two objects together
const personFour = { ...personOne, ...personThree };
console.log(personFour);

let printUser = ({ name, age, favoritefood = 'WaterMelon' }) => {
    console.log(`Name is: ${name}. Age is ${age}. Food is ${favoritefood}`)
};



printUser(personOne);