let weather = {
    apiKey: "70c5f233ecb6e28d0943855f37879e94",
    fetchWeather: function () {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid=" 
            + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
    }
}


/*
const url = 'https://api.openweathermap.org/data/2.5/';
const key = '70c5f233ecb6e28d0943855f37879e94';

const setQuery = (e) => {
    if(e.keyCode == '13'){
        getResult(searchBar.value);
    }
}
const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    console.log(query)

    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)
}

const displayResult = (result) => {
    console.log(result);
}

const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keypress', setQuery)
*/