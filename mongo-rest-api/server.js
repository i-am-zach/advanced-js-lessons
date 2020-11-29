const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const dotenv = require("dotenv");
dotenv.config();

app.use(bodyParser.json());

// Import routes
const productRoutes = require("./routes/products");
app.use("/products", productRoutes);

// ROUTES
app.get("/", (req, res) => {
  res.send("We are on home");
});

// Setup MongoDB
const mongoSettings = require("./mongoSettings");
mongoose.connect(
  `mongodb+srv://mongoUser:${mongoSettings.password}@cluster0.ega4m.mongodb.net/${mongoSettings.database}?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB!");
  }
);

// Listen on port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Express running on port ${port}`);
});
