const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
	try {
		res.send("Poll POST Request");
	} catch (error) {
		res.send("error")
	}
});

module.exports = router;