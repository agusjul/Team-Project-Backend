const Sequelize = require ('sequelize');

const db = new Sequelize("merchstore","root","",{
     dialect : "mysql"
})

db.sync({});

module.exports = db;