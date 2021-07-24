const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const secret = config.get("TokenSecret");
const User = require("../models/User");

module.exports = userController = {
  register: async (req, res) => {
    const { UserName, email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json([{ msg: "This user is already exists" }]);
      }

      user = new User({
        UserName,
        email,
        password,
      });
      //Hash the password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();

      const payload = {
        id: user._id,
      };

      jwt.sign(payload, secret, (err, token) => {
        if (err) throw err;
        res.send({
          token: `Bearer ${token}`,
          user: {
            UserName: user.UserName,
            email: user.email,
            _id: user._id,
          },
        });
      });
    } catch (error) {
      console.log(error);
      res.status(500).send([{ msg: "Server error" }]);
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      const searchResult = await User.findOne({ email });
      if (!searchResult)
        return res.status(400).json([{ msg: "email or password incorrect" }]);
      const isMatch = await bcrypt.compare(password, searchResult.password);
      if (!isMatch)
        return res.status(400).json([{ msg: "email or password incorrect" }]);
      const paylaod = {
        id: searchResult._id,
      };
      jwt.sign(paylaod, secret, (err, token) => {
        if (err) throw err;
        res.send({
          token: `Bearer ${token}`,
          user: {
            UserName: searchResult.UserName,
            email: searchResult.email,
            _id: searchResult._id,
          },
        });
      });
    } catch (error) {
      res.status(500).json({ errors: error });
    }
  },
};
