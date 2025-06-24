# 🧠 Backend – Inventory Manager API

This is the **Express.js** and **MongoDB** backend for the Inventory Manager application.

## 🚀 Features

- User registration & login with JWT
- Protected product CRUD API
- MongoDB with Mongoose
- Password hashing (bcrypt)
- Environment config with `.env`

---

## 📦 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcrypt.js
- dotenv

---

## 📁 Project Structure

backend/
├── models/ # Mongoose schemas (User, Product)
├── routes/ # API routes
├── controllers/ # (optional: logic separation)
├── middleware/ # JWT auth middleware
├── server.js # Entry point
├── .env # Environment variables

---

## 🛠️ Setup Instructions

1. **Clone the project**

```bash
git clone <your-repo-url>
cd backend
```
2. **Install dependencies**

```bash
npm install
```
3. **Set up environment variables**

- Create a .env file:

```bash
PORT=5000
MONGO_URI='mongodb+srv://sabbir_inventory:mADOlMLOskRektvq@inventorycluster0.ppfk6vj.mongodb.net/?retryWrites=true&w=majority&appName=inventoryCluster0'
JWT_SECRET='02a248d30f34db1ec4bdb57799e86d20d85613155fb7b7cd210e3331c0701f850baa610ea8096cadb78ad6bb877cd3d300194dfaaef479a9a8108168e15aaa41'
```
   - Run the server in Development:

```bash
npm run dev
```

#🔌 API Endpoints

##🔐 Auth

| Method | Route                | Description       |
| ------ | -------------------- | ----------------- |
| POST   | `/api/auth/register` | Register user     |
| POST   | `/api/auth/login`    | Login & get token |


##📦 Products (Protected)

| Method | Route               | Description      |
| ------ | ------------------- | ---------------- |
| GET    | `/api/products`     | Get all products |
| POST   | `/api/products`     | Add new product  |
| PUT    | `/api/products/:id` | Update a product |
| DELETE | `/api/products/:id` | Delete a product |
