const express = require('express');
const router = express.Router();

const BedCt = require('../models/BedCt');

router.get('/', (req, res) => {
    BedCt.find()
        .then(bedCt => res.json(bedCt));
});

router.put('/', (req, res) => {
    const newBedCt = new BedCt({
        bedCt: req.body.bedCt
    });
    newBedCt.save().then(bedCt => res.json(bedCt));
})

module.exports = router;