const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = new Schema({

    name: { type: String, required: [true, "Enter Your name"], trim: true },

    description: { type: String, required: [true, "Enter Your description"] },

    price: {
        type: Number,
        maxlength: [8, 'Price cannot exceeds 8 character']
    },

    images: [
        {
            public_id: {
                type: String,

            },
            url: {
                type: String,

            }
        }
    ],

    category: {
        type: String,


    },


    createAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Product", productSchema)