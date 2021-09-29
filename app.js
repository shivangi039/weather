// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


const weatherApi = {
    key: "419ba286f695800b1b3b1d1fe44c836f",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"

}

const searchInputBox = document.getElementById("input-box");
// event listener on keypress
searchInputBox.addEventListener('keypress', (event) => {

    if(event.keyCode == 13) {
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
    }

});

// get weather report
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metrics`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}

// show weather report
function showWeatherReport(weather){
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let tempertaure = document.getElementById('temp');
    tempertaure.innerHTML = `${Math.round(weather.main.temp - 273.15)}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min - 273.15)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max - 273.15)}&deg;C (max)`;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

    if(weatherType.textContent == 'Clear'){
        document.body.style.backgroundImage = "url('images/clear.jpg')";

    } else if(weatherType.textContent == 'Clouds'){
        document.body.style.backgroundImage = "url('images/clouds.jpg')";

    } else if(weatherType.textContent == 'Rain'){
        document.body.style.backgroundImage = "url('images/rain.jpg')";

    } else if(weatherType.textContent == 'Storm'){
        document.body.style.backgroundImage = "url('images/storm.jpg')";

    } else if(weatherType.textContent == 'Sunny'){
        document.body.style.backgroundImage = "url('images/sunny.jpg')";

    } else if(weatherType.textContent == 'Haze'){
        document.body.style.backgroundImage = "url('images/haze.jpg')";

    } else if(weatherType.textContent == 'Mist'){
        document.body.style.backgroundImage = "url('images/mist.jpg')";

    } else if(weatherType.textContent == 'Snow'){
        document.body.style.backgroundImage = "url('images/snow.jpg')";
        console.log("Dffd");

    }


} 

// date manage
function dateManage(dateArg) {

    let days = ["Sunday","Monday","Tuseday","Wednesday","Thursday","Friday","Saturday"];

    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}