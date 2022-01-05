const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    console.log('welcome to History ApiRest');
    res.json({
        mensaje: 'welcome to History ApiRest'
    })
})
module.exports = router;