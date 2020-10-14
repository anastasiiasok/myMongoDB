const mongoose = require("mongoose");


const orderSchema = new mongoose.Schema({
 
    description: String,
    price: Number,
    amount: Number,
    idUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    idProduct: { type: mongoose.Schema.Types.ObjectId, ref: 'Product'}
    
    })

const Order = mongoose.model("Order", orderSchema);

module.exports = Order ;