const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 3000;

app.use(cors());

// API endpoint: /api/weather
app.get("/api/weather", async (req, res) => {
  const city = req.query.city;
  console.log("İstekte gelen city:", city); // şehir geliyor mu?
  const apiKey = process.env.OPENWEATHER_API_KEY;
  console.log("Kullanılan API KEY:", apiKey ? "Var" : "YOK");

  if (!city) {
    return res.status(400).json({ error: "City is required" });
  }

  try {
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    console.log("Current Weather URL:", currentWeatherUrl);

    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
    console.log("Forecast URL:", forecastUrl);

    const currentResponse = await axios.get(currentWeatherUrl);
    const forecastResponse = await axios.get(forecastUrl);


    res.json({
      current: currentResponse.data,
      forecast: forecastResponse.data,
    });
  } catch (error) {
    if (error.response) {
        console.error("HATA STATUS:", error.response.status);
        console.error("HATA DATA:", error.response.data);
    } else {
        console.error("HATA MESAJI:", error.message);
    }
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

console.log("API KEY:", process.env.OPENWEATHER_API_KEY);
