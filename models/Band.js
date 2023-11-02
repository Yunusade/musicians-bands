const { DataTypes } = require('sequelize');
const {Sequelize, sequelize} = require('../db');

// TODO - define the Band model
let Band = sequelize.define("Band", {
    name: {
        type: DataTypes.STRING
    },
    genre: {
        type: DataTypes.STRING
    }
});

module.exports = {
    Band
};