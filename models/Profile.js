const Sequelize = require ("sequelize");
const db = require("../config/db");

const User = db.define(
    "dataPelanggan",
    {
        userName : {type:Sequelize.STRING},
        contact : {type:Sequelize.STRING},
        alamat : {type:Sequelize.TEXT},
        metode : {type:Sequelize.STRING},
        bank : {type:Sequelize.STRING},
        jumlahProduk : {type:Sequelize.INTEGER},
        totalHarga : {type:Sequelize.INTEGER},
    },
    {
        freezeTableName : true
    }
);

module.exports = User;