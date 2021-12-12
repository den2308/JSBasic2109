const express = require('express')
const appRouter = require('./router')
const app = express()

app.use('/main', appRouter)
app.get('/', (req, res) => {
    res.send('Hello World')
})
app.all('/secret', (req, res, next) => {
    console.log('User have access')
    next()
})
app.listen(3000, () => {
    console.log('Server is up')
})