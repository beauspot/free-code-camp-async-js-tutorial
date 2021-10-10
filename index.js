let stocks = {
    Fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"]
};


//console.log(stocks.Fruits[2]);


let Order = (fruit_name, call_production) => {
    setTimeout(() => {
        console.log(`${stocks.Fruits[fruit_name]} was selected.`);
        call_production();
    }, 2000);
    
};

// example shows a proper illustration of a call back hell.
let production = () => {

    //1. Place Order
    setTimeout(() => {
        console.log(`production Has Started.`);

        //2. Cut The fruit.
        setTimeout(() => {
            console.log(`The fruit has been chopped`);

            //3. Add Water and ice
            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

                //4. start the machine
                setTimeout(() => {
                    console.log(`The Machine was started.`);

                    //5. select container
                    setTimeout(() => {
                        console.log(`Selecting ${stocks.holder[1]} container`);
                        
                        //6. Select Toppings
                        setTimeout(() => {
                            console.log(`The ${stocks.toppings[0]} was added.`);

                            setTimeout(() => {
                                console.log(`Serve Icecream`);
                            }, 2000);

                        }, 3000);
                    }, 2000)
                }, 1000);
            }, 1000);
        }, 2000);
    }, 0000);
    
};

Order(0, production);

//0:31:54

export { stocks };