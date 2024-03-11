document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("text-input-1").
        addEventListener('keydown', onKeyDown);
    document.getElementById("text-input-1").
        addEventListener('keypress', onKeyPress);
    document.getElementById("text-input-1").
        addEventListener('change', onChange);
    document.querySelector('#open-modal-button').addEventListener('click', () => {
        document.querySelector('.overlay').style.display = 'flex'
    });
    document.querySelector('#close-modal-button').addEventListener('click', () => {
        document.querySelector('.overlay').style.display = 'none'
    });
    document.getElementById("change-light-button").
        addEventListener('click', ClickLight)
})

function onKeyDown(e) {
    console.log(e);
    if (!((e.keyCode >= 65 && e.keyCode <= 90) ||
        (e.keyCode >= 97 && e.keyCode <= 122) ||
        e.keyCode == 8 ||
        e.keyCode == 32 ||
        e.keyCode == 37 ||
        e.keyCode == 39 ||
        e.keyCode == 46)) {
        e.preventDefault();
    }
}
function onKeyPress(e) {
    console.log(e);
}
function onChange(e) {
    console.log(e);
}

function ClickLight(e){
    var green = document.getElementById('light-green');
    var yellow = document.getElementById('light-yellow');
    var red = document.getElementById('light-red');
    var button = document.getElementById("change-light-button");
    if(red.classList.contains('light-red'))
    {
        red.classList.remove('light-red');
        yellow.classList.add('light-yellow');
        button.disabled = true;
        setTimeout(function() {
            button.disabled = false;
            yellow.classList.remove('light-yellow');
            green.classList.add('light-green');
        }, 1000);
    }
    else if(green.classList.contains('light-green')) {
        green.classList.remove('light-green');
        yellow.classList.add('light-yellow');
        button.disabled = true;
        setTimeout(function() {
            button.disabled = false;
            yellow.classList.remove('light-yellow');
            red.classList.add('light-red');
        }, 1000);
    }
    else{
        green.classList.add('light-green');
    }
}