let arr = [2, 3, 5, 6, 7, 1]
function sum(arr, target) {
  let obj = {}

  for(let i = 0; i < arr.length; i++) {
    obj[arr[i]] = i
  }

  for(let i = 0; i < arr.length; i++) {

    let dif = target - arr[i]

    if (obj[dif] && obj[dif] !== i) {
      return [i, obj[dif]]
    }

  } return []
}

console.log(sum(arr, 7))