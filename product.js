const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
   
    description: String,
    price: Number,
    amount: Number,
    expDate: Date,
 });
 const Product = mongoose.model("product", productSchema);

 module.exports = Product;