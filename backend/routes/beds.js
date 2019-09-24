const express = require('express');
const router = express.Router();

const Bed = require('../models/Bed');

router.get('/', (req, res) => {
    Bed.find()
        .then(beds => {
            console.log(beds);
            res.json(beds);
        });
});

router.post('/', (req, res) => {
    const newBed = new Bed({
        plants: req.body.plants,
        numRows: req.body.numRows,
        numCols: req.body.numCols,
        maxRows: req.body.maxRows,
        maxCols: req.body.maxCols,
        minRows: req.body.minRows,
        minCols: req.body.minCols
    });
    newBed.save().then(bed => res.json(bed));
})

router.patch('/:bedId', (req, res) => {
    const updObj = req.body;
    Bed.update({_id: req.params.bedId}, {$set: updObj})
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
        })
})

router.delete('/:id', (req, res) => {
    Bed.findById(req.params.id)
        .then(bed => bed.remove())
        .then(() => res.json({success: true}))
        .catch(err => res.status(404).json({success: false}));
})

router.patch('/:bedId/plants', (req, res) => {
    const updObj = req.body;
    Bed.update({_id: req.params.bedId}, {$set: updObj})
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
})

module.exports = router;