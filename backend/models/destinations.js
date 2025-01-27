const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema(
{
    category: { 
        type: String, enum: ['Restaurant', 'Museum', 'Coffee Shop', 'Amusement Park', 'POI']},
    }

);module.exports = mongoose.model('Destinations', destinationSchema);