const express = require('express')
const mongoose = require('mongoose');
const appRouter = require('./router')
const app = express()

// app.use('/main', appRouter)
// app.get('/', (req, res) => {
//     res.send('Hello World')
// })
// app.all('/secret', (req, res, next) => {
//     console.log('User have access')
//     next()
// })
// app.listen(3000, () => {
//     console.log('Server is up')
// })

const mongoDB = 'mongodb://127.0.0.1/jsbasic';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

const db = mongoose.connection;

const Schema = mongoose.Schema;

const SomeMOdelSchema = new Schema(
    {
        timestamp: { type: Date, default: Date.now() },
        username: String
    }
)

const SomeModel = mongoose.model('SomeModel', SomeMOdelSchema)

//first variant of create something in DB
const first_element_in_db = new SomeModel({ username: 'John Weak', })
first_element_in_db.save((err) => {
    if (err) {
        console.error('error to write in DB', err)
    }
})
//second variant create something in DB
SomeModel.create({ username: 'John not Weak' }, (err, itemRecord) => {
    if (err) {
        console.error('error to write in DB', err)
    }
    console.log('itemRecord', itemRecord)
})

//find something in DB
SomeModel.find({ username: 'John Weak' }, (err, foundItems) => {
    if (err) {
        console.log(err)
    }
    console.log('found items', foundItems)
})


db.on('error', console.error.bind(console, 'MongoDB connection has error: '))
db.on('open', console.log.bind(console, `Connection is established! ${Date.now()}`))