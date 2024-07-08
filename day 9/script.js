let audios = document.querySelectorAll('.audio')
let box_sounds = document.querySelectorAll('.box_sound')
let previous_sound = 0

for (let i = 0; i < box_sounds.length; i++) {
    box_sounds[i].addEventListener('click', ()=> {
        // audios.length+1 car le dernier box_soundsest à l'indice 5 qui ne respecte plus la condition de la boucle 
      for (let k = 0; k < audios.length+1; k++) {
        audios[i].play()
        // on recupere l'indice du dernier son lu
        previous_sound = k
        audios[previous_sound].pause()
        audios[previous_sound].currentTime = 0
      }
    })   
}