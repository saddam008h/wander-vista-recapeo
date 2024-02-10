const Bus = require('../models/busModel');

// Controller to create a new bus
module.exports.createBus = async (req, res) => {
  try {
    console.log(req.body);
    const { name, destCity, departCity, departDate, departTime, arrivDate, arrivTime } = req.body;
    const newBus = new Bus({ name, destCity, departCity, departDate, departTime, arrivDate, arrivTime });
    const savedBus = await newBus.save();
    res.status(201).json(savedBus);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to get all buses
module.exports.getAllBuses = async (req, res) => {
  try {
    const buses = await Bus.find();
    res.status(200).json(buses);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to get a specific bus by ID
module.exports.getBusById = async (req, res) => {
  try {
    const busId = req.params.id;
    const bus = await Bus.findById(busId);
    if (!bus) {
      return res.status(404).json({ message: 'Bus not found' });
    }
    res.status(200).json(bus);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to update a bus by ID
module.exports.updateBus = async (req, res) => {
  try {
    const busId = req.params.id;
    const { name, destCity, departCity, departDate, departTime, arrivDate, arrivTime } = req.body;

    const updatedBus = await Bus.findByIdAndUpdate(
      busId,
      { name, destCity, departCity, departDate, departTime, arrivDate, arrivTime },
      { new: true }
    );
    if (!updatedBus) {
      return res.status(404).json({ message: 'Bus not found' });
    }
    res.status(200).json(updatedBus);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to delete a bus by ID
module.exports.deleteBus = async (req, res) => {
  try {
    const busId = req.params.id;
    const deletedBus = await Bus.findByIdAndDelete(busId);
    if (!deletedBus) {
      return res.status(404).json({ message: 'Bus not found' });
    }
    res.status(200).json({ message: 'Bus deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
