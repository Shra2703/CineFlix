# 🎬 CineFlix

**CineFlix** is a modern movie and TV streaming web app — a clone inspired by platforms like **Netflix**, **JioCinema**, and **Disney+ Hotstar**. Built using **React**, **Tailwind CSS**, and **React Query**, CineFlix integrates Firebase authentication and TMDb API to deliver an optimized user experience.

---

## 🚀 Live Demo

> Coming soon... (Optional: Add your deployed link here)

---

## 🧰 Tech Stack

- **React.js** – Frontend framework
- **Tailwind CSS** – Utility-first CSS framework
- **React Query (TanStack Query)** – Data fetching and caching
- **Firebase Authentication** – For user sign-up and login with email/password
- **TMDb API** – To fetch movie/TV data
- **React Router DOM** – Client-side routing

---

## 🔐 Authentication

- Integrated with **Firebase Auth**
- **Sign Up** form includes: Name, Email, and Password
- User’s **initials** (from name) are shown as a circular avatar in the navbar
- **Protected Routes**: Home (Browse) page and others are **restricted to logged-in users only**
- Authentication state is persisted across sessions

---

## 📂 Pages & Features

### 🔒 Sign In / Sign Up Pages(`/`)

- User can register and log in using name, email and password
- Built using Firebase Auth and React hooks
- Basic form validations

### 🏠 Bowse Page (`/browse`)

- **Protected page**, accessible only after login
- Displays movie/TV categories fetched from TMDb:
  - Now Playing
  - Popular Movies
  - Upcoming Movies
  - Top Rated Movies
  - Latest Shows
  - On the Air Shows
  - Top Rated Shows
  - Popular Shows

### 📄 Details Page for movies (`/browse/details-movies/:id`)

- Shows in-depth movie info
- Includes:
  - Title, Poster, Overview, Rating, Release Date
  - Related Recommendations
  - Trailers, Teasers, Featurettes via YouTube

### 📄 Details Page for shows (`/browse/details-shows/:id`)

- Shows in-depth movie info
- Includes:
  - Title, Poster, Overview, Rating, Release Date
  - Related Recommendations
  - Trailers, Teasers, Featurettes via YouTube

### 🎥 Video Page (`browse/details-movies/:id/video/:videoKey`)

- Clean UI for playing selected trailers or teasers

### 🔍 Explore/Search Page (`/explore`)

- Search for movies or shows using TMDb
- **Debounced search** for optimized API requests
- Real-time results as the user types

---

## 🎨 UI Features

- Netflix-style layout and styling
- **Navbar** includes:
  - Logo 
  - Search Icon
  - **User Avatar with Initials** (e.g. "US") from Firebase Auth
- Fully **responsive design**
- Consistent card layouts for movies and shows

---

## ⚙️ Performance Optimizations

- ✅ **Debouncing** on search input
- ✅ **Code Splitting** with `React.lazy` & `Suspense`
- ✅ **React Query Caching** to prevent redundant API calls
- ✅ Environment variables for sensitive API keys

---

## 📁 Folder Structure
cineflix/
├── public/
├── src/
│ ├── components/
│ ├── pages/
│ ├── ui/
│ ├── utils/ (API functions)
│ ├── main.jsx/
│ ├── constanst.js
│ └── App.jsx
├── .env
└── README.md


## 🏁 Getting Started

### 1. Clone the repository
```bash
# Clone the repository
git clone https://github.com/your-username/cineflix.git
cd cineflix

# Install dependencies
npm install

# Add your environment variables
# .env file
REACT_APP_TMDB_API_KEY=your_tmdb_key
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
# ...other Firebase config

# Run the app
npm start
```

## 📷 ScreenShots

