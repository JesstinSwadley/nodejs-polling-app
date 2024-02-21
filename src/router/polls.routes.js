const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
	let body = req.body

	console.log(body)

	try {
		res.send("Poll POST Request");
	} catch (error) {
		res.send("error")
	}
});

module.exports = router;