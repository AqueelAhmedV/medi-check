const express = require('express')
const router = express.Router()

router.get('/test', (req, res) => res.json({msg:"tasks works!"}))

module.exports = router;