# 🎨 Frontend – Inventory Manager App

This is the **Next.js** frontend for the Inventory Manager full-stack app.

## 🚀 Features

- JWT-based authentication
- Redux Toolkit + RTK Query
- Protected product management pages
- Tailwind CSS for styling
- React Hook Form & toast notifications

---

## 🧰 Tech Stack

- Next.js (App Router)
- Redux Toolkit
- RTK Query
- Tailwind CSS
- react-redux

---

## 📁 Project Structure

```bash
frontend/
├── app/ # Routes
├── redux/ # Store, slices, RTK API
├── components/ # Shared UI
├── styles/ # Tailwind & globals
├── .env.local # Frontend environment config

```

## 🛠️ Setup Instructions

1. **Navigate to frontend**

```bash
cd frontend

```

2. **Install dependencies**

```bash
npm install
```

3. **Setup environment**

- Create a .env.local file:

```bash
NEXT_PUBLIC_API_BASE=http://localhost:5000/api
```

4. **Run the dev server**

```bash
npm run dev
```

## 📄 Available Pages

```bash
Route	Description
/register	Register user
/login	Login user
/products	Product list (auth)
/products/add	Add product
/products/edit/[id]	Edit product

```

## 🔒 Authentication

    JWT stored in Redux

    API calls use RTK Query + token

    Redirect if user is not authenticated

## 🧪 Bonus

    ✅ Cloudinary image upload

    ✅ React-hot-toast for alerts

    ✅ Search / Filter / Pagination

    ✅ Responsive + clean UI
