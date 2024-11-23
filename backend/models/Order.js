// const mongoose = require('mongoose');
// const orderSchema=new mongoose.Schema({
//     orderName:String,
//     orderAddress:String,
//     orderPhoneNumber:Number,
//     orderQuantity:Number,
//     orderDes:String
// })
// const OrderData=mongoose.model('order',orderSchema);
// module.exports=OrderData;

// const mongoose = require('mongoose');

// const orderSchema = new mongoose.Schema({
//   orderName: { type: String, required: true },
//   orderAddress: { type: String, required: true },
//   orderPhoneNumber: { type: String, required: true },
//   orderQuantity: { type: Number, required: true },
//   upiTransactionId: { type: String, required: true },
//   productName: { type: String, required: true},
// // productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
//   paymentImage: { type: String }, // Store the file path of the uploaded payment screenshot
// }, { timestamps: true });

// const OrderData = mongoose.model('order', orderSchema);

// module.exports = OrderData;

const mongoose = require('mongoose');

// Define the order schema
const orderSchema = new mongoose.Schema(
  {
    orderName: { type: String, required: true },
    orderAddress: { type: String, required: true },
    orderPhoneNumber: { type: String, required: true },
    orderQuantity: { type: Number, required: true },
    upiTransactionId: { type: String, required: true },
    productName: { type: String, required: true },
    // Uncomment if linking to Product model in the future
    // productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    paymentImage: { type: String }, // Path to payment screenshot
  },
  { timestamps: true } // Automatically add `createdAt` and `updatedAt`
);

// Create the Order model
const Order = mongoose.model('order', orderSchema);

module.exports = Order;
