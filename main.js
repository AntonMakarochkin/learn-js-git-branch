"use strict"
/* function sumTo(io) {
  let sum = 0
  for( let i = io; i > 0; i-- ) {
    sum += i
  }
  return sum
}

console.log(sumTo(100)) */


/* let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list){ 

  
  if (list.next) {
    printList(list.next)
  }
  console.log(list.value)
}

printList(list)


function sum (a) {
  return function (b) {
    return a + b
  }
}

console.log(sum(3)(1))
let arr = [1, 2, 3, 4, 5, 6, 7];
function inBetween(a, b) {
  return function(x) {
    return x >= a && x <= b
  }
}

function inArray(arr) {
  return function(x) {
    return arr.includes(x)
  }
}

console.log(arr.filter(inBetween(3, 6)))
 */




/* function byField(field) {
  return  (a, b) => a[field] > b[field] ? 1 : -1  
} */


/* function makeArmy() {
  let shooters = []
  let i = 0

  while(i < 10) {
    let j = i
    let shooter = function() {
      console.log(j)
    }
    shooters.push(shooter)
    i++
  }
  return shooters
}

let army = makeArmy()

army[5]() */
/* function ask(question, ...handlers) {
  let isYes = confirm(question);

  for(let handler of handlers) {
    if (handler.length == 0) {
      if (isYes) handler();
    } else {
      handler(isYes);
    }
  }

}
ask("Вопрос?", () => alert('Вы ответили да'), result => alert(result)); */

/* function makeCounter() {
  function counter() {
    return counter.count++
  }
  counter.count = 1
  return counter


}
let x = makeCounter() 
console.log(x.count) */



/* let sayHi = function func(who) {
  if (who) {
    alert(`hello ${who}`)
  } else {
    func('guest')
  }
}

sayHi() */

/* function makeCounter() {
  
  let count = 0;
  function counter() {
    return count++;
  }

  counter.set = value => count = value;

  counter.decrease = () => count--;

  return counter;
}

let counter = makeCounter()

console.log(counter.set(10))
console.log(counter())
console.log(counter())
 */


/* let arr1 = [7, 0, 6, 4, 2, 4]
let arr2 = [2, 6, 3, 4, 5, 6, 7]
let arr3 = [7, 6, 5, 3, 3]


function buyA(arr) {
  let minPrice = arr[0]
  let maxProfit = 0

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i]

    if (current < minPrice) {
      minPrice = current
    }
    if (current - minPrice > maxProfit) {
      maxProfit = current - minPrice
    }
  }
  return maxProfit
}


console.log(arr1, buyA(arr1))


 */


/* 
function pN(from, to) {

    setTimeout(function tick(){
      console.log(from)
      if (from < to) {
        setTimeout(tick, 1000)
      }
      from++
    }, 1000) 
  

}
pN(1, 10) */




/* let arr1 = [2, 4, 4, 1, 6]
let arr2 = [2, 4, 3, 3, 5, 6, 4]


function intersec (arr1, arr2) {
 let result = []

 let map = arr1.reduce((acc, item) => {
   acc[item] = acc[item] ? acc[item] + 1 : 1
   return acc
 }, {})

 for(let i = 0; i < arr2.length; i++) {
   let current = arr2[i]
   let count = map[current]

   if (count && count > 0) {
     result.push(current)
     map[current] -= 1

   }
 }

 return result
}

console.log(intersec(arr1, arr2))
 */

/* let str = 'keaakce'

function firstS(str) {
 let map = new Map()

  for (let i = 0; i < str.length; i++) {
    let current = str[i]
    if (map.has(current)) map.set(current, map.get(current) + 1)
    else map.set(current, 1)
  } 
  for (let i = 0; i < str.length; i++) {
    if (map.get(str[i]) === 1) return i
  }
  return -1
}
console.log(firstS(str)) */



/* let arr = [ 2, 3, 5, 7, 9, 12]

function search(arr, target) {
  let right = arr.length - 1
  let left = 0
  let mid

  while(left <= right) {
    mid = Math.round((right - left) / 2) + left 
    if (target === arr[mid]) return mid
    else if (target < arr[mid]) right = mid - 1
    else left = mid + 1

  }
  return -1 
}




console.log(search(arr, 5)) */
/* let arr = [1, 2, 3, 5, 4, 2, 1]

function search(arr) {
  let start = 0 
  let end = arr.length - 1

  while (start < end) {
    let midl = Math.floor((end + start) / 2)

    if (arr[midl] < arr[midl + 1] ) {
      start = midl + 1
    }
     else {
       end = midl 
     }
  }
  return start
}

console.log(search(arr))
 */





let arr = [1, 3, 4, 6, 3, 2, 1]

function info(arr, target) {
    let left = 0
    let rigth = arr.length - 1
    let mid

    for (let i = 0; i < arr.length; i++) {
      mid = Math.round((rigth - left) / 2) + left
      if (arr[mid] === target) return mid
      else if (target < arr[mid] ) rigth = mid - 1
      else left = mid + 1
    }
    return -1
}

console.log(info(arr, 3))