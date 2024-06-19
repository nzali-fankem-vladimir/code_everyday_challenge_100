let btn_menu = document.getElementById('burger_menu')
let menu_navigation = document.querySelector('nav')
let btn_arrow = document.getElementById('arrow_menu')
let btn_div_menu = document.querySelector('.div_menu')
let papierPain_div_main = document.querySelector('.div_main')




btn_menu.addEventListener('click', () =>{
    btn_div_menu.classList.add('transform')
    menu_navigation.classList.add ('active')
    papierPain_div_main.classList.add('transform1')

})

btn_arrow.addEventListener('click', () =>{
    btn_div_menu.classList.remove('transform')
    menu_navigation.classList.remove ('active')
    papierPain_div_main.classList.remove('transform1')


})


