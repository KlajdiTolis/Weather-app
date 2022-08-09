import React, { useState } from "react";
const api = {
  key: "8c56029e22fb9fa920a6d7bd5cccc211",
  base: "https://api.openweathermap.org/data/2.5/",
}; 
function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
        });
    }
  };
 
console.log(weather.weather)
  const dateOf = (a) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  
    console.log(weather.weather.main)
    let day = days[a.getDay()];
    let date = a.getDate();
    let month = months[a.getMonth()];
    let year = a.getFullYear();
   
    return `${day} ${date} ${month} ${year}`;
  };
 
  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 17
            ? "app warm"
            : "app"
          : "app"
      }
    >
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dateOf(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°c</div>
              <div className="weather" >{weather.weather[0].main}</div>
          <div> {(weather.weather[0].main === "Rain") ?  <img className="Rain" src="https://c.tenor.com/9i_gbz08VCsAAAAM/pouring-rain-raoin-cloud.gif"/> : "" }</div>
          <div> {(weather.weather[0].main === "Clouds") ?  <img className="Clouds" src="https://c.tenor.com/0iRjzpnsnrcAAAAC/clouds-rain.gif"/> : "" }</div>
          <div> {(weather.weather[0].main === "Clear") ?  <img className="Clear" src="https://cdn.dribbble.com/users/2120934/screenshots/6193524/19_mostlysunny.gif"/> : "" }</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}
// (<p key={weathers}>  <img src={size} /> </p>
export default App;
