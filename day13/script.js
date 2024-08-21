let zone_text = document.querySelector('#zone_text')
let div_choices = document.querySelector('.choices')
let final_value = ''
let new_choice = ''
let count = 0
let finish = false
zone_text.focus()


new_choice = document.createElement('span')
zone_text.addEventListener('keypress', (event)=>{
    if (event.key !== 'Enter') {
        if (event.key === ',') {
            createElement ()
            count++
        }else {
            div_choices.appendChild(new_choice)
            new_choice.innerText += event.key
        }
    }else{

        let min = 0
        let max = count + 1
        let timer_min = 0 
        let timer_max = 10
        random_choice_blue ()

        if (finish === false) {
            
            let intervalId = setInterval(() => {
                let randomNumber = Math.floor(Math.random() *(max-min)+min);
                let nthChild = div_choices.children[(randomNumber)]
                nthChild.style.backgroundColor = 'blue';
                let intervalId1 = setInterval(() => {
                    let previous_nthChild = nthChild
                    previous_nthChild.style.backgroundColor = 'orange';
                    if (timer_min >= timer_max) {
                        clearInterval(intervalId)
                        clearInterval(intervalId1)
                        finish = true
                    }
                },600);
                timer_min ++
                
            }, 350);
            if (timer_min >= timer_max) {
                clearInterval(intervalId)
                finish = true
            }
        }else{
            finish = false
            console.log(count)
            console.log('bien')
        }
        
    }
        
})

function random_choice_blue () {
    for (let i = 0; i < div_choices.children.length; i++) {
        div_choices.children[i].style.backgroundColor = 'orange'; 
    }
    let min1 = 0
    let max1 = count + 1
    let random = Math.floor(Math.random() *(max1-min1)+min1);
    let nthChild_output = div_choices.children[(random)]
    nthChild_output.style.backgroundColor = 'blue';
}



function createElement () {
    div_choices.appendChild(new_choice)
    new_choice = document.createElement('span')

}






