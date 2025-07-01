const express = require("express");
const router = express.Router();

const { verifyToken } = require("../middleware/verifyToken");

const { index } = require("../controller/holdingsController");

router.get("/index", verifyToken, index);

module.exports = router;