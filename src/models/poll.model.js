module.exports = (sequelize, DataTypes) => {
	const Poll = sequelize.define("polls", 
	{
		question: {
			type: DataTypes.STRING,
			allowNull: false
		},
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4
		},
		created_at: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			defaultValue: DataTypes.NOW,
		}
	});

	return Poll;
}