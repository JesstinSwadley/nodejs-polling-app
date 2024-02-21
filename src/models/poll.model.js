module.exports = (sequelize, DataTypes) => {
	const Poll = sequelize.define("polls", 
	{
		question: {
			type: DataTypes.STRING,
			allowNull: false
		},
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true
		}
	});

	return Poll;
}