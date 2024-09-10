function method1(params) {

}

let declarator = function method2(params) {
    console.log('This\'s method 2');
}

let declarator2 = () => {
    console.log('This\'s method 3');
}


console.log('Method 2: ', declarator);
console.log('Method 3: ', declarator2);



















// function init() {
//     console.log('Num is prime: ', isPrime());

//     // largestNumber();
//     getVowelCount("Hello World");
//     stonePaper("scissor", "scissor");
//     stonePaper("scissor", "paper");
//     stonePaper("paper", "stone");
//     stonePaper("stone", "scissor");
//     getElemWithLength(["hello", "world", "flower", "stone", "sea", "sun"], 3);
// }

// function isPrime() {
//     num = parseInt(prompt("Enter random number: "));
//     if (num = 0 || num == 1) {
//         return false;
//     }

//     for (let index = num - 1; index > 1; index--) {
//         if (num % index == 0) {
//             return false;
//         }
//     }
//     return true;
// }

// function largestNumber(num1, num2, num3, num4) {
//     amax = num1;
//     if (num2 > amax) {
//         amax = num2
//     }
//     else if (num3 > amax) {
//         amax = num3
//     }
//     else if (num4 > amax) {
//         amax = num4
//     }
//     console.log('Max val is: ', amax);
//     return amax;
// }

// function getVowelCount(arr) {
//     vowels = new Set(['a', 'u', 'i', 'o', 'e']);
//     count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (vowels.has(arr[i])) {
//             count++;
//         }
//     }
//     console.log('There are ' + count + ' vowels in this array');
//     return count;
// }

// function stonePaper(person1, person2) {
//     if (person1 == 'scissor') {
//         if (person2 == 'paper') {
//             return console.log('Person 1 wins');
//         }
//         else if (person2 == 'stone') {
//             return console.log('Person 2 wins');
//         }
//         else {
//             return console.log('Win win!');
//         }
//     }
//     else if (person1 == 'paper') {
//         if (person2 == 'scissor') {
//             return console.log('Person 2 wins');
//         }
//         else if (person2 == 'stone') {
//             return console.log('Person 1 wins');
//         }
//         else {
//             return console.log('Win win!');
//         }
//     }
//     else {
//         if (person2 == 'paper') {
//             return console.log('Person 2 wins');
//         }
//         else if (person2 == 'scissor') {
//             return console.log('Person 1 wins');
//         }
//         else {
//             return console.log('Win win!');
//         }
//     }
// }

// function getElemWithLength(arr, len) {
//     result = []
//     for (let index = 0; index < arr.length; index++) {
//         if (arr[index].length === len) {
//             result.push(arr[index]);
//         }
//     }
//     return console.log('Result array: ', result);
// }

// init();