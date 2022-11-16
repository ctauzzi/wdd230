const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5412347&appid=f22dc17f31b4586949290e1548723b0c";
const getWeather = async () => {
    const response = await fetch(apiURL);
    const jsObject = await response.json();
    console.log(jsObject);
    let temperature = document.querySelector('#current-temp').textContent = ((jsObject.main.temp - 273.15) * 1.8 + 32).toFixed(2);
    let windSpeed = document.querySelector('#current-speed').textContent = (jsObject.wind.speed).toFixed(2);
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    //document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
    if((temperature <= 50) && (windSpeed >= 3)){
    const chill = Math.round((35.74 + (0.6215 * temperature))-(35.75 * Math.pow(windSpeed,0.16)) + (0.4275*temperature*Math.pow(windSpeed,0.16)));
    document.querySelector("#windChill").innerHTML = chill + "&#8457;";
}

  };
getWeather();