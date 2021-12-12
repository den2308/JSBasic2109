const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Home page')
})

router.get('/about-company', (req, res) => {
    res.send('About company page')
})

router.get('/user', (req, res) => {
    res.send('User page')
})

module.exports = router