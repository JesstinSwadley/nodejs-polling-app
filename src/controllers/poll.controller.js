const { models: { Poll } } = require("../models/db");

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