const mongoose = require('mongoose');


const removedproductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    //Reason for removal
    reason: {
        type: String,
        trim: true,
    },

    itemid: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true
    },
    quantity: {
        type: Number,
        requires: true
    },
    amount: {
        type: Number,
        requires: true
    },
    removedNos: [Number],
    updatedAt: Date,


}, { timestamps: true });


module.exports = mongoose.model('RemovedProduct', removedproductSchema);