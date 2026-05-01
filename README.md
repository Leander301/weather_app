# 🌤️ Leander Forecast

A full-stack weather forecast web application built with the **MERN stack** that lets users search for real-time weather data for any location around the world.

🔗 **Live Demo:** [leanderforecast.netlify.app](https://leanderforecast.netlify.app/)

---

## 📸 Overview

Leander Forecast provides up-to-date weather information for any city or area entered in the search bar. Users can quickly look up current conditions including temperature, humidity, wind speed, and general weather status.

---

## 🛠️ Tech Stack

### Frontend
- **React.js** — Component-based UI
- **CSS3** — Styling and responsive layout
- **Axios** — HTTP requests to the backend API

### Backend
- **Node.js** — Runtime environment
- **Express.js** — REST API server

### Database
- **MongoDB** — (e.g., for storing search history or user preferences)
- **Mongoose** — ODM for MongoDB

### External API
- **OpenWeatherMap API** *(or similar)* — Provides live weather data

### Deployment
- **Frontend:** [Netlify](https://netlify.com)
- **Backend:** (e.g., Render / Railway / Heroku)

---

## ✨ Features

- 🔍 **Location Search** — Type any city or area name in the search bar to get its forecast
- 🌡️ **Current Weather** — Displays temperature, humidity, wind speed, and weather condition
- 🌍 **Global Coverage** — Works for locations worldwide
- 📱 **Responsive Design** — Optimized for desktop and mobile

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or above)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)
- An API key from [OpenWeatherMap](https://openweathermap.org/api)

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/leander-forecast.git
cd leander-forecast
```

---

### 2. Setup the Backend

```bash
cd server
npm install
```

Create a `.env` file in the `/server` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
WEATHER_API_KEY=your_openweathermap_api_key
```

Start the backend server:

```bash
npm run dev
```

---

### 3. Setup the Frontend

```bash
cd client
npm install
```

Create a `.env` file in the `/client` directory:

```env
REACT_APP_API_URL=http://localhost:5000
```

Start the React app:

```bash
npm start
```

The app will run at `http://localhost:3000`.

---

## 📁 Project Structure

```
leander-forecast/
├── client/                  # React frontend
│   ├── public/
│   └── src/
│       ├── components/      # Reusable UI components
│       ├── pages/           # Page-level components
│       ├── App.js
│       └── index.js
│
├── server/                  # Express backend
│   ├── routes/              # API routes
│   ├── controllers/         # Route handlers
│   ├── models/              # Mongoose schemas
│   └── index.js             # Entry point
│
└── README.md
```

---

## 🔌 API Endpoints

| Method | Endpoint              | Description                        |
|--------|-----------------------|------------------------------------|
| GET    | `/api/weather/:city`  | Fetch weather data for a given city |

---

## 🌐 Deployment

### Frontend (Netlify)
1. Push your `client/` folder to GitHub
2. Connect the repo to [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `build/`
5. Add environment variables in Netlify dashboard

### Backend
Deploy to [Render](https://render.com), [Railway](https://railway.app), or [Heroku](https://heroku.com) and set your environment variables in their respective dashboards.

---

## 📝 Environment Variables Summary

| Variable           | Location  | Description                          |
|--------------------|-----------|--------------------------------------|
| `PORT`             | Server    | Port for the Express server          |
| `MONGO_URI`        | Server    | MongoDB connection string            |
| `WEATHER_API_KEY`  | Server    | Your weather service API key         |
| `REACT_APP_API_URL`| Client    | Base URL for backend API calls       |

---

## 🤝 Contributing

Contributions are welcome! To get started:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👤 Author

**Leander**
- Live App: [leanderforecast.netlify.app](https://leanderforecast.netlify.app/)
- GitHub: [@your-username](https://github.com/your-username)

---

> Built with ☁️ and ❤️ using the MERN stack.
