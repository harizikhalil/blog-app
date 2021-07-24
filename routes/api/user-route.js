const express = require("express");
const router = express.Router();

//User Controller
const { register, login } = require("../../controllers/userController");

const isAuth = require("../../middlewares/passport-setup");

const {
  registerRules,
  validator,
  loginRules,
} = require("../../middlewares/checkValidation");

//user routers
router.post("/register", registerRules(), validator, register);
router.post("/login", loginRules(), validator, login);
router.get("/current", isAuth(), (req, res) => res.json({ user: req.user }));

module.exports = router;
