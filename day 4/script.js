let input = document.getElementById('input')
let search_btn = document.getElementById('search_btn')
let div_search = document.querySelector('.div_search')
let clicked = true



search_btn.addEventListener('click', (event)=> {
    
    if (clicked) {
        div_search.classList.add('search_translate')
        input.style.width = '150px'
        clicked = false 
    }else{
        input.style.width = '0px'
         div_search.classList.remove('search_translate')
         clicked = true 
        input.style.width = '0'
    }
})
