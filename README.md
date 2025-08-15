# 🗳️ Voting Application - Full Stack (Backend + Frontend)

#Deployed On render -  

A complete voting system built with **Node.js**, **Express.js**, **MongoDB**, and a **React.js (Vite)** frontend.  
Users can register using their **Aadhar Card Number**, securely log in, and vote for candidates.  
Admins can manage candidates but cannot vote.

---

## 🚀 Key Features

### ✅ User
- Sign up with a **unique 12-digit Aadhar number** and password
- Secure login with JWT authentication
- View list of candidates
- Vote for **only one candidate** (once per account)

### ✅ Admin
- Create, update, and delete candidates
- View vote counts
- Cannot vote

---

## 🛠️ Tech Stack

**Backend**  
- Node.js  
- Express.js  
- MongoDB (Mongoose)  
- JWT (JSON Web Token) for authentication  

**Frontend**  
- React.js (Vite)  
- Axios for API calls  
- Modern responsive UI with HTML, CSS, JS

---

## 📁 Folder Structure

```
voting-app/
├── backend/                # Node.js + Express API
│   ├── models/              # Mongoose schemas (User, Candidate)
│   ├── routes/              # Express routes
│   ├── server.js            # Entry point
│   └── .env                  # Environment variables
├── voting-app-frontend/    # React + Vite frontend
│   ├── src/
│   └── index.html
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Prince-1501/voting_app.git
cd voting_app
```

---

### 2️⃣ Backend Setup
```bash
cd backend
npm install
```

**Create a `.env` file in `backend/`**
```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

**Run backend**
```bash
npm start
```
Backend will run at: [http://localhost:3000](http://localhost:3000)

---

### 3️⃣ Frontend Setup
```bash
cd ../voting-app-frontend
npm install
npm run dev
```
Frontend will run at: [http://localhost:5173](http://localhost:5173)

---

## 📡 API Endpoints

### 🔐 Authentication
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/user/signup`  | POST   | Register a new voter |
| `/api/admin/signup` | POST   | Register a new admin |
| `/api/user/login`   | POST   | Login as voter |
| `/api/admin/login`  | POST   | Login as admin |

---

### 🧑‍💼 Candidates
| Endpoint         | Method | Access | Description |
|------------------|--------|--------|-------------|
| `/api/candidate`      | GET    | User/Admin | Get list of candidates |
| `/api/candidate`      | POST   | Admin      | Add a new candidate |
| `/api/candidate/:id`  | PUT    | Admin      | Update candidate by ID |
| `/api/candidate/:id`  | DELETE | Admin      | Delete candidate by ID |

---

### 🗳️ Voting
| Endpoint                 | Method | Access | Description |
|--------------------------|--------|--------|-------------|
| `/api/candidate/vote/:id`| POST   | User   | Vote for a candidate |
| `/api/candidate/vote/count` | GET | Public | Get vote counts |

---

### 👤 User Profile
| Endpoint                  | Method | Description |
|---------------------------|--------|-------------|
| `/api/user/profile`       | GET    | Get logged-in user info |
| `/api/user/profile/password` | PUT | Change user password |

---

## 🔒 Authentication
- All protected routes require a valid **JWT token** in headers:
```
Authorization: Bearer <your_token>
```
- Tokens are generated on login and expire after a set time.

---

## 📌 Important Notes
- Users can **vote only once**.
- Admins **cannot vote**.
- Aadhar numbers must be **unique and exactly 12 digits**.

---

## 🧠 Made With ❤️
Node.js, Express.js, MongoDB, React, Vite, JWT


#Screent Shot -
<img width="1919" height="820" alt="Screenshot 2025-08-15 142854" src="https://github.com/user-attachments/assets/4f5dd4c1-ed96-42f3-98e9-09844c0a78bd" />
<img width="1919" height="830" alt="Screenshot 2025-08-15 142551" src="https://github.com/user-attachments/assets/558c40c3-1e9c-4f3f-a916-08f5f95e8a71" />
<img width="1919" height="822" alt="Screenshot 2025-08-15 142822" src="https://github.com/user-attachments/assets/9e3a7587-0ecc-41b6-90ed-0757795c01ae" />
<img width="1919" height="830" alt="Screenshot 2025-08-15 142838" src="https://github.com/user-attachments/assets/a5aa7a61-560c-4506-b69d-b2dfdf626144" />


