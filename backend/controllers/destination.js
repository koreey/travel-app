const destinationSchema = require ('..models/destination');
const { default: mongoose } = require('mongoose');

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

const createDestination = async (req, res) =>{
 const{category, name, description, comments} = req.body
 // add doc to database
try{
const destination =  await Destination.create({category, name, description})
} catch (e){
res.status(400).json({error: 'Error'})
}
}


// DELETE a Destination
const deleteDestination = async (req, res) =>{
    const { id } = req.param
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'No such destination'})
    }
    const destination = await Destination.findOneAndDelete({_id: id})
    if(!destination){
        return res.status().json(destination)
    }
}
// UPDATE a Destination
const updateDestination = async (req, res) =>{

const { id } = req.param
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'No such destination'})
    }
    const destination = await Destination.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if(!destination){
        return res.status(400).json({ error: 'Not an existing destination' });
    }
}

module.exports = {
    createDestination,
    getDestination,
    getDestinations,
    deleteDestination,
    updateDestination
    
}