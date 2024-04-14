function getWeather() {
    const apiKey = '1a6f4069b8e01afe679cb055a874fb36'; // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
    const location = document.getElementById('locationInput').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `
          <h3>Weather in ${data.name}</h3>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Description: ${data.weather[0].description}</p>
          <p>Humidity: ${data.main.humidity}%</p>
          <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        document.getElementById('weatherInfo').innerHTML = '<p>Sorry, something went wrong. Please try again.</p>';
      });
  }