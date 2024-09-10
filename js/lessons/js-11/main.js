console.log("hello");
// console.log(document);
let total = document.documentElement;
let header = document.head;
let bodySection = document.body;

let ul = document.querySelector("ul"); // element

// let h1Elements = document.querySelectorAll(".title"); //nodelist
// console.log(h1Elements);

// console.log(ul.childNodes);
// console.log(ul.children); // collection
// let lilar = document.getElementsByTagName("div"); // collection
// console.log(lilar);
// let titlelar = document.getElementsByClassName("title");
// let title = document.getElementById("title"); // element
// console.log(title);
// console.log(lilar);
// console.log(titlelar);
// for (let e of titlelar) {
//   console.log(e);
// }
// let a = Array.from(lilar);
// console.log(a);
// console.log(ul);
// console.log(ul.nextSibling);
console.log(ul.firstChild);
console.log(ul.firstElementChild);
// console.log(ul.parentElement);
// console.log(ul.hasChildNodes());


/***
 * Self-written code
 * function init() {
    convertDate("15 may 2009");
    convertDate("31 july 2009");
    convertDate("32 may 2009");
    convertDate("30 february 2009");
}

function convertDate(date) {

    let dateToNum = {
        "january": 1,
        "february": 2,
        "march": 3,
        "april": 4,
        "may": 5,
        "june": 6,
        "july": 7,
        "august": 8,
        "september": 9,
        "october": 10,
        "november": 11,
        "december": 12
    };

    [day, month, year] = date.split(" ");
    month = dateToNum[month.toLowerCase()];
    if (parseInt(day) > 31) {
        return console.log('Day must be less than 31');
    }
    if (month == 2 && parseInt(day) > 29) {
        return console.log('Max day in February is 29 in a loop year');
    }
    if (parseInt(day) < 10) {
        day = "0" + day;
    }
    if (parseInt(month)) {
        month = "0" + month;
    }
    console.log(`Date is ${day}.${month}.${year}`);
}

init();

 */
