function getWeather() {
    const city = document.getElementById("city").value.trim();

    if (city === "") {
        document.getElementById("weatherResult").innerHTML =
            "Please enter a city name";
        return;
    }

    const url = `https://wttr.in/${city}?format=j1`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temp = data.current_condition[0].temp_C;
            const desc = data.current_condition[0].weatherDesc[0].value;
            const humidity = data.current_condition[0].humidity;

            document.getElementById("weatherResult").innerHTML = `
                <p><b>City:</b> ${city}</p>
                <p><b>Temperature:</b> ${temp} °C</p>
                <p><b>Weather:</b> ${desc}</p>
                <p><b>Humidity:</b> ${humidity}%</p>
            `;
        })
        .catch(() => {
            document.getElementById("weatherResult").innerHTML =
                "Error fetching weather data";
        });
}
