// console.log()
const main_content = document.querySelector('.main')
let count = 1
var count1 = 1

remplissage()




function remplissage(){
  for (let i = 0; i < 18; i++) {
    count++
    reuperationFilm(count)
    creationMovie ()
  }

}

function reuperationFilm(count){
  let note
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTRkNGE4MjVmZGEwZmNiNzJlN2UzOWNhZjZhY2ZiOSIsIm5iZiI6MTcyNDk0NjgzNS4zMzUzNTEsInN1YiI6IjY2ZDA5NDRiZGUyZTRmYzZlNTk5MmQ1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BsONvYR1NxjnY5nCSstY8iNkoDgQ_zsJvqA66uIzuR8'
          
        }
    };
      
    fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${count1}`, options)
        .then(response => response.json())
        .then(response =>{
          document.querySelector(`.div_img${count}`).style.backgroundImage = `url(https://image.tmdb.org/t/p/w300/${response.results[count].poster_path})`
          document.querySelector(`.text_movie${count}`).innerHTML = `${response.results[count].title}`;
          document.querySelector(`.movie_overview${count}`).innerHTML = `${response.results[count].overview}`;
          note = `${response.results[count].vote_average}`
          document.querySelector(`.rate${count}`).innerHTML = `${response.results[count].vote_average.toFixed(1)}`;
          if (note < 5) {
            document.querySelector(`.rate${count}`).style.color = 'red'
          }
          if (note >= 5) {
            document.querySelector(`.rate${count}`).style.color = 'orange'
          }

        })
      .catch(err => console.error(err));

}

function creationMovie (){
  let movie = document.createElement('div')
  movie.classList.add('movie')
  movie.classList.add(`movie${count}`)
  /* movie_overview*/
  let movie_overview = document.createElement('div')
  movie_overview.classList.add('movie_overview')
  movie_overview.classList.add(`movie_overview${count}`)
  /*::::::::::::::::::::::::::: */ 
  let div_img = document.createElement('div')
  div_img.classList.add('div_img')
  div_img.classList.add(`div_img${count}`)
  let info_movie = document.createElement('div')
  info_movie.classList.add('info_movie')
  info_movie.classList.add(`info_movie${count}`)
  let text = document.createElement('p')
  text.classList.add('text_movie')
  text.classList.add(`text_movie${count}`)
  let rate = document.createElement('div')
  rate.classList.add('rate')
  rate.classList.add(`rate${count}`)



  /*creation des enfants du main*/
  main_content.appendChild(movie)
  movie.appendChild(div_img)
  movie.appendChild(info_movie)
  info_movie.appendChild(text)
  info_movie.appendChild(rate)
  /* movie_overview*/
  movie.appendChild(movie_overview)
  /*;;;;;;;;;;;*/
}