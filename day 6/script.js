const boxs = document.querySelectorAll('.box')
let j = [1, 2]
let k 

window.addEventListener('scroll', ()=> {

    boxs.forEach((box, idx)=> {
        const rect = box.getBoundingClientRect();
        const windowHeight = window.innerHeight - 10;
        if (rect.bottom <= windowHeight) {
            k = idx % boxs.length
            box.classList.add('animate');
        } else {
            box.classList.remove('animate');
        }

    });

    
})
