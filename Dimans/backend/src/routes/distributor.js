const express = require('express');
const Distributor = require('../models/distributor')
const router = express.Router();

const { addDistributor, getDistributors, updateDistributorByName } = require('../controllers/distributor');
// const {  } = require('../controllers/distributor');

// const { requireSignin } = require('../common-middleware');
// router.post('/distributor/create', requireSignin, addDistributor);

// console.log('addDist')
router.post('/distributor/create', addDistributor);
// console.log('getDist')
router.get('/distributor/getdistributor', getDistributors);
// console.log('updateDist')
router.post('/distributor/updatedistributor', updateDistributorByName);

module.exports = router;