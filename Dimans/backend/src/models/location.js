const mongoose = require('mongoose');


const locationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    // coordinates_x: {
    //     type: String,
    // },
    // coordinates_y: {
    //     type: String,
    // },


    // address: {
    //     type: String,
    //     required: true,
    //     trim: true,
    // },
    // city: {
    //     type: String,
    //     required: true,
    //     trim: true,
    // },
    // state: {
    //     type: String,
    //     required: true,
    //     trim: true,
    // },
    // zip: {
    //     type: String,
    //     required: true,
    //     trim: true,
    // },
    // phone: {
    //     type: String,
    //     required: true,
    //     trim: true,
    // },
    // email: {
    //     type: String,
    //     required: true,
    //     trim: true,
    // },
    // website: {
    //     type: String,
    //     required: true,
    //     trim: true,
    // },

}, { timestamps: true });


module.exports = mongoose.model('Location', locationSchema);