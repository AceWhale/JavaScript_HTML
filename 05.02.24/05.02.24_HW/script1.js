document.addEventListener('DOMContentLoaded', () => {
    window.users = [
        {name: "User", surname: "Experienced"},
        {name: "Admin", surname: "Network"},
        {name: "Moder", surname: "Designer"},
    ]
    updateRegisteredUsers();
})

function updateRegisteredUsers(){
    const user_table = document.getElementById("registered-users");
    if(!user_table) throw "Element #registered-users not found";
    user_table.innerHTML ="";
    let row_name = user_table.insertRow();
    let cell_name = row_name.insertCell();
    cell_name.innerHTML = "<b>Name</b>";
    let cell_surname = row_name.insertCell();
    cell_surname.innerHTML = " | <b>Surname</b>";
    let row_split = user_table.insertRow();
    let split = row_split.insertCell();
    split.innerHTML = "---------------";
    let split2 = row_split.insertCell();
    split2.innerHTML = "| ---------------";
    for(let user of window.users){
        let row_table = user_table.insertRow();
        let user_name = row_table.insertCell();
        let user_surname = row_table.insertCell();
        user_name.innerHTML = `${user.name}`;
        user_surname.innerHTML = ` | ${user.surname}`;
    }
    usersContainer.appendChild(ul);
}
