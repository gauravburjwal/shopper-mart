const path = require('path');

const express = require('express');

const { products } = require('./admin.js');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true,
    });
});

module.exports = router;
