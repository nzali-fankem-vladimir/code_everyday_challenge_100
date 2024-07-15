const btn_joke = document.querySelector('.btn')
const div_joke = document.querySelector('.div_joke')

btn_joke.addEventListener('click', generateJoke)

generateJoke()


function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    fetch('https://icanhazdadjoke.com/', config)
    .then(res => res.json())
    .then(data => {
        div_joke.innerHTML = data.joke
    })
}