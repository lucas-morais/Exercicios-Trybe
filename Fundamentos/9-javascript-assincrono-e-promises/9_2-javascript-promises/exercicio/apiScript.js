const API_URL = 'https://icanhazdadjoke.com/';

function insertJoke(joke) {
  const container = document.getElementById('jokeContainer');
  container.innerHTML = joke.joke;
}

const fetchJoke = () => {
  const myObject = {
    method: 'GET', 
    headers: {'Accept': 'application/json'}
  };
  fetch(API_URL, myObject)
    .then(response => response.json())
    //.then(data => console.log(data))
    .then((joke) => insertJoke(joke));
};

window.onload = () => fetchJoke();