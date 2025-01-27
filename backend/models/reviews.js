const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let reviewSchema = new Schema(
    {
        text:{
            type: String
        },
        destination: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Destination'
        }

}

);
module.exports = mongoose.model('Review', reviewSchema)