const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Router
const pollRoutes = require("./router/polls.routes");

// Routes
app.use("/polls", pollRoutes);

app.listen(PORT, () => {
	console.log(`Server is on Port: ${PORT}`);
});