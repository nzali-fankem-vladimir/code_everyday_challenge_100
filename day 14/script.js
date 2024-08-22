let btn_close = document.querySelector('.two') 
btn_open = document.querySelector('.one')
nav_bar = document.querySelector('.nav')
link = document.querySelectorAll('a')
span = document.querySelectorAll('span')
btn_open.style.display = 'none'


let opacity = 1



btn_close.addEventListener('click', ()=>{
    btn_close.style.display = 'none'
    btn_open.style.display = 'block'
    btn_open.classList.add('moove_open')

    for (let i = 0; i < link.length; i++) {
        link[i].classList.add('rotate')
        
    }
    nav_bar.classList.add('active') 



    let intervalId = setInterval(()=>{
        for (let i = 0; i < link.length; i++) {
            link[i].style.opacity = `${opacity}`
            opacity -= .15
        }
        console.log(opacity)
        if (opacity <= -1) {
            console.log('bien')
            opacity = 1
            clearInterval(intervalId)
        }
    }, 300)

})

btn_open.addEventListener('click', ()=>{
    btn_close.style.display = 'block'
    btn_open.style.display = 'none'
    btn_open.classList.remove('moove_open')

    for (let i = 0; i < link.length; i++) {
        link[i].classList.remove('rotate')
        
    }
    nav_bar.classList.remove('active')  
    
    

    let intervalId1 = setInterval(()=>{
        for (let i = 0; i < link.length; i++) {
            link[i].style.opacity = `${opacity}`
            opacity += .15
        }
        if (opacity >= 2) {
            clearInterval(intervalId1)
            opacity = 1
        }
    }, 300)

})

