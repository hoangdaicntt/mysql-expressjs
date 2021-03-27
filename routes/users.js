var express = require('express');
var router = express.Router();
const UserController = require('../controllers/user.controller');


router.post('/', async function (req, res, next) {
    const user = req.body.user;
    const result = await new UserController().create(user);
    res.status(200).send(result)
});

router.get('/', async function (req, res, next) {
    const result = await new UserController().list();
    res.status(200).send(result)
});

router.put('/:id', async function (req, res, next) {
    const id = req.params.id;
    const user = req.body.user;
    const result = await new UserController().update(id, user);
    res.status(200).send(result)
});

router.put('/:id', async function (req, res, next) {
    const id = req.params.id;
    const result = await new UserController().delete(id);
    res.status(200).send(result)
});

module.exports = router;
