# 🎬 CineFlix

**CineFlix** is a modern movie and TV streaming web app — a clone inspired by platforms like **Netflix**, **JioCinema**, and **Disney+ Hotstar**. Built using **React**, **Tailwind CSS**, and **React Query**, CineFlix integrates Firebase authentication and TMDb API to deliver an optimized user experience.

---

## 🚀 Live Demo

🌐 **Live App:** [https://cineflix-web.netlify.app](https://cineflix-web.netlify.app)

Click the link above to explore CineFlix live — browse movies, watch trailers, and search content from TMDb. 🔍🍿

---

## 🧰 Tech Stack

- **React.js** – Frontend UI framework
- **Tailwind CSS** – Utility-first CSS for styling
- **React Query (TanStack Query)** – API data fetching and caching
- **Redux** – For global state management (e.g., auth state, search results)
- **Firebase Authentication** – Email/password login
- **TMDb API** – Movie & TV show data source
- **React Router DOM** – Client-side routing

---

## 🧠 State Management

CineFlix uses both **Redux** and **React Query**:

- 🔄 **Redux** is used for managing global UI state such as:
  - Auth state (is the user logged in?)
  - Search results
  - Current movie/show details
- ⚡ **React Query** handles remote data fetching and caching from the TMDb API
- 🔥 This combination ensures better **performance**, **state consistency**, and **scalability**

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

## 🏁 Getting Started

### 1. Clone the repository

```bash
# Clone the repository
git clone https://github.com/your-username/cineflix.git
cd cineflix

# Install dependencies
npm install

# Run the app
npm start
```

### 2. Add environments variables

```bash
# Add your environment variables
# .env file
VITE_TMDB_API_KEY=your_tmdb_key
VITE_FIREBASE_API_KEY=your_firebase_api_key
# ...other Firebase config
```

---

## 📊 Project Difficulty Level

> **Level:** 🟨 Medium

This project is ideal for **intermediate frontend developers** who want to practice:

- Firebase Authentication
- API integration with React Query
- Protected Routes and Routing
- Performance optimizations (debouncing, code-splitting)
- Responsive UI design using Tailwind CSS

---

## 🚀 Future Enhancements

- ❤️ Watchlist / Favorites functionality
- 🌍 Multi-language support
- 🌓 Dark mode toggle
- 🔔 Add toast notifications (e.g., login success, errors)

---

## 🤝 Acknowledgements

- [TMDb](https://www.themoviedb.org/) – for providing an amazing free API for movies and TV shows
- [Firebase](https://firebase.google.com/) – for easy and scalable authentication
- [React Query](https://tanstack.com/query/latest) – for powerful data fetching and caching
- [React Router](https://reactrouter.com/) – for client-side routing

---

## 📝 License

This project is licensed under the **MIT License**.  
You are free to use, modify, and distribute this project for personal and commercial purposes.

---

## 👤 Author

**Shraddha Goyal**  
[GitHub Profile](https://github.com/Shra2703)  
Feel free to connect or collaborate!
