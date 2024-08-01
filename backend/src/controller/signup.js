const User = require("../model/User");
const bcrypt = require("bcrypt");

async function signupUser(req, res) {
  try {
    const { firstName, lastName, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashPassword,
      role: "customer",
    });

    const savedUser = await newUser.save();
    res.status(201).json({message:"User Created Successfully", user: savedUser});
  } catch (error) {
    res.status(400).json({ message: message.error });
  }
};

module.exports = { signupUser };
