const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const apiKey = "805f0a66a7443462fe4bd540c5247696";

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather_icon');
const bgImage = document.querySelector('.Weather_card');

async function checkweather(city)
{
    const res=await fetch(apiUrl+city+"&appid="+apiKey);
    const d =await res.json();
    console.log(d);
    document.querySelector('.temp').innerHTML=Math.round(d.main.temp)+"°C";
    document.querySelector('.city').innerHTML=d.name;
    document.querySelector('.humidity').innerHTML=(d.main.humidity)+"%";
    document.querySelector('.wind').innerHTML=d.wind.speed+"Km/h";

    var icon=d.weather[0].main;
    // document.getElementById("W_name").innerHTML="icon";

    if(icon=='Haze'){
        weatherIcon.src="/pics/haze.png";
    
    }

    else if(icon=='Clouds'){
        weatherIcon.src="/pics/clouds.png"
    }
    else if(icon=='Rain'){
        weatherIcon.src="/pics/rain.png"
    
    }
    else if(icon=='Clear'){
        weatherIcon.src="/pics/clear.png"
    }
    else if(icon=='Drizzle'){
        weatherIcon.src="/pics/drizzle.png"
    }
    else if(icon=='Mist'){
        weatherIcon.src="/pics/mist.png"
    }
    else {
        weatherIcon.src="/pics/snow.png"
    }


}



function fun(){
    var city = document.querySelector('.search input').value;
    checkweather(city);
}






























// const input = document.getElementById("city");
// const apiKey = "805f0a66a7443462fe4bd540c5247696";

// input.addEventListener('keydown' , e => {
//     if(e.key === 'Enter') {
//         getWeather();
//     }
// })

// function getWeather() {
//     const city = input.value;

//     fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
//     .then(response => response.json())
//     .then(data => {
//         if(data.cod === 200) {
//             const weather = String(data.weather[0].main).toLowerCase();

//             document.querySelector(".empty").style.display = 'none';
//             document.getElementById("weatherInfo").style.display = "block";

//             document.getElementById("weatherwrap").style.backgroundImage = `url('./pics/weather_${weather}-${Math.floor(Math.random() * 3)+1}.jpg')`;

//             const img = document.querySelector('.weather_icon');

//             const temp = document.querySelector('.temp');
//             temp.innerHTML = Math.floor(data.main.temp) + "<span class='unit'>°C</span>"

//             const humidity = document.querySelector('.humidity');
//             humidity.innerHTML = Math.floor(data.main.humidity) + "%";

//             const wind = document.querySelector('wind');
//             wind.innerHTML = Math.floor(data.wind.speed) + "km/h";

//             const description = document.querySelector('.description');
//             description.innerHTML = data.weather[0].description;
//         }
//         else
//         {
//             document.querySelector('.empty').style.display = 'block';
//             document.querySelector('empty').innerHTML=`Oops Something Went Wrong...`;
//             document.getElementById('weatherInfo').style.display = "none";
//         }
//     });
// }
