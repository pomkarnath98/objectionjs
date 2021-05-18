const express = require("express");
const { getUser } = require("../controller/user");

const router = express.Router();
router.get("/user/:id", getUser);

module.exports = router;
