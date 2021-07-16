const express = require('express');
const router = express.Router();
const booksService = require('../service/redisService');

router.get('/redis', async function(req, res) {
    const redis = await redisService.getRedis();
    res.json(redis);
});

router.get('/redis/:id', async function (req, res) {
    const redis = await redisService.getRedis(req.params.id);
    res.json(redis);
});

router.delete('/redis/:id', async function(req, res) {
    try {
        const redis = await books.deleteRedis(req.params.id);
        return res.status(201).json({id: req.params.id,  message: 'registro excluído com sucesso'});
    } catch (error) {
        return res.status(404).send(e.message);
    }
});

router.post('/redis', async function(req, res) {
    try {
        const redis = req.body;
        console.log(redis);
        const newRedis = await booksService.saveRedis(redis);
        console.log(newRedis);
        res.json(newRedis);
    } catch (error) {
        res.json({messagem: error.message });
    }
});

module.exports = router;