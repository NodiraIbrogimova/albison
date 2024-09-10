let names = ["JON", "ALEX", "ROY", "LILI", "TOM", "JERRY", "ANNA"];

// function test(masalan, ism) {
//   let indexOf = 0;
//   //
//   for (let i = 0; i < masalan.length; i++) {
//     if (masalan[i] == ism) {
//       indexOf = i;
//       break;
//     }
//   }
//   return `ROY's index ${indexOf}`;
// }
// let resultROY = test(names, "ROY");
// let resultALEX = test(names, "ALEX");
// console.log(resultROY);
// console.log(resultALEX);
//
//

// let i = 0;

// while (0 > 10) {
//   console.log(i);
//   i++;
// }

// do {
//   console.log("hi", i);
//   i++;
// } while (i < 10);

function isPrime(num) {
  let prime = true;

  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      prime = false;
      break;
    }
  }
  return prime;
}
console.log(isPrime(6));

function dondonziki(user1, user2) {
  if (
    (user1 == "qaychi" && user2 == "tosh") ||
    (user1 == "qogoz" && user2 == "qaychi") ||
    (user1 == "tosh" && user2 == "qogoz")
  ) {
    console.log("user2 won");
  } else if (
    (user1 == "qaychi" && user2 == "qogoz") ||
    (user1 == "qogoz" && user2 == "tosh") ||
    (user1 == "tosh" && user2 == "qaychi")
  ) {
    console.log("user1 won");
  } else {
    console.log("durrang");
  }
}
// let user1 = prompt("qaychi, qogoz, tosh");
// let user2 = prompt("qaychi, qogoz, tosh");
// dondonziki("qogoz", "qaychi");
// dondonziki(user1, user2);

let findVowels = (str) => {
  let unli = 0;
  let undosh = 0;
  let space = 0;
  let numbers = 0;
  for (let i = 0; i < str.length; i++) {
    let l = str[i];
    if (l == "a" || l == "i" || l == "o" || l == "u" || l == "e") {
      unli++;
    } else if (l == " ") {
      space++;
    } else if (Number(l)) {
      numbers++;
    } else {
      undosh++;
    }
  }
  return `unli ${unli}, undosh ${undosh}, space ${space}, numbers ${numbers}`;
};
console.log(findVowels("hello world 4"));

//  home work
function factorial(num) {
  // 1 * 2 * 3 * 4 * 5 ... num
}
function fizBaz(num) {
  //  9 fiz
  // 10 baz
  //  15 fizbaz
}

function primes(num) {
  // 2 ... num
}
function isPalindrom(str) {
  //  aziz => not palindrom
  //  aziza =>  palindrom
}
