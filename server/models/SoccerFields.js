const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const SoccerField = sequelize.define('SoccerField', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    }
});

module.exports = SoccerField;
