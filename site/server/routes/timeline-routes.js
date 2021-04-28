const express = require('express');
const router = express.Router();
const TimelineModel = require('../models/timeline-model');

router.get('', (req, res) => {
    TimelineModel.find({}, (err, data) => {
        res.json(data);
    })
})

router.get('/:id', (req, res) => {
    const dataId = req.params.id;
    TimelineModel.findById((dataId), (err, data) => {
        if(err) {return res.status(422).send({error: 'page not found'});}
        return res.json(data);
    })
})

module.exports = router;
