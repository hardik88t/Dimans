const mongoose = require('mongoose');


const reselledproductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },

    itemid: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true
    },
    quantity: {
        type: Number,
        requires: true
    },
    price: {
        type: Number,
        requires: true
    },
    dateReselled: {
        type: Date,
        required: true,
    },

    distributorid: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Distributor', required: true
    },
    // customername: {
    //     type: String,
    //     required: true,
    // },
    // customeremail: {
    //     type: String,
    //     lowercase: true
    // },

    // customercontactNumber: {
    //     type: String
    // },
    // customeraddress: {
    //     type: String,
    //     required: true,
    //     trim: true,

    // },

}, { timestamps: true });


module.exports = mongoose.model('ReselledProduct', reselledproductSchema);