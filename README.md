# 🗳️ Voting Application - Full Stack (Backend + Frontend)

This is a full stack voting system built with **Node.js**, **Express.js**, **MongoDB**, and a **React.js frontend**. Users can register using their Aadhar number, securely log in, and vote for candidates. Admins can manage candidates but are restricted from voting.

---

## 🚀 What You'll Learn

- Set up the backend using Node.js and Express.js
- Integrate MongoDB for persistent data storage
- Implement secure user authentication with JWT
- Build a React frontend with Axios and Vite
- Connect frontend and backend with protected routes

---

## 🔧 Features

✅ **User**:
- Sign up and login with Aadhar Card Number and Password  
- View list of candidates  
- Vote for a candidate (only once)

✅ **Admin**:
- Add, update, and delete candidates  
- Cannot vote

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js, MongoDB (Mongoose), JWT
- **Frontend**: React.js, Axios, Vite

---

## 📁 Folder Structure

```
voting-app/
├── backend/                # Node.js + Express API
├── voting-app-frontend/   # React + Vite frontend
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Prince-1501/voting_app.git
cd voting_app
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

Start the backend server:

```bash
npm start
```

### 3. Frontend Setup

```bash
cd ../voting-app-frontend
npm install
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

---

## 📡 API Endpoints

### 🔐 Authentication

| Endpoint | Method | Description |
|----------|--------|-------------|
| /signup  | POST   | Sign up a user |
| /login   | POST   | Login a user |

### 🧑‍💼 Candidates

| Endpoint         | Method | Access | Description |
|------------------|--------|--------|-------------|
| /candidates      | GET    | User/Admin | Get list of candidates |
| /candidates      | POST   | Admin      | Add a new candidate |
| /candidates/:id  | PUT    | Admin      | Update candidate by ID |
| /candidates/:id  | DELETE | Admin      | Delete candidate by ID |

### 🗳️ Voting

| Endpoint                 | Method | Access | Description |
|--------------------------|--------|--------|-------------|
| /candidates/vote/:id     | POST   | User   | Vote for a candidate |
| /candidates/vote/count   | GET    | Public | Get vote counts |

### 👤 User Profile

| Endpoint                  | Method | Description |
|---------------------------|--------|-------------|
| /users/profile            | GET    | Get logged-in user info |
| /users/profile/password   | PUT    | Change user password |

---

## 📌 Notes

- Users can vote only once
- Admins are restricted from voting
- JWT tokens must be passed in headers: `Authorization: Bearer <token>`

---

## 🧠 Made With ❤️

Node.js, Express.js, MongoDB, React, Vite, JWT
