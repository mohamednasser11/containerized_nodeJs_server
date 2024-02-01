const router = require("express").Router();
const auth = require("../controller/auth");

// route POST api/user/api/register
router.post("/register", auth.registerController);
//route POST api/user/api/login
router.post("/login", auth.loginController);

module.exports = router;
