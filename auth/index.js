const express = require("express");
const User = require("../user/user.model");

// Passport Configuration
require("./local/passport").setup(User);

var router = express.Router();

router.use("/local", require("./local").default);

export default router;
