# 🌦️ Weather App  

The **Weather App** is a web application that allows users to check the **current weather** and **24-hour forecast** of any city.  
It consists of two main parts:  
- **Frontend (User Interface)** — hosted on GitHub Pages  
- **Backend (Server)** — built with Node.js and Express, deployed on Render  

---

## 🚀 Features  

✅ Search weather by city name  
✅ 24-hour (3-hour interval) weather forecast  
✅ Dynamic weather icons  
✅ Responsive (mobile-friendly) design  
✅ Secure backend integration (API key hidden)  

---

## 🧩 Technologies Used  

### Frontend  
- **HTML5**, **CSS3**, **JavaScript (Vanilla JS)**  
- Fetch API for communicating with the backend  
- Hosted on **GitHub Pages**  

### Backend  
- **Node.js** & **Express.js**  
- **Axios** — to request data from OpenWeather API  
- **Dotenv** — to securely store environment variables  
- **CORS** — to handle secure cross-origin requests  
- Deployed on **Render**  

---

## ⚙️ Installation & Setup  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/begumemir/Weather-App.git
cd Weather-App
```

### 2️⃣ Install Dependencies  
```bash
npm install
```

### 3️⃣ Create a `.env` File  
In the root directory, create a file named `.env` and add your OpenWeather API key:  
```
OPENWEATHER_API_KEY=your_api_key_here
```

### 4️⃣ Start the Server  
```bash
node server.js
```
The backend will start on: [http://localhost:3000](http://localhost:3000)

### 5️⃣ Run the Frontend  
Open `index.html` in your browser or host it via GitHub Pages.

---

## 🌐 Live Demo  

🔹 **Frontend:** [https://begumemir.github.io/weather-app/](https://begumemir.github.io/weather-app/)  
🔹 **Backend:** [https://weather-backend-ufs7.onrender.com](https://weather-backend-ufs7.onrender.com)

---

## 🗂️ Project Structure  
```
Weather-App/
│
├── index.html
├── style.css
├── script.js
│
├── server.js
├── package.json
├── .env (hidden)
│
└── README.md
```

---

## 🛠️ API Usage  

The backend exposes the following endpoint:  
```
GET /api/weather?city={cityName}
```
**Example:**  
[https://weather-backend-ufs7.onrender.com/api/weather?city=paris](https://weather-backend-ufs7.onrender.com/api/weather?city=paris)

**Response:**  
```json
{
  "current": { },
  "forecast": { }
}
```

---

## 💡 Future Improvements  
- 🌍 Detect user’s location automatically  
- ⭐ Save favorite cities  
- 📈 Display daily forecast charts  
- 🌗 Add light/dark mode  

---

## 👩‍💻 Developer  
**Begüm Emir**  
📍 Weather App — Full Stack Mini Project  
🔗 GitHub: [begumemir](https://github.com/begumemir)
