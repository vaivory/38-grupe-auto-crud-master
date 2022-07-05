class Dealer {
    constructor(name, currency) {
        this.name = name;
        this.currency = currency;
        this.carsForSale=[];
        this.listOfCars = [];

        console.log(`Hi, my name is ${this.name}!`);
    }

   

    formatPrice(price) {
        return `${price} ${this.currency}`;
    }

    getCar(name, price) {
        this.carsForSale.push({
            name:name,
            price: price,
        });
        return `New car everyone! ${name} for only ${this.formatPrice(price)} EUR!`;
    }

    getCar(carModel, carPrice) {
        this.listOfCars.push({
            model: carModel,
            price: carPrice,
        });
    }

    carList(){
        const header=`${this.name}'s car dealership:`;
        let lineSize=header.length;
        let table=[];
        let index=1;
        for (const car of this.carsForSale) {
            const tableLine=`${index++} ${car.name}: ${this.formatPrice(car.price)}`
           if (tableLine.length>lineSize) {
            lineSize=tableLine.length;
           }
           table.push(tableLine);
        }
       return `${header}\n${line}${table}`;
       
      
        }
    }

    changeCarPrice(index, newPrice) {
        this.listOfCars[index-1].price=newPrice;
        return `New ${this.listOfCars[index-1].model} price is ${this.formatMoney(newPrice)} EUR.`
    }

    sellCar(index){
        if (index>this.listOfCars.length) {
            return `SORRY! No cars for sale :( `
        } else {
            let newList=this.listOfCars.splice(index-1,1);
            this.soldCars++;
            this.profit= newList[0].price
            return `Wow! ${newList[0].model} sold for ${this.formatMoney(newList[0].price)} EUR`
        }

fortune(){
            return ``;
        }
    }




}



export { Dealer }