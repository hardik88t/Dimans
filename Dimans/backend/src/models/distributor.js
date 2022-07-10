const mongoose = require('mongoose');


const distributorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,

    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },

    contactNumber: {
        type: String
    },
    address: {
        type: String,
        required: true,
        trim: true,
    },
    role: {
        type: String,
        enum: ['distributor', 'wholesaler', 'customer', 'vendor', 'agency'],
        default: 'distributor'
    }

    // discategoryid: {
    //     type: mongoose.Schema.Types.ObjectId, ref: 'DisCategory', required: true
    // },


}, { timestamps: true });


module.exports = mongoose.model('Distributor', distributorSchema);