//! document.getElementbyClassName("")

// let ele = document.getElementsByClassName("test")
// console.log(ele);
// console.log(Array.isArray(ele));
// console.log(typeof (ele));


// ele[0].style.backgroundColor = "yellow";

// let x = [...ele];
// console.log(x, Array.isArray(x));
// console.log(typeof (ele));


// x.map((element) => {
//     console.log(element);
//     element.style.backgroundColor = "teal";

// })

// function demo() {
//     console.log("This is a function");
// }
// demo();
// let y = demo();
// console.log(typeof (y));

//! document.getElementByTagName("")

// let element = document.getElementsByTagName("div");
// console.log(element);

//! document.getElementsByName("") (used in forms for input tag with name attribute)
// let element = document.getElementsByName("username");
// console.log(element);
// [...element].map((ele) => {
//     console.log(ele);
//     ele.style.backgroundColor = "aqua";

// })

//! document.querySelector("# ") for id
// let ele = document.querySelector("#demo")
// console.log(ele);

//! document.querySelector(". ") for class
// let element = document.querySelector(".test");
// console.log(element);

//! document.querySelectorAll(". ")
// let element = document.querySelectorAll(".test");
// [...element].map((ele) => {
//     console.log(ele.innerText);
// })

//! events
//? click event
// let btn = document.getElementById("btn");
// btn.addEventListener("click", () => {
//     console.log("Button clicked!");
//     document.body.style.background = "dodgerblue";

// })

//? double click event
// let btn = document.getElementById("btn");
// btn.addEventListener("dblclick", () => {
//     console.log("Buttton click 2 times");

// })

//? mouseover event
// let btn = document.getElementById("btn");
// btn.addEventListener("mouseover", () => {
//     // alert("Mouse enter");
//     document.body.style.background = "teal";

// })

// //? mouseover event
// let btn1 = document.getElementById("btn");
// btn.addEventListener("mouseleave", () => {
//     // alert("Mouse enter");
//     document.body.style.background = "tomato";

// })

// //? keydown event
// let inp = document.querySelector("#inp");
// inp.addEventListener("keydown", () => {
//     console.log("Key down");
// })


// //? keyup event
// inp.addEventListener("keyup", () => {
//     console.log("key up");
// })

let div1 = document.getElementById("test1");
div1.addEventListener("mouseover", () => {
    document.body.style.backgroundColor = "red";
})

let div2 = document.getElementById("test2");
div2.addEventListener("mouseover", () => {
    document.body.style.backgroundColor = "green";
})

let div3 = document.getElementById("test3");
div3.addEventListener("mouseover", () => {
    document.body.style.backgroundColor = "yellow";
})

let div4 = document.getElementById("test4");
div4.addEventListener("mouseover", () => {
    document.body.style.backgroundColor = "teal";
})

let div5 = document.getElementById("test5");
div5.addEventListener("mouseover", () => {
    document.body.style.backgroundColor = "orange";
})

let div6 = document.getElementById("test6");
div6.addEventListener("mouseover", () => {
    document.body.style.backgroundColor = "blue";
})











