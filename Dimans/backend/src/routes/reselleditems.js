const express = require('express');
const { addToReselled, getReselledList, getReselledProducts, getReselledProductListByName, getTotalResell, getMonthsResell } = require('../controllers/reselleditems');
// const { requireSignin} = require('../common-middleware');

const router = express.Router();

router.get('/resell/getreselledproductList', getReselledList);
router.get('/resell/getreselledproducts', getReselledProducts);
router.post('/resell/getreselledproductListByName', getReselledProductListByName);
// router.post('/resell/add',requireSignin , addToReselled);
router.post('/resell/add', addToReselled);
router.get('/resell/getTotalResell', getTotalResell);
router.get('/resell/getMonthsResell', getMonthsResell);
module.exports = router;