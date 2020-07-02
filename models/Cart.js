const Sequelize = require ("sequelize");
const db = require("../config/db");

const Cart = db.define(
    "cartTabel",
    {
        idProduk : {type:Sequelize.UUID},
        namaProduk : {type:Sequelize.STRING},
        hargaProduk : {type:Sequelize.INTEGER},
        sizeProduk : {type:Sequelize.STRING},
        jumlahProduk : {type:Sequelize.INTEGER},
        gambarProduk : {type:Sequelize.STRING}
    },
    {
        freezeTableName : true
    }
);

module.exports = Cart;