let photo = document.querySelectorAll('.photo')
let description = document.querySelectorAll('.active')
let k
console.log("le nombre de photo est :", photo.length)
for (let i = 0; i < photo.length; ++i) {
     photo[i].addEventListener('click',()=>{
             if (i != k) { 
                for (let i = 0; i < photo.length; ++i){
                        photo[i].style.width = '05em'
                        description[i].style.display = 'none' 
                }
             }
        photo[i].style.width = '30em'
        k = i 
        description[i].style.display = 'block'
     })  
}
