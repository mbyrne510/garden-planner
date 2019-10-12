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
    BedCt.update({_id: "5da1fa2f1c9d4400002c36d5"}, {$set: updObj})
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