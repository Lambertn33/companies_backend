const express = require('express');
const {companies} = require('./data');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send({data: companies});
});

module.exports = router;