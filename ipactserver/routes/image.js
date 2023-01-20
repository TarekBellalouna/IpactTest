const express = require("express");
const { getImagesByName, getAllImages } = require("../controllers/image");
const router = express.Router();

router.get("/", getAllImages);
router.get("/search", getImagesByName);

module.exports = router;
