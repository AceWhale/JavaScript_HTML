document.addEventListener('DOMContentLoaded', () => {
    window.obj = {
        "name": "User",
        "surname": "Experienced",
    };
    updateCurrentFields();
    const addFieldButton = document.getElementById("add-field-button");
    if(addFieldButton) addFieldButton.onclick = addFieldClick;
    window.users = [
        {name: "User", surname: "Experienced"},
        {name: "Admin", surname: "Network"},
        {name: "Moder", surname: "Designer"},
    ]
    updateRegisteredUsers();
})

function updateRegisteredUsers(){
    const usersContainer = document.getElementById("registered-users");
    if(!usersContainer) throw "Element #registered-users not found";
    usersContainer.innerHTML ="";
    const ul = document.createElement("ul");
    for(let user of window.users){
        let li = document.createElement("li");
        li.innerHTML = `name: <b>${user.name}</b>, surname: ${user.surname}`;
        ul.appendChild(li);
    }
    usersContainer.appendChild(ul);
}

function updateCurrentFields(){
    console.log(window.obj);
    const currentFields = document.getElementById("current-fields");
    if(!currentFields) throw "Element #curcurrent-fields not found";
    currentFields.innerHTML ="";
    for(let key in window.obj){
        currentFields.innerHTML += `${key}: ${window.obj[key]} <button data-key="${key}">X</button> <br/>` ;
    }
    processDeleteButtons();
}

function processDeleteButtons(){
    const buttons = document.querySelectorAll('button[data-key]');
    for(let button of buttons) {
        button.onclick = deleteButtonClick;
    }
}

function deleteButtonClick(e){
    const key = e.target.getAttribute("data-key");
    console.log(key);
    delete window.obj[key]
    updateCurrentFields();
}

function addFieldClick(){
    const newFieldName = document.getElementById("add-field-name");
    if(!newFieldName) throw "Element #add-field-name not found";
    const newFieldValue = document.getElementById("add-field-value");
    if(!newFieldValue) throw "Element #add-field-value not found";
    window.obj[newFieldName.value] = newFieldValue.value;
    updateCurrentFields();
}