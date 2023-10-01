
const API_KEY = `757838456aa87076609cdf2151e41821`
//const API="https://api.openweathermap.org/data/2.5/weather?q={city_Name}&appid={API key}&units=metric";



const form=document.querySelector("form")
const search = document.querySelector("#search")
const weather= document.querySelector("#weather")



const getWeather= async(city)=>{
    weather.innerHTML=`<h2>Loading......  <h2>`
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const res= await fetch(url);
   // console.log(res);
    const data = await res.json()
   // console.log(data);
    return showWeather(data);
}
const showWeather=(data)=>{
    if(data.cod=="404"){
        weather.innerHTML=`<h2> City not found<h2>`
    }
   
    weather.innerHTML= `
    <div>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
</div>
<div>
    <h2>${data.main.temp}℃</h2>
    <h4>${data.weather[0].main}</h4>
   
</div>
    
    `
}


form.addEventListener("submit",function(event){
   getWeather(search.value);
    event.preventDefault();
})