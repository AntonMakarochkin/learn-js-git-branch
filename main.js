/* 
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiple(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') obj[key] *= 2
  }
}
multiple(menu)

console.log(menu) */

/* let user = {
  name: "Иван",
  age: 30
};

let clone = Object.assign({}, user);

console.log(clone) */


let calculator = {
  read() {
    this.firstNumber = +prompt('первое число',"")
    this.secondNumber = +prompt('второе число', "")
  },

  sum() {
      return this.firstNumber + this.secondNumber
  },
  mul() {
    return this.firstNumber * this.secondNumber
  }
}

calculator.read()

console.log(calculator.sum())
console.log(calculator.mul())