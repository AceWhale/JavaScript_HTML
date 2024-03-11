document.addEventListener('DOMContentLoaded', () => {
    window.obj = {
        "name": "User",
        "surname": "Experienced",
    };
    updateCurrentFields();
    const addFieldButton = document.getElementById("add-field-button");
    if(addFieldButton) addFieldButton.onclick = addFieldClick;
})

function updateCurrentFields(){
    console.log(window.obj);
    const currentFields = document.getElementById("current-fields");
    if(!currentFields) throw "Element #curcurrent-fields not found";
    currentFields.innerHTML ="";
    for(let key in window.obj){
        currentFields.innerHTML += `${key}: ${window.obj[key]}<br/>` ;
    }
}

function addFieldClick(){
    const newFieldName = document.getElementById("add-field-name");
    if(!newFieldName) throw "Element #add-field-name not found";
    const newFieldValue = document.getElementById("add-field-value");
    if(!newFieldValue) throw "Element #add-field-value not found";
    const userName = newFieldName.value;
    const userValue = newFieldValue.value;
    if (!userName) {
        alert("Введите name");
        return;
    }
    if (!userValue) {
        alert("Введите value");
        return;
    }
    for(let key in window.obj){
        if(userName == `${key}`)
        {
            alert("В объекте есть поле " + `${key}` + ", со значеием: " + `${window.obj[key]}`);
            return;
        }
        if(userValue == `${window.obj[key]}`){
            alert("В объекте есть поле с таким значением " + `${window.obj[key]}`+": "+ `${key}`);
            return;
        }
    }
    window.obj[newFieldName.value] = newFieldValue.value;
    updateCurrentFields();
}