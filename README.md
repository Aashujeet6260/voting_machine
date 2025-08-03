# 🗳️ Voting Application - Backend

This is a backend application for a voting system built with **Node.js**, **Express.js**, and **MongoDB**, designed to allow users to vote for candidates securely and efficiently.

In this hands-on project, you'll learn how to:
- Set up the backend using **Node.js** and **Express.js**
- Integrate **MongoDB** for persistent data storage
- Create secure user authentication using **JWT**
- Connect the backend to a **React** frontend for a dynamic and responsive UI

---

## 🔧 Features

- User sign up and login with **Aadhar Card Number** and **Password**
- View list of candidates
- Vote for a candidate (**only once per user**)
- Admin functionalities:
  - Add, update, and delete candidates
  - Cannot vote

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** (Mongoose ODM)
- **JSON Web Tokens (JWT)** for authentication

---

## 🚀 Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Prince-1501/voting_app.git
   cd voting_app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set environment variables** in a `.env` file:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Run the application**:
   ```bash
   npm start
   ```

---

## 📡 API Endpoints

### 🔐 Authentication

| Endpoint       | Method | Description       |
|----------------|--------|-------------------|
| `/signup`      | POST   | Sign up a user    |
| `/login`       | POST   | Login a user      |

---

### 🧑‍💼 Candidates

| Endpoint                 | Method | Access     | Description                     |
|--------------------------|--------|------------|---------------------------------|
| `/candidates`            | GET    | User/Admin | Get list of candidates          |
| `/candidates`            | POST   | Admin      | Add a new candidate             |
| `/candidates/:id`        | PUT    | Admin      | Update candidate by ID          |
| `/candidates/:id`        | DELETE | Admin      | Delete candidate by ID          |

---

### 🗳️ Voting

| Endpoint                          | Method | Access | Description                      |
|-----------------------------------|--------|--------|----------------------------------|
| `/candidates/vote/:id`           | POST   | User   | Vote for a candidate             |
| `/candidates/vote/count`         | GET    | Public | Get vote count for all candidates|

---

### 👤 User Profile

| Endpoint                          | Method | Description               |
|----------------------------------|--------|---------------------------|
| `/users/profile`                | GET    | Get logged-in user info   |
| `/users/profile/password`       | PUT    | Change user password      |

---

## 📌 Notes

- **Users can vote only once**.
- **Admins are restricted from voting**.
- Authentication is handled via **JWT**. Ensure your token is included in the headers as `Authorization: Bearer <token>`.

---

> Made with ❤️ using Node.js, Express & MongoDB
