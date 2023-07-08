const express = require('express');
const router = express.Router();
const Bebe = require('../models/bebe');

// get a list of babies from the database
router.get('/babies', function(req, res) {
    res.send({type: 'GET'});
});

// add a new baby to the database
router.post('/babies', function(req, res, next) {
    //var bebe = new Bebe(req.body);
    //bebe.save();
    Bebe.create(req.body).then(function(bebe) {
        res.send(bebe);
    }).catch(next);
});

// update a ninja in the database
router.put('/babies/:id', function(req, res, next) {
    Bebe.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Bebe.findOne({_id: req.params.id}).then(function(bebe){
            res.send(bebe);
        });
    });
});

// delete a baby from the database
router.delete('/babies/:id', function(req, res, next) {
    //console.log(req.params.id);
    Bebe.findByIdAndRemove({_id: req.params.id}).then(function(bebe){
        res.send(bebe);
    });
    //res.send({type: 'DELETE'});
});

module.exports = router;