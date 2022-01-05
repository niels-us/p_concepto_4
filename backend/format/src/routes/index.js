const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    console.log('welcome to format ApiRest');
    res.json({
        mensaje: 'welcome to format ApiRest'
    })
})
module.exports = router;