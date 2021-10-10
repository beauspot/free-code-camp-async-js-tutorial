let stocks = {
    Fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"]
};

let is_shop_open = false;

let time = ms => new Promise((resolve, reject) => {
    if(is_shop_open){
        setTimeout(resolve, ms);
    }
    else {
        reject(console.log(`shop is closed`));
    };
});

let kitchen = async () =>{
    try{
        await time(2000);
        console.log(`${stocks.Fruits[0]} was selected`);

        await time(0);
        console.log(`Starting The production`);

        await time(2000);
        console.log(`The ${stocks.Fruits[2]} has been chopped`);

        await time(3000);
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
        
        await time(1000);
        console.log(`The Machine was started.`);

        await time(2000);
        console.log(`Selecting ${stocks.holder[0]} container`);

        await time(3000);
        console.log(`The ${stocks.toppings[0]} was added.`);

        await time(4000);
        console.log(`Serve Icecream.`);
    }
    catch(error){
        console.log(`customer left`, error);
    }
    finally{
        console.log(`The day has ended shop is closed.`);
    }
};

kitchen();