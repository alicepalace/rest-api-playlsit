const express = require('express');
const router = express.Router();

// get a list of babies from the database
router.get('/babies', function(req, res) {
    res.send({type: 'GET'});
});

// add a new baby to the database
router.post('/babies', function(req, res) {
    console.log(req.body);
    res.send({
        type: 'POST',
        name: req.body.name,
        rank: req.body.rank
    });
});

// update a ninja in the database
router.put('/babies/:id', function(req, res) {
    res.send({type: 'PUT'});
});

// delete a baby from the database
router.delete('/babies/:id', function(req, res) {
    res.send({type: 'DELETE'});
});

module.exports = router;