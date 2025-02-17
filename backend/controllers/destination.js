const Destination = require("../models/destination");


// GET all Destinations
const getDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find({}).populate("user");
    res.status(200).json(destinations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET a single Destination
const getDestination = async (req, res) => {
  const { id } = req.params;
  const destination = await Destination.findById(id);
  res.status(200).json(destination);
  if (!destination) {
    return res.status(400).json({ error: "Not an existing Destination" });
  }
};

// Create new Destination

const createDestination = async (req, res) => {
  try { 
    req.body.user = req.user._id
    const destination = await Destination.create(req.body);
    res.status(200).json(destination);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE a Destination
const deleteDestination = async (req, res) => {
  try {
    await Destination.findByIdAndDelete(req.params.id);
    res.json({ message: "Destination Deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// UPDATE a Destination
const updateDestination = async (req, res) => {
  const { id } = req.param;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ err: "No such destination" });
  }
  const destination = await Destination.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!destination) {
    return res.status(400).json({ err: "Not an existing destination" });
  }
};


module.exports = {
  createDestination,
  getDestination,
  getDestinations,
  deleteDestination,
  updateDestination,
};
