// falsy
// false, "", null, NaN, undefined, 0, 0n;

// scopes

// global va local(block va functional)
let nimadir = "qwerty"


if (true) {
let nimadir2 = "12";

    // console.log(nimadir);
}

// console.log(nimadir2);


let myFunction = function(){
    var nimadir3 = "32"
    console.log(nimadir);
}




myFunction();

let myFunction2 = a=> a**2

// let age = 0;

// while(age < 18){
//     console.log('hali yoshsan');
//     age++;
// }

let user = {
    name:"Zokir",
    age:'qw',
    false:234,
}
// string, symbol

delete user.name

console.log(user);
 
Array.prototype.zokir = function(){
    console.log('hi');
}

