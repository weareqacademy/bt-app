"use strict";require('../bootstrap');

module.exports = {
  dialect: 'postgres',
  host: 'HOST',
  username: 'DB_USER',
  password: 'DB_PASS',
  database: 'DB_NAME',
  logging: false,
  storage: './__tests__/database.sqlite',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
  ssl: {
    rejectUnauthorized: false
  },
  dialectOptions: {
    ssl: true
  },
};
