const mongoose = require("mongoose");

const searchSchema = mongoose.Schema({
  keyword: {
    type: String,
    required: true,
    unique: true,
  },
  searchData: [
    {
      urls: {
        small: {
          type: String,
          required: true,
        },
      },
      user: {
        username: { type: String, required: true },
        profile_image: { small: { type: String, required: true } },
      },
    },
  ],
});

module.exports = mongoose.model("search", searchSchema);
