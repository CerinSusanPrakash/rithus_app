
// const mongoose = require('mongoose');
// const productSchema=new mongoose.Schema({
//     productName:String,
//     productPrice:Number,
//     productImagelink:String,
//     productDescription:String,
//     productQuantity:Number
// })
// const ProductData=mongoose.model('product',productSchema);
// module.exports=ProductData;



const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    productPrice: { type: Number, required: true },
    productImage: { 
        type: String, // Stores the file path of the uploaded image
        required: true 
    },
    productDescription: { type: String, required: true },
    productQuantity: { type: Number, required: true }
});

const ProductData = mongoose.model('product', productSchema);
module.exports = ProductData;
