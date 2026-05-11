# Task Manager – Full Stack Project Management Application

## Live Demo

Frontend: [https://task-manager-umber-two-79.vercel.app](https://task-manager-umber-two-79.vercel.app)

Backend API: [https://task-manager-a40n.onrender.com](https://task-manager-a40n.onrender.com)

GitHub Repository: [https://github.com/Devesh7758/task-manager](https://github.com/Devesh7758/task-manager)

---

# Project Overview

Task Manager is a modern full-stack project management web application built using the MERN stack.

The application allows users to:

* Register and login securely
* Create and manage projects
* Create and manage tasks
* Update task status
* View dashboard analytics
* Access protected routes
* Experience role-based access control (RBAC)

The project was developed as a full-stack internship assessment project focusing on:

* Backend architecture
* REST APIs
* Authentication & security
* Database relationships
* Responsive frontend UI
* Dashboard visualization
* Full deployment workflow

---

# Features

## Authentication System

* User registration
* User login
* JWT authentication
* Protected frontend routes
* Protected backend routes
* Persistent login using localStorage

## Role-Based Access Control (RBAC)

* Admin middleware
* Admin-only project deletion
* Secure authorization flow

## Project Management

* Create projects
* Fetch projects
* Delete projects
* Project cards UI
* Real-time frontend updates

## Task Management

* Create tasks
* Fetch tasks
* Delete tasks
* Update task status
* Priority levels
* Task-project relationships

## Dashboard Analytics

* Total projects
* Total tasks
* Completed tasks
* Pending tasks
* Live dashboard statistics

## Frontend Features

* Responsive sidebar
* Modern dark UI
* Toast notifications
* Loading states
* Protected pages
* Responsive layout
* Mobile sidebar support

## Backend Features

* Express.js REST APIs
* MongoDB Atlas integration
* Mongoose schemas
* Relationship population
* Authentication middleware
* Error handling

---

# Tech Stack

## Frontend

* React.js
* Vite
* Tailwind CSS
* React Router DOM
* Axios
* React Hot Toast

## Backend

* Node.js
* Express.js
* JWT Authentication
* bcryptjs
* CORS
* dotenv

## Database

* MongoDB Atlas
* Mongoose

## Deployment

* Frontend → Vercel
* Backend → Render
* Database → MongoDB Atlas

---

# Folder Structure

```bash
frontend/
backend/
```

## Frontend Structure

```bash
src/
 ├── components/
 ├── layouts/
 ├── pages/
 ├── services/
 └── App.jsx
```

## Backend Structure

```bash
backend/
 ├── config/
 ├── controllers/
 ├── middleware/
 ├── models/
 ├── routes/
 └── server.js
```

---

# API Endpoints

## Authentication

```bash
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/me
```

## Projects

```bash
POST   /api/projects
GET    /api/projects
DELETE /api/projects/:id
```

## Tasks

```bash
POST   /api/tasks
GET    /api/tasks
PUT    /api/tasks/:id
DELETE /api/tasks/:id
```

## Dashboard

```bash
GET /api/dashboard
```

---

# Screenshots

## Login Page

(Add screenshot here)

## Register Page

(Add screenshot here)

## Dashboard

(Add screenshot here)

## Projects Page

(Add screenshot here)

## Tasks Page

(Add screenshot here)

---

# Setup Instructions

## Clone Repository

```bash
git clone https://github.com/Devesh7758/task-manager.git
```

---

## Backend Setup

```bash
cd backend
npm install
npm run dev
```

Create `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

# Deployment Links

## Frontend

[https://task-manager-umber-two-79.vercel.app](https://task-manager-umber-two-79.vercel.app)

## Backend

[https://task-manager-a40n.onrender.com](https://task-manager-a40n.onrender.com)

---

# Future Improvements

* Edit project/task functionality
* Search & filters
* Drag-and-drop kanban board
* Team collaboration
* File attachments
* Due dates & reminders
* Activity logs

---

# Author

Devesh Dwivedi

GitHub: [https://github.com/Devesh7758]
