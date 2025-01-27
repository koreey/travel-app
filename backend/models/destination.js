const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
    {
    username: {},
    rating: {
      type: Number,
      required: true,
    },
        destination: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Destination'
        }

}

);

const destinationSchema = new Schema(
{
    category: { 
        type: String, enum: ['Restaurant', 'Museum', 'Coffee Shop', 'Amusement Park', 'Landmark', 'POI'],

    },
    name: {
        type: String
    },

    description: {
        type: String
    },
    comments :{
        type: String
    },
    reviews: [reviewSchema],

});

module.exports = mongoose.model('Destination', destinationSchema);