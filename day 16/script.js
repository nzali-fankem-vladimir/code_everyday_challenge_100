const glasses_fr = document.querySelectorAll('.first_rg  div')
let glasses_sr = document.querySelectorAll('.second_rg  div')
let great_container = document.querySelector('.great_container')
let span_affichage = document.querySelector('.affichage')
let i = 0

glasses_fr.forEach((glasse, idx) =>{
    glasse.addEventListener('click', ()=>{
        remplir(idx)
        if (idx <= 7 && !(glasses_fr[idx].classList.contains('active'))) {
            parcoursIncrement(idx)
        }else if(glasses_fr[idx].classList.contains('active')){
            // glasses_fr[idx].classList.remove('active')
            parcoursDecrement(idx)
        }
    })
}) 


function parcoursIncrement(index){
    for (let i = index; i >= 0; i--) {
        glasses_fr[i].classList.add('active')
    }
}
function parcoursDecrement(index){
    for (let i = index+1; i <=7; i++) {
        glasses_fr[i].classList.remove('active')
    }
}

function remplir(index){
    let idx_conversion = index + 1
    great_container.style.height = `${(idx_conversion*12.5)}%`
    span_affichage.innerHTML = `${(idx_conversion*12.5)}%`
}