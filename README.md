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
| Deployment | netlify (Frontend), render (Backend)             |
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

## 🧪 Test Credentials

**Email**: test@example.com  
**Password**: 123456

## 🔑 Login

```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "test@example.com",
  "password": "123456"
}
```

## 🔐 Register a New User

```bash
POST /api/auth/register
{
  "name": "Test User",
  "email": "test@example.com",
  "password": "123456"
}
```

- Run the frontend:

```bash
npm run dev
```

## 📸 Screenshots

    ✨ Login Page

![](https://i.postimg.cc/02QNZjMV/login.png)

    📦 Product Dashboard

![](https://i.postimg.cc/QdKdGzq5/product.png)

    📝 Add/Edit Product Forms

![](https://i.postimg.cc/tg9wtZ7T/product-from.png)

## 🌐 Live Demo

🔗 [Frontend URL](https://demo-inventory-manage.netlify.app/)
🔗 [Backend API](https://inventory-manager-7tcn.onrender.com)

## 🙌 Author

🔗 [Portfolio](https://www.sabbirhossain.dev/)
