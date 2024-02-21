const express = require("express");
const router = express.Router();
const { createPoll } = require("../controllers/poll.controller");

router.post("/", createPoll);

module.exports = router;