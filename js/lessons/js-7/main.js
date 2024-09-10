// at
// console.log("hi world");
// let arr = ["hi", "hello", "world", 2442];
// let second = arr.at(-2);
// console.log(second);

// concat
// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const all = arr1.concat(arr2);
// console.log(all);
// console.log(arr1);

// entries
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries();
// for (let x of f) {
//   console.log(x);
// }

//every
// const ages = [32, 33, 19, 40];

// let isTrue = ages.every((age) => age > 18);

// function checkAge(age) {
//   return age > 18;
// }
// console.log(isTrue);

//fill
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.fill("Kiwi", 2, 10);
// console.log(fruits);

//find
// const ages = [3, 10, 18, 20, 3, 3, 2000];

// function checkAge(age) {
//   return age > 18;
// }
// console.log(ages.find((c, i, arr) => c > 18 && i > 5));

//flat

// const myArr = [
//   ["hello", 2],
//   ["dwefwrfw", 4],
//   [5, 6, [12, 3, ["r4r42", "dw34r"]]],
// ];
// const newArr = myArr.flat(3);
// console.log(newArr);

// foreach
// const fruits = [5, 42, 34, 24, 353, 23];
// let a = fruits.forEach((c, i, arr) => console.log(c ** 2));

// includes
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let a = fruits.includes("Orange", 2);
// console.log(a);

// isArray
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(typeof fruits);
// console.log(Array.isArray(fruits));
//join
// const fruits = ["Banana", 12, "Orange", "Apple", "Mango"];
// let text = fruits.join(" ");
// console.log(text);

//reverse
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.reverse());
// console.log(fruits);
// const str = "jahon tillari.";

// const words = str.split("").reverse().join("");
// console.log(words);

//pop
// const fruits = ["Banana", "Orange", "Apple", { name: "Mango" }];
// let last = fruits.pop();
// console.log(fruits);
// console.log(last);

// let last2 = fruits.pop();
// console.log(fruits);
// console.log(last2);

//push
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let a = fruits.push("Kiwi", "asd");
// console.log(fruits);
// console.log(a);

//unshift
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let a = fruits.unshift("Lemon", "Pineapple");
// console.log(fruits);
// console.log(a);

//shift
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift();
// console.log(fruits);

//slice
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1);
// console.log(fruits);
// console.log(citrus);

//splice
const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// let a = fruits.splice(2, 2);
// console.log(fruits);
// console.log(a);
console.log(fruits);
