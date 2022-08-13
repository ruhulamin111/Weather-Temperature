// api key 
const API_KEY = `078e9d816bf417e7d22b0f96c05a172c`;

// search input get 
const searchCity = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`

    // api load 
    fetch(url)
        .then(res => res.json())
        .then(data => displayOutput(data))
}

// common funtion 
const setValue = (id, value) => {
    document.getElementById(id).innerText = value;
}

// output data 
const displayOutput = data => {

    // set details weather 
    setValue('city', data.name);
    setValue('temperature', data.main.temp);
    setValue('condition', data.weather[0].main);

    // set dynamic icon 
    const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const icon = document.getElementById('weather-icon');
    icon.setAttribute('src', url);
};


