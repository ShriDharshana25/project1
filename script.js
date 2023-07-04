let lon;
let lat;
let temperature = document.querySelector(".temp");
let summary = document.querySelector(".summary");
let loc = document.querySelector(".location");
let icon = document.querySelector(".icon");
const kelvin = 273;
  
window.addEventListener("load", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      lon = position.coords.longitude;
      lat = position.coords.latitude;
  
      // API id
      const api = "17cdb49e73c03e2af5cb89dd2bb51948";
      // API url
     const base =`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&` +
     `lon=${lon}&appid=17cdb49e73c03e2af5cb89dd2bb51948`;
      
      // Calling the API
      fetch(base)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          //temperature in celsius
          temperature.textContent = Math.floor(data.main.temp - kelvin) + "°C";
          //weather description
          summary.textContent = data.weather[0].description;
          //current location
          loc.textContent = data.name + "," + data.sys.country;
          //weather icon
          icon.innerHTML=`<img src="http://openweathermap.org/img/wn/10d@2x.png">`;
        });
    });
  }
});
//date and time
var datetime = new Date();
console.log(datetime);
document.getElementById("time").textContent = datetime;

