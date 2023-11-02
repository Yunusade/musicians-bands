const { DataTypes } = require('sequelize');
const {Sequelize, sequelize} = require('../db');

// TODO - define the Musician model
let Musician = sequelize.define("Musician", {
    name: {
        type: DataTypes.STRING
    },
    instrument: {
        type: DataTypes.STRING
    }
});

module.exports = {
    Musician
};