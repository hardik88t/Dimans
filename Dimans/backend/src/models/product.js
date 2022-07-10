const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },

    price: {
        type: Number,
        required: true
    },
    sellingPrice: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        requires: true
    },

    removedItems: [Number],
    resellItems: [Number],

    category: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true
    },
    location: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Location', required: true
    },
    distributor: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Distributor', required: true
    },

    // createdAt: {
    //     type: Date,
    //     default: Date.now
    // },
    // updatedAt: {
    //     type: Date,
    //     default: Date.now
    // }
    // });
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
