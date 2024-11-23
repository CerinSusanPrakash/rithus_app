const mongoose = require('mongoose');

const dressimgSchema = new mongoose.Schema({
    dressimgName: String,
    dressimgPath: String,
});

module.exports = mongoose.model('dressImage', dressimgSchema);
