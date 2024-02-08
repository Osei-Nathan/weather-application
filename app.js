function getWeather() {
    const apiKey = '76df576133cceb5ac906f4780d564fe4'; // Replace with your OpenWeatherMap API key
    const cityInput = document.getElementById('cityInput').value;
    const weatherInfo = document.getElementById('weatherInfo');

    // Check if the city input is empty
    if (!cityInput) {
        alert('Please enter a city name.');
        return;
    }

    // Fetch weather data from OpenWeatherMap API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            // Display weather information
            const weatherDescription = data.weather[0].description;
            const temperature = data.main.temp;

            weatherInfo.innerHTML = `
                <p>Weather in ${cityInput}: ${weatherDescription}</p>
                <p>Temperature: ${temperature} &#8451;</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherInfo.innerHTML = 'Error fetching weather data. Please try again.';
        });
}
