let stocks = {
    Fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"]
};


let is_shop_open = true;

let order = (time, work) => {
    return new Promise( (resolve, reject) => {
        if(is_shop_open){
            setTimeout(() => { resolve( work() );
            }, time);
        }
        else {
            reject(console.log(`Our Shop is closed`));
        }
    } );
};

//selecting fruits
order(2000, () => console.log(`${stocks.Fruits[0]}`))

// chaning a promise with .then()

//placing an order
.then(() => { order(0, () => console.log(`Production has started.`))})

// cut the fruit
.then(() => { order(2000, () =>  console.log(`The fruit has been chopped`))})

// Add water and Ice
.then(() => { order(3000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`))})

// Start the machine
.then(() => { order(1000, () =>  console.log(`The Machine was started.`))})

// select container
.then(() => order(2000, () =>  console.log(`Selecting ${stocks.holder[0]} container`)))

// selecting toppings
.then(() => { order(3000, () => console.log(`The ${stocks.toppings[0]} was added.`))})

// serving icecream
.then(() => order(4000, () => console.log(`Serve Icecream.`)))

// using the .catch handler to catch Errors
.catch(() => console.log(`Customer left`))

//use the .finally handler 
.finally(() => console.log(`The day has ended Shop is closed.`));
