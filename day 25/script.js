const nav_bar = document.querySelector('nav')
const covering_hero = document.querySelector('.covering_hero')
const triggerPoint = document.querySelector('.covering_hero h1')
let trigger = triggerPoint.getBoundingClientRect().top




window.addEventListener('scroll', ()=>{
    let nav_bottom = nav_bar.getBoundingClientRect().bottom
    nav_bottom +=  window.scrollY
    console.log(nav_bottom)
    if(nav_bottom >= trigger){
        nav_bar.classList.add('active')
    }else if(nav_bottom < trigger){
        nav_bar.classList.remove('active')
    }
})