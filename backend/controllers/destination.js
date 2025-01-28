const destinationSchema = require ('..models/destination');

// GET all Destinations

// GET a single Destination 

// POST new Destination

const newDestination = async (req, res) =>{
 const{category, name, description, comments} = req.body
 // add doc to database
try{
const destination =  await Destination.create({category, name, description})
} catch (e){

}
}


// DELETE a Destination

// EDIT a Destination

module.exports = {
    newDestination
}