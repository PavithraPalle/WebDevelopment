//! document.getElementById(" ")

let element = document.getElementById("demo");
element.innerText = "DOM";
console.log(element);

let div = document.getElementById("test");
// div.innerText = "<h1>Header</h1>";
div.innerHTML = "<h1>Header</h1>"
console.log(div);

//! document.getElementByClassName("")

let h2 = document.getElementsByClassName("h2");
h2.innerText = "This a para";
h2.innerHTML = "<p>This is a second para</p>"
console.log(h2);