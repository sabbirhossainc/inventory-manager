const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/product");
const app = express();
const port = process.env.PORT || 5000;

dotenv.config();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log("Server running on port:", port);
      console.log(`http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));
