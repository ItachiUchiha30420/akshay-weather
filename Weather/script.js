// const APIkey = "cbfa87d7b8b44c0683a120150250909";
// const city = "New Delhi";
// const weather = `http://api.weatherapi.com/v1/current.json?key=${APIkey}&q=${city}`

// async function getWeather() {
//     let response = await fetch(weather);
//     let data = await response.json();
//     console.log(data.location.name, data.location.country, data.current.temp_c, data.current.feelslike_c, data.current.condition.icon, data.current.condition.text);
// }

// getWeather()



const APIkey = "cbfa87d7b8b44c0683a120150250909";
const cityName = document.querySelector(".box input");
const btn = document.querySelector(".weather button");
const Temp = document.querySelector("#temp");
const Humid = document.querySelector("#humid");
const feelslike = document.querySelector("#flike");

let temp_C;
let humidity;
let feelslike_c;



async function weather(city) {
    const URL = `http://api.weatherapi.com/v1/current.json?key=${APIkey}&q=${city}`;
    let response = await fetch(URL);
    let data = await response.json();
    let temp_C = data.current.temp_c;
    let humidity = data.current.humidity;
    let feelslike_c = data.current.feelslike_c;

    Temp.innerText = `Temperature: ${temp_C} C`;
    Humid.innerText = `Humidity: ${humidity}`;
    feelslike.innerText = `Feels Like: ${feelslike_c} C`;
}

btn.addEventListener("click", () => {
    let city = cityName.value;
    weather(city);
    if (city) {
        weather(city)
    }else {
        alert("Please enter a valid city Name!");
    }
})
