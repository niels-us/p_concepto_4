const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    console.log('welcome to process ApiRest');
    res.json({
        mensaje: 'welcome to process ApiRest'
    })
})

module.exports = router;
