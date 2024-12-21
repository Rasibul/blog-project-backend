# 🚀 Blog Platform Backend

Welcome to the backend application for a feature-rich blogging platform! This project is built with **Node.js**, **Express.js**, **Mongoose**, and **TypeScript**, ensuring robust, scalable, and maintainable code. The backend provides secure authentication, role-based access control, and powerful API endpoints.

---

## 🌟 Features

- **User Roles**:
  - Admin: Manage users and blogs (block users, delete any blog).
  - User: Create, update, and delete their own blogs.
- **Authentication & Authorization**:
  - Secure login and registration.
  - Role-based access control for Admin and User.
- **Blog Management**:
  - CRUD operations for blogs.
  - Public API for fetching blogs with search, sort, and filter functionalities.
- **Type Safety**:
  - Developed with TypeScript for maintainable and error-free code.
- **Code Quality**:
  - Configured with ESLint and Prettier for clean and consistent code.

---

## 🚀 Tech Stack

- **Node.js**
- **Express.js**
- **Mongoose (MongoDB)**
- **TypeScript**
- **ESLint**
- **Prettier**

---

## ⚙️ Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

---

## 🛠️ Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Rasibul/blog-platform-backend.git
cd blog-platform-backend
```

### 2️⃣ Install Dependencies

Install the required dependencies using npm or yarn:

```bash
npm install
# or
yarn install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
PORT=5000
DATABASE_URL=mongodb+srv://mdprinces569:LNsQ9gk1GhPodIbR@cluster0.6p0yr.mongodb.net/blog-project-backend?retryWrites=true&w=majority&appName=Cluster0
NODE_ENV=development
JWT_SECRET=2d1f98a34e1b8c9f3c4a57421c77c6a46d2c975b1fd6a5f1e7f8b12345678ab9
```

### 4️⃣ Run the Application

Start the development server:

```bash
npm run start:dev
# or
yarn run start:dev
```

The application will run locally at:

```bash
http://localhost:5000
```

---

## 📜 Available Scripts

- **npm run start:dev**: Start the development server with live reload.
- **npm run build**: Compile the TypeScript code for production.
- **npm start**: Run the compiled production build.
- **npm run lint**: Check code quality with ESLint.
- **npm run prettier**: Format code using Prettier.

---

## 🔗 API Documentation

### 1. Authentication

- **Register User**
  - **Endpoint**: `POST /api/auth/register`
  - **Description**: Registers a new user with the platform.

- **Login User**
  - **Endpoint**: `POST /api/auth/login`
  - **Description**: Authenticates a user and generates a JWT token.

### 2. Blog Management

- **Create Blog**
  - **Endpoint**: `POST /api/blogs`
  - **Description**: Allows a logged-in user to create a blog.

- **Update Blog**
  - **Endpoint**: `PATCH /api/blogs/:id`
  - **Description**: Allows a logged-in user to update their own blog.

- **Delete Blog**
  - **Endpoint**: `DELETE /api/blogs/:id`
  - **Description**: Allows a logged-in user to delete their own blog.

- **Get All Blogs (Public)**
  - **Endpoint**: `GET /api/blogs`
  - **Description**: Fetch all blogs with search, sort, and filter options.

### 3. Admin Actions

- **Block User**
  - **Endpoint**: `PATCH /api/admin/users/:userId/block`
  - **Description**: Allows an admin to block a user.

- **Delete Blog**
  - **Endpoint**: `DELETE /api/admin/blogs/:id`
  - **Description**: Allows an admin to delete any blog.

---
