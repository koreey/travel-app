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

// POST a new Destination 
router.post('/', (req, res) =>{

})

//DELETE a Destination
router.delete('/:id', (req, res)=>{

})

// EDIT a Destination
router.get('/:id/edit', (req, res) =>{

})

module.exports