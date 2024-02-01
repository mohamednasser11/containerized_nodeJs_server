const User = require("../model/User");
const { registerSchema, loginSchema } = require("../schema/auth");

exports.registerController = async (req, res, next) => {
  const { error } = registerSchema.validate(req.body);
  if (error) {
    res.status(500).send(error);
  } else {
    try {
      const existingEmail = await User.findOne({ email: req.body.email });
      if (!existingEmail) {
        const newUser = new User({
          email: req.body.email,
          name: req.body.name,
          password: req.body.password,
        });
        const savedUser = await newUser.save().then((result) => {
          console.log(result);
        });
        res.status(200).send(savedUser);
      } else {
        throw new Error("User already Exists");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
};

exports.loginController = async (req, res, next) => {
  const { error } = loginSchema.validate(req.body);

  if (error) {
    res.status(500).send(error);
  }
  try {
    const searchForUser = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (!searchForUser) {
      res.status(401).send("User doesn't exist!");
    } else {
      res.status(200).send("User is logged In.");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
