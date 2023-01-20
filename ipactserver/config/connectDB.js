const mongoose = require("mongoose");

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("database is connected"))
  .catch((err) => console.log(err));
