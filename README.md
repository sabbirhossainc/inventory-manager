# 📦 Inventory Manager – Full Stack App

An end-to-end **Inventory Manager** web application built with the **MERN stack**:

- **Frontend**: Next.js, Tailwind CSS, Redux Toolkit (RTK Query)
- **Backend**: Express.js, MongoDB (via Mongoose), JWT Authentication

---

## 🧩 Features

✅ User Registration & Login  
✅ JWT-based Auth with Protected Routes  
✅ Product CRUD (Add, View, Edit, Delete)  
✅ Global State Management with Redux Toolkit  
✅ RESTful API with Node.js + Express  
✅ MongoDB Atlas Integration

---

## 🔧 Tech Stack

| Layer      | Technology                                       |
| ---------- | ------------------------------------------------ |
| Frontend   | Next.js, Tailwind CSS, Redux Toolkit, RTK Query  |
| Backend    | Express.js, MongoDB, Mongoose                    |
| Auth       | JWT, bcrypt                                      |
| Deployment | netlify (Frontend), netlify (Backend)            |
| Optional   | Cloudinary, React Hook Form, Toast Notifications |

---

## 📂 Project Structure

inventory-manager/
├── backend/ # Express API with MongoDB
├── frontend/ # Next.js + Tailwind frontend
├── README.md # Root readme (this file)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/sabbirhossainc/inventory-manager.git
cd inventory-manager
```

### 2. Setup the Backend

```bash
cd backend
npm install
```

- Create a .env file:

```bash
PORT=5000
MONGO_URI='mongodb+srv://sabbir_inventory:mADOlMLOskRektvq@inventorycluster0.ppfk6vj.mongodb.net/?retryWrites=true&w=majority&appName=inventoryCluster0'
JWT_SECRET='02a248d30f34db1ec4bdb57799e86d20d85613155fb7b7cd210e3331c0701f850baa610ea8096cadb78ad6bb877cd3d300194dfaaef479a9a8108168e15aaa41'
```

- Run the backend:

```bash
npm run dev
```

### 3. Setup the Frontend

```bash
cd ../frontend
npm install
```

- Create a .env.local file:

```bash
NEXT_PUBLIC_API_BASE=http://localhost:5000/api
```

- Run the frontend:

```bash
npm run dev
```

##📸 Screenshots

    ✨ Login Page

    📦 Product Dashboard

    📝 Add/Edit Product Forms

##🌐 Live Demo

    [🔗 Frontend URL](http://localhost:3000)
    [🔗 Backend API](http://localhost:5000)

##🙌 Author

    [🔗 Portfolio](https://www.sabbirhossain.dev/)
    [🔗 GitHub](https://github.com/sabbirhossainc)
