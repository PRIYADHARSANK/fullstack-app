# Peacock Promotors - Luxury Real Estate Application

A full-stack luxury real estate application built with a modern frontend and a robust backend. This project showcases advanced UI/UX design with glassmorphism, smooth animations, and a scalable architecture.

## 🚀 Project Overview

**Peacock Promotors** is designed to provide a premium user experience for browsing luxury properties.
-   **Frontend**: Built with React, featuring advanced animations using GSAP and styling with Tailwind CSS.
-   **Backend**: Powered by FastAPI (Python) for high-performance API endpoints.
-   **Database**: Uses MongoDB for flexible and scalable data storage.

## 🛠️ Tech Stack

### Frontend
-   **React 19**: Modern UI library.
-   **Tailwind CSS**: Utility-first CSS framework.
-   **GSAP (GreenSock)**: Professional-grade animation library.
-   **Lucide React**: Beautiful & consistent icons.
-   **Axios**: Promise based HTTP client.

### Backend
-   **FastAPI**: Modern, fast (high-performance) web framework for building APIs with Python.
-   **Motor**: Asynchronous MongoDB driver for Python.
-   **Pydantic**: Data validation using Python type hints.
-   **Uvicorn**: Lightning-fast ASGI server.

---

## 📋 Prerequisites

Ensure you have the following installed on your machine:
-   [Node.js](https://nodejs.org/) (v16+)
-   [Python](https://www.python.org/) (v3.8+)
-   [MongoDB](https://www.mongodb.com/try/download/community) (Local or Atlas URL)

---

## ⚙️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/PRIYADHARSANK/peacock-promotors.git
cd peacock-promotors
```

### 2. Backend Setup
Navigate to the backend directory and set up the Python environment.

```bash
cd backend

# Create a virtual environment
python -m venv venv

# Activate the virtual environment
# On macOS/Linux:
source venv/bin/activate
# On Windows:
# .\venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

#### Configuration (.env)
Create a `.env` file in the `backend` directory with your MongoDB credentials:
```ini
MONGO_URL=mongodb://localhost:27017  # or your Atlas URL
DB_NAME=peacock_promotors
CORS_ORIGINS=http://localhost:3000
```
*(Note: `backend/.env` is gitignored for security. You must create this file manually.)*

### 3. Frontend Setup
Navigate to the frontend directory and install Node dependencies.

```bash
cd ../frontend

# Install dependencies
npm install
# or
yarn install
```

---

## 🏃‍♂️ Running the Application

### Start the Backend Server
From the `backend` directory (with virtualenv activated):
```bash
uvicorn server:app --reload --port 8000
```
The API will be available at `http://localhost:8000`.
API Documentation (Swagger UI): `http://localhost:8000/docs`

### Start the Frontend Development Server
From the `frontend` directory:
```bash
npm start
# or
yarn start
```
The application will open at `http://localhost:3000`.

---

## 📂 Project Structure

```
peacock-promotors/
├── backend/                # Python FastAPI Backend
│   ├── server.py           # Main application entry point
│   ├── requirements.txt    # Python dependencies
│   └── .env                # Environment variables (not committed)
├── frontend/               # React Frontend
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── components/     # UI Components (Hero, About, Projects, etc.)
│   │   ├── App.js          # Main Component
│   │   └── index.css       # Global Styles & Tailwind Directives
│   └── package.json        # Node dependencies
└── README.md               # Project Documentation
```

## 🤝 Contributing

1.  Fork the repository.
2.  Create a feature branch (`git checkout -b feature/NewFeature`).
3.  Commit your changes (`git commit -m 'Add NewFeature'`).
4.  Push to the branch (`git push origin feature/NewFeature`).
5.  Open a Pull Request.

---

**Developed by Peacock Promotors Team**
