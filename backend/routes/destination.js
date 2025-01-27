const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

let destinationSchema = require ('..models/destinations');
let reviewSchema = require ('..models/reviews');

// GET all destinations
router.get('/', (req, res) => {

})

// GET a single destination 
router.get('/:id', (res, req) =>{
    
})

module.exports