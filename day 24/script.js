let texts1 = document.querySelectorAll('.placeholder_secondSide .p')
let texts2 = document.querySelectorAll('.user_profil .p1')
let img = document.querySelector('.img')



setTimeout(()=>{
    document.querySelector('.placeholder_img').style.backgroundImage = 'url(../images/bg2.jpg)'
    document.querySelector('.placeholder_img').style.backgroundSize = 'cover'
    document.querySelector('.placeholder_img').style.backgroundColor = 'white'
    texts1.forEach(text => {
        text.style.background = 'none'
        text.innerHTML = 'Lorem ipsum dolor sit amet consectetur'
    });
    texts2.forEach((text2) => {
        text2.style.background = 'none'
    });
    img.style.backgroundImage = 'url(../images/bg2.jpg)'
    img.style.backgroundPosition = 'center'
    texts1[0].innerHTML = 'Lorem ipsum dolor sit amet'
    texts2[0].innerHTML = 'john doe'
    texts2[1].innerHTML = 'oct  08 2020'
}, 6000)

