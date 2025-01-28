const destinationSchema = require ('..models/destination');

// GET all Destinations
const getDestinations = async(req, res) =>{
    const destinations = await Destination.find({})
}

// GET a single Destination 
const getDestination = async (req,res) =>{
    const { id} = req.params
    
    const destination = await Destination.findById(id)

    if(!destination){
        return res.status(400).json({ error: 'Not an existing Destination' });
    }
}

// Create new Destination

const newDestination = async (req, res) =>{
 const{category, name, description, comments} = req.body
 // add doc to database
try{
const destination =  await Destination.create({category, name, description})
} catch (e){
res.status(400).json({error: 'Error'})
}
}


// DELETE a Destination

// EDIT a Destination

module.exports = {
    newDestination,
    getDestination,
    getDestinations,
    
}