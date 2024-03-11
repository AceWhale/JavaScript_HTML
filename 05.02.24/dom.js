document.addEventListener('DOMContentLoaded', function() {
    const decrementButton = document.getElementById("decrement-button");
    const incrementButton = document.getElementById("increment-button");
    if (decrementButton) decrementButton.addEventListener('click', decrementButtonClick); 
    if (incrementButton) incrementButton.addEventListener('click', incrementButtonClick);
    const calcValue = document.getElementById("calc-value")
    if(calcValue){
        const value = calcValue.innerText;
        window.calcValue = Number(value);
    }


    const decrementButton2 = document.getElementById("decrement-button2");
    const incrementButton2 = document.getElementById("increment-button2");
    if (decrementButton2) decrementButton2.addEventListener('click', decrementButtonClick2); 
    if (incrementButton2) incrementButton2.addEventListener('click', incrementButtonClick2);
    const calcValue2 = document.getElementById("calc-value2")
    if(calcValue2){
        window.calc2 = {
            "element": calcValue2,
            "value": Number(calcValue2.innerText)
        };
    }
});

function decrementButtonClick2(){
    window.calc2.element.innerText = (window.calc2.value -= 1);
}

function incrementButtonClick2(){
    window.calc2["element"].innerText = (window.calc2["value"] += 1);
}

function decrementButtonClick(){
    window.calcValue -=1;
    const calcValue = document.getElementById("calc-value");
    calcValue.innerText = window.calcValue;
}

function incrementButtonClick(){
    window.calcValue += 1;
    const calcValue = document.getElementById("calc-value");
    calcValue.innerText = window.calcValue;
}

function helloclick() {
    // Находим элемент <input id="user-name".....
    const userInput = document.getElementById("user-name");
    // Проверяем нашли ли элемент
    if( ! userInput ) { // bool-представление: каждый объект может 
        // быть условием, false - "", 0, undefined, null; другое - true 
        throw "Element 'user-name' not found"
    }
    const userName = userInput.value;
    if ( ! userName ) {
        alert("Введите имя");
        return;
    }
    // Ищем блок для вывода <p id="out-block"></p>
    const outBlock = document.querySelector("#out-block"); // Исполнитель css селектор  
    if (!outBlock)
        throw "Element '#out-look' not found";
    // outBlock.innerText = "Hello " + userName + userSurname;

    outBlock.innerHTML = `Hello, <b>${userName}</b>`;
}