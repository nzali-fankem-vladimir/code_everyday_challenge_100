let input = document.querySelector('.input')

let display_one = document.querySelector('.one')
let display_two = document.querySelector('.two')
let display_three = document.querySelector('.three')
let box_display = document.querySelectorAll('.display')


document.addEventListener("keydown", function(event) {
    input.style.display = 'none'
    box_display.forEach((box) => {
        box.style.display = 'flex';
    });    

    let keyCode = event.keyCode
    let key = event.key
    let code = event.code
    console.log("Touche pressée : " + keyCode);

    display_two.innerHTML = keyCode 
    display_one.innerHTML = key
    display_three.innerHTML = code
    
});


