function masala1(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return Math.floor(sum / arr.length);
}

// ============================================

function masala2(arr) {
  let numbers = [];
  for (let num of arr) {
    console.log(num);
    for (let i = 0; i < num.length; i++) {
      if (!isNaN(num[i])) {
        console.log(num[i]);
        numbers.push(num[i]);
      }
    }
  }
}

// masala2(['abs2d', 'qwer41s', 'we3'])

// ================================================

function masala3(arr) {
  let memo = [];
  for (let item of arr) {
    if (memo.includes(item)) {
      return item;
    } else {
      memo.push(item);
    }
  }
  return -1;
}

masala3([4, 5, 6, 6, 5, 4, 3]);

// ======================================================

// function masala4(arr){
//     let newArr = arr.map((item)=>{
//         return `${item}`
//     })
// }

// ========================================================

function masala5(str1, str2) {
  let newStr1 = str1.split("").sort().join("");
  let newStr2 = str2.split("").sort().join("");
  return newStr1 === newStr2;
}

// console.log(masala5('abs', 'bssa'));

// ===================Array methods=====================

let arr2 = [12, 42, 4];
Array.prototype.myIndexOf = function (a) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === a) return i;
  }
  return -1;
};

// console.log(arr.indexOf(12));

// console.log(arr2.myIndexOf(12));

console.clear();

// map, filter, some, every

let arr = [1,2,3];


Array.prototype.myMap = function (zokir) {
    let results =[];
    for(let i=0; i<this.length; i++){
       zokir(this[i], i, this);
    }
    return results
};


let myWords = ['zokir', 'zokirjon', 'abs', 'as'];


function sorted(arr){
    return arr.filter((item)=>{
        return item.length > 3;
    })
}

console.log(sorted(myWords));

['zokir', 'zokirjon'];



// let myArr = arr.myMap((item) => {
//     return item * 2;
//   });

// let myArr2 = arr.map((item) => {
//   return item + 1;
// });

// console.log(myArr);
// console.log(myArr2);





