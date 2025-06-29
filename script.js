const apiKey = "071f43679e4b5b0450eab2975c21b78e"; // Replace with your OpenWeatherMap API key

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("City not found");
    const data = await res.json();

    const weatherHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>${data.weather[0].description}</p>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" />
      <p>Temp: ${data.main.temp}°C</p>
    `;
    document.getElementById("weatherResult").innerHTML = weatherHTML;
  } catch (err) {
    document.getElementById("weatherResult").innerHTML = `<p>${err.message}</p>`;
  }
}