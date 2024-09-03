const btn_nextImg = document.querySelector('.next')
const btn_previousImg = document.querySelector('.prev')
const div_bgSlider = document.querySelector('.foreground')
let container = document.querySelector('.container')
let count = 1





btn_nextImg.addEventListener('click', ()=>{
    count++
    if (count <= 9) {
        div_bgSlider.style.backgroundImage = `url('../images/bg${count}.jpg')`;
        container.style.backgroundImage = `url('../images/bg${count}.jpg')`;
    }else{
        count = 1
        div_bgSlider.style.backgroundImage = `url('../images/bg${count}.jpg')`;
        container.style.backgroundImage = `url('../images/bg${count}.jpg')`;
    }
})
btn_previousImg.addEventListener('click', ()=>{
    count--
    console.log(count)

    if (count>=1) {
        div_bgSlider.style.backgroundImage = `url('../images/bg${count}.jpg')`;
        container.style.backgroundImage = `url('../images/bg${count}.jpg')`;
    }else{
        count = 9
        div_bgSlider.style.backgroundImage = `url('../images/bg${count}.jpg')`;
        container.style.backgroundImage = `url('../images/bg${count}.jpg')`;
    }
})