const express = require('express');
const Location = require('../models/location')
const router = express.Router();
const slugify = require('slugify');
const { addLocation, getLocations, updateLocationByName } = require('../controllers/location');
// const { requireSignin } = require('../common-middleware');
// router.post('/location/create', requireSignin, addLocation);

router.post('/location/create', addLocation);
console.log('getLoc')
router.get('/location/getlocation', getLocations)
router.post('/location/updatelocation', updateLocationByName);


module.exports = router;