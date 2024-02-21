const { Poll } = require("../models/poll.model");

const createPoll = async (req, res) => {
	let question = req.body.question

	try {
		await Poll.create({
			question
		});
		res.send("Poll was added to the database table");
	} catch (error) {
		res.send(error);
	}
}

module.exports = {
	createPoll
}