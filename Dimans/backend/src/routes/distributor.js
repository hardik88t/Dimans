const express = require('express');
const Distributor = require('../models/distributor')
const router = express.Router();

const { addDistributor, getDistributors, updateDistributorByName } = require('../controllers/distributor');
const { requireSignin } = require('../common-middleware');
// const {  } = require('../controllers/distributor');

router.post('/distributor/create', requireSignin, addDistributor);

router.get('/distributor/getdistributor', getDistributors);

router.post('/distributor/updatedistributor', updateDistributorByName);

module.exports = router;