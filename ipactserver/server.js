const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const urlencodedParser = bodyParser.urlencoded({extended: false})
const cors = require("cors");
app.use(bodyParser.json(),urlencodedParser)
app.use(cors("http://localhost:3000"));
require("dotenv").config();
require("./config/connectDB");

// routes

const userRoutes = require("./routes/user");
app.use("/user", userRoutes);

const port = process.env.PORT || 8081;
app.listen(port, () => console.log(`server is running on ${port}`));
