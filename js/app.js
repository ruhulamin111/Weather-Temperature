const API_KEY = `078e9d816bf417e7d22b0f96c05a172c`;
const searchCity = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayOutput(data))
}
const setValue = (id, value) => {
    document.getElementById(id).innerText = value;
}
const displayOutput = data => {
    console.log(data.weather[0].main)
    setValue('city', data.name);
    setValue('temperature', data.main.temp);
    setValue('condition', data.weather[0].main);
}



// const displayTemperature = temperature => {

//     // set weather icon
//     const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
//     const imgIcon = document.getElementById('weather-icon');
//     imgIcon.setAttribute('src', url);
// }
