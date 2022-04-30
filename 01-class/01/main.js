class Calculator {
  getSubstract() {
    console.log(this.value1 - this.value2);
  }
  getMultiply() {
    console.log(this.value1 * this.value2);
  }
  getDivide() {
    console.log(this.value1 / this.value2);
  }

  show() {
    alert("Sum :" + this.sum);
  }
  constructor(value1, value2) {
    this.value1 = value1;
    this.value2 = value2;
  }
  getSum() {
    console.log(this.value1 + this.value2);
  }

  // constructor(value1, value2,value3) {
  //   this.value1 = value1;
  //   this.value2 = value2;
  //   this.value3 = value3;
  // }
}

const cal = new Calculator(10, 20);
// cal.show();
console.log(cal);
cal.getSum();
cal.getSubstract();
cal.getMultiply();
cal.getDivide();
