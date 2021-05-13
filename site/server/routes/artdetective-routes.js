const express = require('express');
const router = express.Router();
const ArtDetectiveModel = require('../models/artdetective-model');

router.get('', (req, res) => {
    ArtDetectiveModel.find({}, (err, data) => {
        res.json(data);
    })
})

router.get('/:id', (req, res) => {
    const dataId = req.params.id;
    ArtDetectiveModel.findOne(({paintingNumber: dataId}), (err, data) => {
        if(err) {return res.status(422).send({error: 'page not found'});}
        return res.json(data);
    })
})

module.exports = router;