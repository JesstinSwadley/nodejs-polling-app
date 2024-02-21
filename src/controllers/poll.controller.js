const { Poll } = require("../models/poll.model");

const createPoll = async (req, res) => {
	let question = req.body.question

	try {
		const poll = await Poll.create({
			question
		});
		
		res.send(poll);
	} catch (error) {
		res.send(error);
	}
}

module.exports = {
	createPoll
}