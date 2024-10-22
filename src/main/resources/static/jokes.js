// Fetch a random joke and display it
function fetchJokeOfTheDay() {
    fetch('http://localhost:8080/jokes')
        .then(response => response.json())
        .then(jokes => {
            const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
            document.getElementById('random-joke').innerText = randomJoke.content;
        })
        .catch(error => console.error('Error fetching joke of the day:', error));
}

// Fetch all jokes and display them in the list
function fetchAllJokes() {
    fetch('http://localhost:8080/jokes')
        .then(response => response.json())
        .then(jokes => {
            const jokesContainer = document.getElementById('jokes-container');
            jokesContainer.innerHTML = '';
            jokes.forEach(joke => {
                const jokeElement = document.createElement('li');
                jokeElement.innerText = `${joke.content} - by ${joke.author}`;
                jokesContainer.appendChild(jokeElement);
            });
        })
        .catch(error => console.error('Error fetching all jokes:', error));
}

// Add a new joke to the backend
function addJoke(event) {
    event.preventDefault();
    const jokeContent = document.getElementById('joke-content').value;
    const jokeAuthor = document.getElementById('joke-author').value;

    const jokeData = {
        content: jokeContent,
        author: jokeAuthor
    };

    fetch('http://localhost:8080/jokes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jokeData)
    })
        .then(response => response.json())
        .then(() => {
            fetchAllJokes();
            document.getElementById('add-joke-form').reset();
        })
        .catch(error => console.error('Error adding joke:', error));
}

// Search for jokes based on a keyword
function searchJokes() {
    const keyword = document.getElementById('search-bar').value;
    fetch(`http://localhost:8080/jokes/search?keyword=${keyword}`)
        .then(response => response.json())
        .then(jokes => {
            const jokesContainer = document.getElementById('jokes-container');
            jokesContainer.innerHTML = '';
            jokes.forEach(joke => {
                const jokeElement = document.createElement('li');
                jokeElement.innerText = `${joke.content} - by ${joke.author}`;
                jokesContainer.appendChild(jokeElement);
            });
        })
        .catch(error => console.error('Error searching jokes:', error));
}

// Initialize the app by fetching jokes
document.addEventListener('DOMContentLoaded', () => {
    fetchJokeOfTheDay();
    fetchAllJokes();
});
