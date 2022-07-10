const express = require('express');
const Category = require('../models/category')
const router = express.Router();
const slugify = require('slugify');
const { addCategory, getCategories, updateCategoryByName, getTotalCategories } = require('../controllers/category');

// const { requireSignin } = require('../common-middleware');
// router.post('/category/create', requireSignin, addCategory);
router.post('/category/create', addCategory);
console.log('getCat')
router.get('/category/getcategory', getCategories);

router.post('/category/updatecategory', updateCategoryByName);

router.get('/category/getTotalcategories', getTotalCategories);
module.exports = router;