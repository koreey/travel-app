const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const{ newDestination,
        newDestinations,
       getDestination,
       getDestinations,
} = require('../controllers/destination')

const destinationSchema = require ('..models/destination');


// GET all destinations
router.get('/', getDestinations ) 

// GET a single destination 
router.get('/:id', getDestination)

// POST a new Destination 
router.post('/', newDestination)

//DELETE a Destination
router.delete('/:id', (req, res)=>{

})

// EDIT a Destination
router.get('/:id/edit', (req, res) =>{

})

module.exports