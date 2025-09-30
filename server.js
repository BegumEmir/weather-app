// server.js
const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Güvenlik için sadece kendi GitHub Pages domaininden gelen istekleri kabul et
app.use(cors({ origin: "https://begumemir.github.io" }));

const PORT = process.env.PORT || 3000;

// /api/weather endpoint'i
app.get("/api/weather", async (req, res) => {
  const city = req.query.city;
  const apiKey = process.env.OPENWEATHER_API_KEY;

  if (!city) {
    return res.status(400).json({ error: "City is required" });
  }
  if (!apiKey) {
    return res.status(500).json({ error: "API key missing" });
  }

  try {
    // API istekleri
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      city
    )}&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(
      city
    )}&appid=${apiKey}`;

    const [currentResponse, forecastResponse] = await Promise.all([
      axios.get(currentWeatherUrl),
      axios.get(forecastUrl),
    ]);

    res.json({
      current: currentResponse.data,
      forecast: forecastResponse.data,
    });
  } catch (error) {
    if (error.response) {
      console.error("API Error:", error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error("Request Error:", error.message);
      res.status(500).json({ error: "Failed to fetch weather data" });
    }
  }
});

// Sunucu başlat
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
