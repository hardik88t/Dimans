const express = require('express');

// const { requireSignin} = require('../common-middleware');
const { createProduct, getProducts, getProductByName, updateProductByName, getProductList, getrecentProductList, getProductListByName, deleteProduct, getTotalItems, getMonthsCost } = require('../controllers/product');
const router = express.Router();


// router.post('/product/create', requireSignin, createProduct);

router.post('/product/create', createProduct);

router.get('/product/getproducts', getProducts);
router.get('/product/getTotalItems', getTotalItems);
router.post('/product/getproductbyname', getProductByName);
router.post('/product/updateproduct', updateProductByName);
router.get('/product/getproductlist', getProductList);
router.get('/product/getrecentproductlist', getrecentProductList);
router.post('/product/getproductlistbyname', getProductListByName);
// router.post('/product/delete',requireSignin, deleteProduct);
router.post('/product/delete', deleteProduct);
router.get('/product/getMonthsTotal', getMonthsCost);

module.exports = router;