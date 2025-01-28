const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
    {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  rating: { type: Number, required: true}
}, {
  timestamps: true
});


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