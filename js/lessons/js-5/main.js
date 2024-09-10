console.log("hello");
// let arrNum = [13, 3234, 323, 3, 23, 34, 2, 22, 21, 23];

// console.log(arrNum.length);
// for (let jahontillari = 0; i < arrNum.length; i++) {
//   console.log(arrNum[jahontillari]);
// }

// let str = "hello world";
// let i = 0;
// for (i; i < str.length; i++) {
//   console.log(str[i]);
// }

let allNums = [12, 313, 3, 8, 10, 53, 556, 775, 45, 665];
// allNums[1].length > 3
let totalNum = function (arr) {
  let lyuboy = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      lyuboy = lyuboy + arr[i];
    }
  }
  return lyuboy;
};
// let sumOfEven = totalNum([212, 212]);
// let sumOfEven2 = totalNum([123, 32, 332, 42]);
// console.log(sumOfEven2);

// let myArr = "jahon tillari";
// let a = "eh";
// let b = "e" + a;

//
//
//

// function reverseStr(str) {
//   let a = 12;
//   for (let i = 0; i < str.length; i++) {
//     a = str[i] + a;
//   }
//   return a;
// }
// let soqqa = reverseStr("hello world");
// console.log(soqqa);

let findWord = function (arr) {
  //
  let summa = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 3) {
      summa++;
    }
  }
  return summa;
  //
};

let a = ["hello", "hi", "wor", "amity", "tuit lorem"];

// for (let i = 0; i < a.length; i++) {}
// bu indexi
for (x in a) {
  console.log(x);
}
// bu elementni ozi
for (x of a) {
  console.log(x);
}
