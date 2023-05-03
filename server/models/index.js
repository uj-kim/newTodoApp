'use strict';

const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.TOdo = require("./Todo")(sequelize, Sequelize);


module.exports = db;
