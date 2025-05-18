# EcoFinds - React Authentication with PostgreSQL Backend

This project is a full-stack React application with user authentication implemented using a Node.js/Express backend connected to a **PostgreSQL** database. It supports user registration, login, JWT-based authentication, and protected routes.

---

## Features

- User signup and login with email, username, and password
- Password hashing with bcrypt
- JWT token generation and verification for secure authentication
- React frontend with dark mode toggle and form validation using `react-hook-form`
- Backend API built with Express and PostgreSQL database accessed via `pg` and `knex` (or `sequelize`)
- CORS configured for frontend-backend communication
- Token stored in `localStorage` with React state management for auth status
- Protected frontend routes redirecting unauthenticated users to login

---

## Tech Stack

| Layer           | Technology                 |
|-----------------|----------------------------|
| Frontend        | React, react-router-dom, react-hook-form |
| Backend         | Node.js, Express           |
| Database        | PostgreSQL                 |
| ORM/Query Builder | Knex.js or Sequelize (optional) |
| Authentication  | JSON Web Tokens (JWT), bcryptjs |
| Environment     | dotenv                    |

---

## Prerequisites

- Node.js (v14+)
- PostgreSQL installed and running
- npm or yarn package manager
- (Optional) Postman or curl for API testing

---

## Setup Instructions

### 1. Clone the repository
git clone https://github.com/yourusername/ecofinds.git
cd ecofinds
### 2. Backend Setup
cd backend
npm install
#### Configure PostgreSQL database
PORT=3001
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_postgres_username
DB_PASSWORD=your_postgres_password
DB_NAME=ecofinds_db
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=1h

text
- Create a PostgreSQL database, e.g., `ecofinds_db`.

- Create a `.env` file in the `backend` folder with the following variables:

#### Database schema

Run the following SQL to create the `users` table:

CREATE TABLE users (
id SERIAL PRIMARY KEY,
email VARCHAR(255) UNIQUE NOT NULL,
username VARCHAR(255) NOT NULL,
password_hash VARCHAR(255) NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

The backend server will start on `http://localhost:3001`.

---

### 3. Frontend Setup

#### Install dependencies

cd ../frontend
npm install

#### Configure environment variables

Create a `.env` file in the frontend root with:

REACT_APP_API_URL=http://localhost:3001

#### Start frontend development server


The React app will open at `http://localhost:3000`.

---

## API Endpoints

| Method | Endpoint           | Description                     | Request Body                             | Response                             |
|--------|--------------------|---------------------------------|----------------------------------------|------------------------------------|
| POST   | `/api/auth/register` | Register a new user             | `{ email, username, password }`        | `{ message, user, token }`          |
| POST   | `/api/auth/login`    | Login existing user             | `{ email, password }`                   | `{ message, user, token }`          |
| GET    | `/api/profile`       | Get profile info (protected)   | `Authorization: Bearer <token>` header | `{ email, username, created_at }`  |

---

## Usage

- Navigate to `http://localhost:3000`
- Register a new account or login with existing credentials
- Upon successful login, you will be redirected to the homepage
- JWT token is stored in localStorage and used to authenticate API requests

---

## Notes

- Passwords are securely hashed using bcrypt before storage
- JWT tokens expire after 1 hour (configurable in `.env`)
- CORS is enabled on backend to allow requests from frontend origin
- For production, consider HTTPS, secure cookies, and refresh tokens

---

## Troubleshooting

- **"Failed to fetch" errors:** Ensure backend is running, API URL is correct, and CORS is configured properly.
- **Database connection errors:** Verify PostgreSQL credentials and that the database server is running.
- **Port conflicts:** Make sure ports 3000 (frontend) and 3001 (backend) are free or update `.env` accordingly.

---

## License

MIT License

---

# Enjoy building EcoFinds! 🌿



