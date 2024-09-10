console.log("hi");
// let username = "alex";
// let password = "1234";

// let userInput = prompt("ur name");
// let userPassword = prompt("password");

// if (userInput == username && userPassword == password) {
//   console.log("bu wart tru");
//   alert("u logged in");
// } else {
//   console.log("smthn went wrong");
//   alert("smthn went wrong");
// }

//
//
//
//

// if (0 || false || "" || 0 || "" || false) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// console.log(0 || false || "" || 0 || "" || false);
// console.log(12 && "hello" && "0" && "q" && true);
// console.log(16 - 16 || "hello" == "hell" || false);

let a = 35;

if (a > 0 && a < 15) {
  console.log("a 0 dan katta va a 15dan kickina");
} else if (a > 15 && a <= 35) {
  console.log("a 15 dan katta va a 35dan kickina");
} else if (a > 35 && a <= 65) {
  console.log("a 35 dan katta va a 65dan kickina");
} else {
  console.log("a 65dan katta");
}
//
//
//
// function test(a) {
//   if (a) {
//     return `${a} true`;
//   } else {
//     return `${a} false`;
//   }
// }
// console.log(test(0));
// let yil = prompt();

function pensiya(year) {
  let pensiyaAGe = 55;
  let age = 2023 - year;
  if (age >= pensiyaAGe) {
    console.log("u r pensioner");
  } else {
    console.log(`${pensiyaAGe - age} yil qoldi`);
  }
}
pensiya(yil);

let month = prompt("month");
switch (month) {
  case "1":
    console.log("yanvar");
    break;
  case "2":
    console.log("fevral");
    break;

  case "3":
    console.log("mart");
    break;

  default:
    console.log("bu else");
}
