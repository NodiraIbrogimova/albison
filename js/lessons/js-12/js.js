console.log("hi");
let ul = document.querySelector("ul");
//
let li = document.querySelector("li");
let liItem = document.createElement("li");
liItem.textContent = "li from js";

// liItem.innerHTML = "hello from js";
// liItem.outerHTML = "<h1>hi lorem</h1>";
// li.textContent = "<h1>hello im h1 div </h1>";
// ul.append(liItem);
// ul.prepend(liItem);
// ul.before(liItem);
// ul.after(liItem);
// liItem.style.backgroundColor = "yellow";
// liItem.style.cssText = "color: red; font-size: 40px;";
// li.className = "listItem";
// li.classList.add("listItem");
// li.classList.remove("test");
// let opened = li.classList.contains("open");
// li.classList.toggle("open");

// console.log(li.style);
// let styles = getComputedStyle(li);
// console.log(styles.fontFamily);
// let userName = prompt("name");
// ul.insertAdjacentElement(
//   "beforebegin",
//   `<h1 class='asd' style="font-size: 50px">hello from js im ${userName}</h1>`
// );
// ul.insertAdjacentHTML(
//   "afterbegin",
//   `<h1 class='asd' style="font-size: 50px">hello from js im ${userName}</h1>`
// );
// ul.remove();
let firstLi = document.getElementsByClassName("test");

firstLi.remove();

console.log(firstLi);
