const side_ps_5 = document.querySelector('.div_ps5')
const side_xbox = document.querySelector('.div_xbox')



side_ps_5.addEventListener('click', ()=> {
    side_ps_5.style.width = '80%'
    side_ps_5.style.transition = '.6s'
    side_xbox.style.width = '20%'
    side_xbox.style.transition = '.6s'
})

side_xbox.addEventListener('click', ()=> {
    side_ps_5.style.width = '20%'
    side_ps_5.style.transition = '.6s'
    side_xbox.style.width = '80%'
    side_xbox.style.transition = '.6s'
})




