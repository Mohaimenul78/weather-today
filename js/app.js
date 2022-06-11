
const API_KEY = "c5fc4af668117252d8c178bee5cc061b";


getWeatherData = (city) => {
    const url = "https://api.openweathermap.org/data/2.5/weather";
    const full_url = `${url}?q=${city}&appid=${API_KEY}&units=metric`
  
    const weatherPromise = fetch(full_url);
    return weatherPromise.then((response)=>{
       
        return response.json()
    })
}


searchCity = () => {    
    const city = document.getElementById('city-input').value;
    
    getWeatherData(city).then((response)=>{
        
        return showWeatherData(response)
    }).catch((error)=>{
        console.log(error)
    })
}

showWeatherData = (weatherData) => {
    (weatherData.name === undefined) ?  document.getElementById('city-name').innerHTML= '<span style="color: red">please select the city' : 
    document.getElementById('city-name').innerText= weatherData.name;
    document.getElementById('weather-type').innerHTML= `Weather Type : <span>${weatherData.weather[0].main} </span>` 
    document.getElementById('temp').innerHTML= `Temperature: <span style="color: aqua" > ${weatherData.main.temp.toFixed(1)}</span>  °C`
    
    
    document.getElementById('feels').innerHTML= `Feels Like <span>${weatherData.main.feels_like.toFixed(0)} </span>°C` 
    
    document.getElementById('min-temp').innerHTML=`Min <span>${weatherData.main.temp_min.toFixed(0)} </span>°C` 
    document.getElementById('max-temp').innerHTML=`Max <span>${weatherData.main.temp_max.toFixed(0)} </span>°C` 
    document.getElementById('humidity').innerHTML=`Humidity<br/><span>${weatherData.main.humidity} </span>%` 
    
    document.getElementById('pressure').innerHTML=`Pressur<br/><span>${(weatherData.main?.pressure*0.75006).toFixed(0)} </span>mm` 
    document.getElementById('wind').innerHTML=`Wind speed <span>${weatherData.wind?.speed.toFixed(0)} </span>km/h` 
    
    document.getElementById('clouds').innerHTML=`Clouds <span>${weatherData.clouds.all} </span>%` 
    
    document.getElementById('icon').innerHTML=`<img src="https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png">`    
}




