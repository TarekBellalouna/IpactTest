const express = require("express");
const { register, login , verifyJWT } = require("../controllers/user");
const router = express.Router();

router.post("/register",register);

router.post("/login",login);

router.get("/getUsername", verifyJWT,(req,res) =>{
    res.json({isLoggedIn: true , username :req.user.username})
});

router.get('/logout', (req, res) => {
    localStorage.removeItem("token")
 });
 
module.exports = router;
