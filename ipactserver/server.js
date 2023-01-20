const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors("http://localhost:3000"));
require("dotenv").config();
require("./config/connectDB");

// routes

const imageRoutes = require("./routes/image");
app.use("/api/v1/images", imageRoutes);

const port = process.env.PORT || 8081;
app.listen(port, () => console.log(`server is running on ${port}`));
