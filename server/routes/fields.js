const express = require('express');
const SoccerField = require('../models/SoccerFields');
const router = express.Router();

router.get('/fields', async ( req, res)=> {
    try {
        const fields = await SoccerField.findAll();
        res.json(fields);

    } catch (error) {
        res.status(500).json({ error: 'Cant catch the fields'})
    }

});

router.post('/fields', async (req, res) => {
    try {
        const { name, location, description } = req.body;
        const newField = await SoccerField.create({ name, location, description });
        res.json(newField);
    } catch (error) {
        res.status(500).json({ error: 'Cant  add field' });
    }
});

module.exports = router;