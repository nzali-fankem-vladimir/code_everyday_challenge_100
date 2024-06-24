let count_value = document.getElementById('count_value')
let div_image = document.querySelector('.div_image')


let val_compteur = 1;
let val_opacity  = 100
    const interval = setInterval(() => {
        if (val_compteur <= 100 && val_opacity != 0) {
            count_value.innerHTML = `${val_compteur}` + '%';
            div_image.style.opacity = `${val_compteur}` / 100
            count_value.style.opacity = `${val_opacity}` / 100

            val_compteur++;
            val_opacity--
        } else {
            clearInterval(interval);
        }
    }, 25);
    