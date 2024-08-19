
let box_question = document.querySelectorAll('.box_question')
let arrow_down = document.querySelectorAll('.arrow_down')
let btn_close = document.querySelectorAll('.close')


arrow_down.forEach((arrow, idx) => {
    arrow.addEventListener('click', () => {
        box_question[idx].classList.add('bg');
    });
});

btn_close.forEach((arrow, idx) => {
    arrow.addEventListener('click', () => {
        box_question[idx].classList.remove('bg');
    });
});






