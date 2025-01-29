const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const{ createDestination,
       getDestination,
       getDestinations,
       deleteDestination,
       updateDestination,
} = require('../controllers/destination')

// GET all destinations
router.get('/', getDestinations ) 

// GET a single destination 
router.get('/:id', getDestination)

// Create a new Destination 
router.post('/', createDestination)

//DELETE a Destination
router.delete('/:id', deleteDestination)

// UPDATE a Destination
router.get('/:id', updateDestination)

module.exports = router;