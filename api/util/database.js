const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  PORT: 5432,
  database: process.env.DB,
  dialect: 'postgres',
  logging: false
});



// const sequelize = new Sequelize({
// 	host: 'ec2-44-193-188-118.compute-1.amazonaws.com',
// 	username: 'crfhbubysuqvbp',
// 	password: 'a3f270ba52a6772fec2129af8d195c7cc04b72d98ca1c1a02e2753c46098e9a9',
// 	port: 5432,
// 	database: 'd3o2okp20vhafu',
// 	dialect: 'postgres',
// 	dialectOptions: {
// 		ssl: {
// 			require: true,
// 			rejectUnauthorized: false,
// 		},
// 	},
// });

module.exports = { sequelize };
