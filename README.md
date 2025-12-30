# 🎨 Full-Stack Portfolio Application

A modern, responsive, and eye-catching portfolio website built with React, Node.js, Express, and MongoDB.

## 🚀 Quick Start

### Option 1: Run Both Frontend & Backend Together (Recommended)

```bash
# From the root directory
npm run dev
```

### Option 2: Using the Start Script

```bash
# From the root directory
./start.sh
```

### Option 3: Run Individually

**Backend:**
```bash
cd backend
npm start          # Production mode
npm run dev        # Development mode with nodemon
```

**Frontend:**
```bash
cd frontend
npm run dev        # Development mode
npm run build      # Build for production
npm run preview    # Preview production build
```

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (local or Atlas connection)

## 🔧 Installation

### First Time Setup

```bash
# Install all dependencies
npm run install:all
```

This command will:
- Install root dependencies (concurrently)
- Install backend dependencies
- Install frontend dependencies

## 📁 Project Structure

```
portfolio/
├── backend/
│   ├── controllers/       # Route controllers
│   ├── middleware/        # Express middleware
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   ├── server.js         # Server entry point
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── pages/        # Page components
│   │   ├── utils/        # Utilities & helpers
│   │   ├── App.jsx       # Main app component
│   │   ├── index.css     # Global styles
│   │   └── main.jsx      # Entry point
│   ├── public/           # Static assets
│   ├── vite.config.js    # Vite configuration
│   └── package.json
├── package.json          # Root scripts
├── start.sh             # Start script
└── README.md            # This file
```

## 🎯 Available Commands

### Root Level
```bash
npm run dev              # Run both backend and frontend
npm run dev:backend      # Run backend only
npm run dev:frontend     # Run frontend only
npm run dev:watch        # Run both with watch mode
npm run build            # Build both frontend and backend
npm run install:all      # Install all dependencies
npm start                # Alias for npm run dev
```

### Backend (`cd backend`)
```bash
npm start               # Run server
npm run dev             # Run with nodemon (auto-reload)
```

### Frontend (`cd frontend`)
```bash
npm run dev             # Start dev server (Vite)
npm run build           # Build for production
npm run preview         # Preview production build
npm run lint            # Lint code with ESLint
```

## 🌐 API Endpoints

### Base URL: `http://localhost:5000/api`

- **Auth**: `/auth` (login, register)
- **Projects**: `/projects` (CRUD operations)
- **Skills**: `/skills` (get skills, manage skills)
- **About**: `/about` (get/update profile)
- **Messages**: `/messages` (contact form submissions)

## 🎨 Frontend Features

- **Modern UI**: Glass morphism effects and gradient backgrounds
- **Animations**: Smooth Framer Motion animations
- **Responsive**: Mobile-first design with Tailwind CSS
- **Dynamic Content**: Fetches data from backend API
- **Authentication**: Login/Register with JWT
- **Admin Dashboard**: Manage portfolio content

## 🔐 Environment Variables

### Backend `.env`
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_secret_key
```

### Frontend `.env` (optional)
```
VITE_BACKEND_URL=http://localhost:5000
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md, lg)
- **Desktop**: > 1024px (xl)

## 🛠️ Tech Stack

### Frontend
- React 19.0
- Vite 6.3
- Tailwind CSS 4.1
- Framer Motion 12.6
- Axios 1.9
- React Router 7.5

### Backend
- Node.js + Express 5.1
- MongoDB + Mongoose 8.15
- JWT Authentication
- CORS enabled

## 🚨 Troubleshooting

### Port Already in Use
If port 5173 or 5000 is already in use:

```bash
# Kill process on port 5173 (Frontend)
lsof -ti:5173 | xargs kill -9

# Kill process on port 5000 (Backend)
lsof -ti:5000 | xargs kill -9
```

### MongoDB Connection Issues
- Ensure MongoDB is running locally or check your Atlas connection string
- Update `.env` with correct `MONGO_URI`

### Build Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📝 Notes

- Frontend runs on: **http://localhost:5173**
- Backend runs on: **http://localhost:5000**
- The `npm run dev` command watches both servers and restarts on file changes
- Errors from both frontend and backend will be visible in the terminal

## 🤝 Contributing

Feel free to fork, modify, and improve this portfolio template!

## 📄 License

ISC

---

**Happy coding! 🎉**
