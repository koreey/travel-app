const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewsSchema = new Schema(
    {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  
}, {
  timestamps: true
});


const destinationSchema = new Schema(
{
    category: { 
        type: String

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
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User', required: true
    },
    reviews: [reviewsSchema],

});

module.exports = mongoose.model('Destination', destinationSchema);