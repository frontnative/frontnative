const router = require('express').Router();

router.get('/', async (req, res) => {
    res.send('get users!!!')
});


module.exports = router;
