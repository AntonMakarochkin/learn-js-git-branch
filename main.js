
function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?')
}

function min(a, b) {
  if ( a < b) {
    return a
  } else {
    return b
  }
} 


function max(c, d) {
  return c < d ? d : c;
}

function pow(x, n) {
  let result = x
  for(i=1; i<n; i++) {
    result *=x
  }
  return result
}

let x = prompt("x?", '');
let n = prompt("n?", '');
if (n < 1) {
  alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
  alert( pow(x, n) );
}


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