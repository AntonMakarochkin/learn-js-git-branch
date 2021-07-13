/* 
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
console.log(calculator.mul()) */

/* function Calculator() {
  this.read = function() {
    this.firstNumber = +prompt('first', '')
    this.secondNumber = +prompt('second', '')
  }
  this.sum = function() {
    return this.firstNumber + this.secondNumber
  }
   this.multiple = function() {
     return this.firstNumber * this.secondNumber
   }

  
}

let calculator = new Calculator()

calculator.read() */

/* 
function Accumulator(staringValue) {
  this.value = staringValue

  this.read = function() {
    this.value += +prompt('first', '')
  }
}

let accum = new Accumulator(2)

accum.read()
accum.read()

console.log(accum.value)

 */



/* let target = 'xxx'
let targetV = 'viagra'
function checkSpam(str) {
  let checkStr = str.toLowerCase()
  pos = 0
  return checkStr.includes(target) || checkStr.includes(targetV)
}

console.log(checkSpam('asdasd vIagra asdasd')) */



/* function truncate(str, maxlength) {
  let strLenght = str.length 
 if (strLenght > maxlength) return str.slice(0, maxlength - 1) + '...' 
 str
}


console.log(truncate('lova bumbastic imato lova lova bumbastic', 10)) */


/* function extractCurrencyValue(str) {
 return +str.slice(1)
 }
 console.log(extractCurrencyValue('#100'))

 */





/* function sumInput(){
   let arr = []

   while(true) {
     let number = prompt('n', '')
     if (number === '' || number === null || !isFinite(number)) break
     arr.push(+number)
   }

   let sum = 0
   for (let key of arr) {
     sum += key
   }
   return sum
  }
alert( sumInput() );   */



/* function getMaxSubSum(arr) {
  maxSum = 0
  currentNumber = 0

  for (let key of arr) {
    currentNumber += key
    if (currentNumber < 0) currentNumber = 0
    maxSum = Math.max(currentNumber, maxSum)
  }
  return maxSum


}
console.log( getMaxSubSum([-1, 2, 3, -9, 2, 4]) ); // 6 */
