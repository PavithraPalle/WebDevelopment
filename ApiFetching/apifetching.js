function fetchUsers() {
    let x = fetch("https://jsonplaceholder.typicode.com/users");

    x
        .then((response) => {
            // console.log(response);
            // console.log(response.json());
            return response.json().then(data => {
                // console.log(data);
                let store = document.getElementById("store");
                data.map((user) => {
                    store.innerHTML += `
                    <tr>
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>${user.company.name}</td>
                    </tr>
                    `
                })
            })
        })
        .catch(err => console.log(err))

}
fetchUsers();


// function fetchUser() {
//     let y = fetch("https://jsonplaceholder.typicode.com/users");
//     console.log(y);
//     y.then((data) => {
//         return data.json();
//     })

// }
// fetchUser();