function masala1(words, letter) {
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i] === letter) count++;
    }
    return count
}

// console.log(masala2("   lorem ipsum dolor sit amet"));


function masala2(arr) {
    return arr.trim().split(' ').length;
}



function masala3(weekdays) {
    let newArr = [];
    let = ['dushanba', 'seshanba', ''];

}


//================ DOM, BOM ====================
// byClassName(HTMLCollection)
// byTagName(HTMLCollection)
// byId
// SelectorAll
// querySelector


// console.log(heading);

// =========================setTimeout================

// setTimeout(()=>{
//     document.body.style.background = 'red';
// }, 3000);

// setInterval


// setInterval(()=>{
//     // document.body.style.background = 'red';
//     let hour = new Date().getHours();
//     let minute = new Date().getMinutes();
//     let second = new Date().getSeconds();
//     heading.textContent = `${hour}:${minute}:${second}`
//     // console.log(`${hour}:${minute}:${second}`);
// }, 5000);

// rgb(255,254,0)


// textContent
// innerHTML

// box.textContent += '<b>this is bold tag</b>'

// console.log(box.textContent);


// ================================classlist===========

// classlist
// add, remove, toggle
const box = document.querySelector('.box');

// setTimeout(() => {
//     box.classList.remove('red')
// }, 2000);


// setInterval(()=>{
//     box.classList.toggle('red')
// },1000)


// setAttribute

// getAttribute
console.log(box.getAttribute('class'));
console.log(box.getAttribute('name'));

const myBtn = document.querySelector('button');

myBtn.addEventListener('click', () => {
    console.log('btn clicked');
    document.body.style.background = 'rgb(77,77,77)'
})


setInterval(() => {
    console.log(Math.floor(Math.random() * 255));
}, 1000)



// the end