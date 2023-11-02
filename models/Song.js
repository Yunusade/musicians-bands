const { DataTypes } = require('sequelize');
const {Sequelize, sequelize} = require('../db');

// TODO - define the Song model
let Song = sequelize.define("Song", {
    title: {
        type: DataTypes.STRING
    }, 
    year: {
        type: DataTypes.INTEGER
    },
    length: {
        type: DataTypes.INTEGER
    }
});

module.exports = {
    Song
};