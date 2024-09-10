// "use strict";
console.log("hello");
let userAlex = {
  name: "Alex",
  year: 1994,
  //   age: 2023 - this.year,
  language: "uzbek",
  student: false,
  age() {
    console.log(2023 - this.year + this.name);
  },
  //   sayHi(name, year) {
  //     console.log(`hi ${name} ${2023 - year}`);
  //   },
};
// user.sayHi("Jon", 1990);
// user.age();
// let userJon = { ...userAlex };
// userJon.age();
// userAlex.age();
// console.log(userJon);
// console.log(userAlex);
let user = {
  name: "Alex",
  year: 1994,
  age: 12,
  language: "uzbek",
  student: false,
};
// delete user.age;
// delete user.language;

// user.lorem = "asdas";
// user.student = true;
// delete user.student;

// console.log(user);
// console.log(this);

// let obj = {
//   test() {
//     console.log(this);
//   },
//   test2: {
//     fun: () => {
//       console.log(this);
//     },
//   },
// };
// testabc = "hello im test";
// console.log(testabc);
// obj.test();
// obj.test2.fun();

// 1km ga 5 litr
let car = {
  model: "damas",
  benzin: 100,
  yurdi: 0,
  //   5dan kam bosa yurmaydi, log qladi zaprafka qil deb
  yur() {
    console.log("yurdi");
  },
  zaprafka(num) {},
  polniybak() {},
  info() {},
};

car.yur();
car.yur();
car.zaprafka(20);

let arr = [
  { name: "testname", type: "samsung", price: 130 },
  { name: "testname", type: "apple", price: 100 },
  { name: "testname", type: "samsung", price: 200 },
  { name: "testname", type: "vivo", price: 130 },
  { name: "testname", type: "samsung", price: 150 },
  { name: "testname", type: "vivo", price: 100 },
  { name: "testname", type: "samsung", price: 300 },
];
