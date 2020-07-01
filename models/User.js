const Sequelize = require ("sequelize");
const db = require("../config/db");

const User = db.define(
    "dataProduk",
    {
        idProduk : {type:Sequelize.UUID},
        namaProduk : {type:Sequelize.STRING},
        hargaProduk : {type:Sequelize.INTEGER},
        kategoriProduk : {type:Sequelize.STRING},
        gambarProduk : {type:Sequelize.STRING},
        gambarProduk2 : {type:Sequelize.STRING},
        gambarProduk3 : {type:Sequelize.STRING},
        gambarProduk4 : {type:Sequelize.STRING},
        keteranganProduk : {type:Sequelize.TEXT}
    },
    {
        freezeTableName : true
    }
);

module.exports = User;