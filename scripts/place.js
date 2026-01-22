const weatherList = document.querySelector(".weather-widget");

  // Kigali coordinates
  const lat = -1.95;
  const lon = 30.06;

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

  async function loadWeather() {
    try {
      const response = await fetch(url);
      const data = await response.json();

      const weather = data.current_weather;

      weatherList.innerHTML = `
        <li> <span class="label">Location:</span> Kigali, Rwanda</li>
        <li> <span class="label">Temperature:</span> ${weather.temperature} °C</li>
        <li> <span class="label">Wind Speed:</span> ${weather.windspeed} km/h</li>
        <li> <span class="label">Wind Direction:</span> ${weather.winddirection}°</li>
      `;
    } catch (error) {
      weatherList.innerHTML = "<li>Unable to load weather data</li>";
      console.error(error);
    }
  }

  loadWeather();