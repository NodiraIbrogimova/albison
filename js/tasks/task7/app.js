function init() {
    carDetails();
    phoneDetails();
}

function carDetails() {
    let car = {
        // 5 litres for each km
        fuel: 100,
        // times the drive is called
        // each time dive is called times is inc by 1km
        times: 0,
        // inc times by 1 km
        // dec fuel by 5 litres
        // if fuel < 5, call refuel and don't drive
        drive() {
            if (this.fuel < 5) {
                alert("Less then 5 litres of fuel is left, refuel before driving");
                this.full();
            }
            else {
                this.times++;
                this.fuel -= 5;
            }
        },
        // if curr fuel+num is more than 100 litres, add only the part of num
        // to make fuel volume 100 litres
        refuel(num) {
            total = this.fuel + num;
            if (total > 100) {
                this.fuel = 100;
            }
            else {
                this.fuel = total;
                console.log(`Car has been refueled with ${this.fuel} litres`);
            }
        },
        // just make litres of fuel 100 litres regardless of fuel volume
        full() {
            this.fuel = 100;
            console.log('Car has been fully refueled');
        },
        // how many km were driven and log curr fuel
        info() {
            alert(`Total ${this.fuel} is left. \n${this.times} of km has been driven`);
        }
    }
    for (let index = 0; index < 20; index++) {
        car.drive();
    }
    car.drive();
    car.drive();
    car.drive();
    car.info();
}

function phoneDetails() {
    let phones = [
        {
            name: 'iPhone Pro Max',
            price: 1100,
            type: 'iPhone'
        },
        {
            name: 'Samsung S10 5G',
            price: 160,
            type: 'Samsung'
        },
        {
            name: 'Huawei Pro',
            price: 45,
            type: 'Huawei'
        },
        {
            name: 'Samsung A50',
            price: 100,
            type: 'Samsung'
        },
        {
            name: 'iPhone 7',
            price: 100,
            type: 'iPhone'
        },
        {
            name: 'Nokia 1202',
            price: 37,
            type: 'Nokia'
        }
    ];

    totalPrice = 0;
    count = 0;
    phones.forEach(element => {
        if (element.type == "Samsung") {
            totalPrice += element.price;
            count++;
        }
    });

    console.log(`Total price is $${totalPrice} for total ${count} number of Samsung model phones`);
}


init();