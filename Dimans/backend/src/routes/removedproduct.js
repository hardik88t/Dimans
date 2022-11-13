const express  = require('express');
const { getRemovedList, getremovedProducts ,getRemovedProductListByName,getTotalScrap,getMonthsScrap} = require('../controllers/removeditems');
const router = express.Router();

router.get('/scrap/getremovedproductList', getRemovedList);
router.get('/scrap/getremovedproducts',getremovedProducts );
router.post('/scrap/getremovedproductListByName', getRemovedProductListByName);
router.get('/scrap/getTotalScrap', getTotalScrap);
module.exports = router;
router.get('/scrap/getMonthsscrap', getMonthsScrap);