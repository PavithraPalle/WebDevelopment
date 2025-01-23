// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise succesfully executed");
//     }, 3000)
// })

// async function demo() {
//     console.log("Start");
//     let x = await p;
//     console.log(x);
//     console.log("End");
// }
// demo();

async function fetchUsers() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
}
fetchUsers();