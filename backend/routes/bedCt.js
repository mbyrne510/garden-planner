const express = require('express');
const router = express.Router();

const BedCt = require('../models/BedCt');

router.get('/', (req, res) => {
    BedCt.find()
        .then(bedCt => {
            res.json(bedCt);
        });
});

router.put('/', (req, res) => {
    updObj = req.body;
    BedCt.update({_id: "5d8985ea26be3b0245cd0c34"}, {$set: updObj})
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

module.exports = router;