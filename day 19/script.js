let btncolor_option = document.querySelector('.color_option')
let stick_clock = document.querySelectorAll('.stick')
let aig_seconde = document.querySelector('.seconde')
let aig_minute = document.querySelector('.minute')
let aig_heure = document.querySelector('.heure')
let degrees_seconde = 0
let degrees_minute = 0
let degrees_heure = 0
let as_setH = false
let as_setM = false
let as_setS = false
const maintenant = new Date();
const heures = maintenant.getHours()
const minutes = maintenant.getMinutes()
const secondes = maintenant.getSeconds()

const annee = maintenant.getFullYear()
const jour = maintenant.getDate()
const jourSemaine = maintenant.toLocaleString('fr-FR', { weekday: 'long' })
const mois = maintenant.toLocaleString('fr-FR', { month: 'long' })


// setInterval(setTime(), setDate(), 1000);
let reload = setInterval(() => {
    setTime()
    setDate()
}, 1000);

btncolor_option.addEventListener('click', ()=>{
    document.body.classList.toggle('bg')  
    btncolor_option.classList.toggle('active')
    document.querySelector('.date_day').classList.toggle('active')
    document.querySelector('.date').classList.toggle('active')
    document.querySelector('.clock_numerique').classList.toggle('active')
    document.querySelector('.origin').classList.toggle('active')
    for (let i = 0; i < stick_clock.length; i++) {
        stick_clock[i].classList.toggle('active')
        
    }
})

settingSeconde(secondes)
let intervalSeconde = setInterval(() => {
    setTime()
    setDate()
    degrees_seconde = (degrees_seconde + 6); 
    aig_seconde.style.transform = `rotate(${degrees_seconde}deg)`
}, 1000);

settingMinute(minutes)
let intervalMinute = setInterval(()=>{
    // location.reload()
    degrees_minute +=6
    aig_minute.style.transform = `rotate(${degrees_minute}deg)`
},60000)

settingHour(heures)
let intervalHeure = setInterval(()=>{
    aig_minute.style.transform = `rotate(${degrees_heure}deg)`
    degrees_heure +=30
},360000)



function settingHour(heures){
    if (!as_setH) {
        degrees_heure = 30*heures
    aig_heure.style.transform = `rotate(${degrees_heure}deg)`
    }
    as_setH = true
}
function settingSeconde(secondes){
    if (!as_setS) {
        degrees_seconde = 6*secondes
    aig_seconde.style.transform = `rotate(${degrees_seconde}deg)`;
    }
    as_setS = true
}
function settingMinute(minutes){
    if (!as_setM) {
        degrees_minute = 6*minutes
    aig_minute.style.transform = `rotate(${degrees_minute}deg)`;
    }
    as_setM = true
}

function setTime(){
    const maintenant = new Date();
const heures = maintenant.getHours()
const minutes = maintenant.getMinutes()
const secondes = maintenant.getSeconds()
    document.querySelector('.cnH').innerHTML = `${heures}`
    document.querySelector('.cnM').innerHTML = `${minutes}`
    return heures, minutes
    // return minutes
}


function setDate(){
    const maintenant = new Date();
    const annee = maintenant.getFullYear()
    const jour = maintenant.getDate()
    const jourSemaine = maintenant.toLocaleString('fr-FR', { weekday: 'long' })
    const mois = maintenant.toLocaleString('fr-FR', { month: 'long' })
    document.querySelector('.date_day').innerHTML = `${jour}`
    document.getElementById('day').innerHTML =`${jourSemaine}`
    document.getElementById('month').innerHTML = `${mois.substring(0, 3)}`
}

