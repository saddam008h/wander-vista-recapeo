const express = require('express');
const { createBus, deleteBus, updateBus, getBusById, getAllBuses } = require('../controllers/busController'); // Assuming your controller file is still named categoryController
const router = express.Router();

// Routes for buses
router.post('/', createBus);
router.get('/', getAllBuses);
router.get('/:id', getBusById);
router.put('/:id', updateBus);
router.delete('/:id', deleteBus);

module.exports = router;
