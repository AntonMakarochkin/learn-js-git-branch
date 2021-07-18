/* let arr = [1, 2, 3]

arr.splice(0,1, 5,4,3 )

console.log(arr)


arr.splice(5,0, 4,5,6,7,8,9,10)
console.log(arr)
 */

/*   let arr = [1, 2, 5];


  arr.splice(-1, 0, 3, 4);
  let y = arr
  alert( arr ); 

  let x = arr.slice()
  console.log(y == x)
 */


/*   function camelize(str) {
    return str
        .split('-')
        .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
        .join('')                      
  }

  console.log(camelize("background-color")) */


/*   function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
      let value = arr[i]
      if (value < a || value > b) {

        arr.splice(i, 1) 
        i--

      }
    }
  }
  
  let arr = [5, 3, 8, 1];

  
  filterRangeInPlace(arr, 1, 4); 
  
  alert( arr );  */



/* 
  let arr = [5, 2, 1, -10, 8];


 arr.sort((a, b) => b - a)

 console.log(arr) */


/*  let arr = ["HTML", "JavaScript", "CSS"];

 function sorty(arr) {
      return arr.slice().sort()
 }

 let newArr = sorty(arr)

 console.log(newArr)
 console.log(arr) */

/* 
 let vasya = { name: "Вася", age: 25 };
 let petya = { name: "Петя", age: 30 };
 let masha = { name: "Маша", age: 28 };
 
 let users = [ vasya, petya, masha ];
 let names = users.map((item) => item.name)




console.log(users == names)
console.log(names)
  */


/* let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];


let fullUsers = users.map((item) => ({
  fullname: `${item.name} ${item.surname}`,
  id: `${item.id}`


}))

console.log(fullUsers) */


/* let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

arr.sort((a, b) => a.age > b.age ? 1 : -1)
console.log(arr) */


/* let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];


function getAge(arr) {
  return arr.reduce((sum, item) => item.age + sum, 0) / arr.length
}


alert(getAge(arr)); // 1
 */


/* let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];
let result = []
function filterArr(arr) {
  for (let key of arr) {
    if (!result.includes(key)) result.push(key)
  }
  return result
} 

console.log(filterArr(strings)) */

/* 
function aclean(arr) {
 let map = new Map()

  for (let key of arr) {
    let sorted = key.toLowerCase().split('').sort().join('')
    map.set(sorted, key)
  }
  return Array.from(map.values())

}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) );

console.log(arr) */


/* let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys())

keys.push("more");

console.log(keys)

 */

/* let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

let obj = Object.fromEntries(map); 


alert(obj.orange); // 2 */



/* let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};


function sumSalaries(obj) {
  
  let sum = 0
  for (let key of Object.values(obj)) {
    sum = sum + key
  }
  return sum


}
alert( sumSalaries(salaries) ); // 650

// у нас есть массив с именем и фамилией
let arr = ["Ilya", "Kantor"]

// деструктурирующее присваивание
// записывает firstName=arr[0], surname=arr[1]
let [firstName, surname] = arr;

alert(firstName); // Ilya
alert(surname);  // Kantor 



let options = {
  title: "Menu",
  width: 100,
  height: 200
};

let {title, width, height} = options;

alert(title);   */


let user = {
  name: "John",
  years: 30
};

let {name, age, isAdmin = false} = user


let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {
  max = 0
  maxName = null

  for(const [name, salary] of Object.entries(salaries)) {
    if (salary > max) {
      max = salary
      maxName = name
    }
  }
  return maxName

}

console.log(topSalary(salaries))