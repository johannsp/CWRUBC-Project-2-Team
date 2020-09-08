'use strict';

const fs        = require('fs');
const path      = require('path');
const Sequelize = require('sequelize');
// Add step of loading .env for override information during development
const dotenv    = require('dotenv').config();
//
const basename  = path.basename(module.filename);
const env       = process.env.NODE_ENV || 'development';
const config    = require(__dirname + '/../config/config.json')[env];
const db        = {};

// If password was left as null in ../config/config.json file
// and a DB_PASSWORD environment variable was defined, possibly
// in a .env hidden file loaded by the dotenv module, then use
// the value of DB_PASSWORD to set config.password.
if (config.password === null && process.env.DB_PASSWORD) {
  config.password = process.env.DB_PASSWORD;
}

// The API key for Last.fm should be read from a .env file or configured as an
// environment variable in the case of Heroku.  Assume the existence of an
// environment variable:
//   LASTFM_API_KEY
// and return its value in a property of the exported db.
db.APIKey_LastFM = process.env.LASTFM_API_KEY;
/* {{{ **
** if (config.use_env_variable) {
**   var sequelize = new Sequelize(process.env[config.use_env_variable]);
** } else {
**   var sequelize = new Sequelize(config.database, config.username, config.password, config);
** }
** }}} */
// When defined as const a variable can only be set once and ES6 const and let
// limit scope to the code block where a variable is defined.  Use a ternary
// operator to absorb the IF statement so only one assignment at outside scope
// level is needed.
const sequelize = (config.use_env_variable)
  ? new Sequelize(process.env[config.use_env_variable])
  : new Sequelize(config.database, config.username, config.password, config);

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
