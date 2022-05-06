class Sale {
  name;
  calcPrice() {
    return (
      "Name :" +
      this.name +
      "Amount : " +
      this.price -
      (this.price * this.discount) / 100
    );
  }
  constructor(name, amount, price, discount) {
    this.name = name;
    this.amount = amount;
    this.price = price;
    this.discount = discount;
  }
}

class Beverage extends Sale {
  amount;
  price;
  discount;

  beverage = { name: "Pepsi", amount: 3, price: 19, discount: 10 };
  getF() {
    console.log("getF");
  }

  constructor() {
    super();
  }
  //   constructor(amount, price, discount) {
  //     this.amount = amount;
  //     this.price = price;
  //     this.discount = discount;
  //   }
}

const Bever = new Beverage();
Bever.Sale();
console.log(Bever.calcPrice());
