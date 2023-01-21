const express = require('express')
const mongoose = require('mongoose')

const users = require('./routes/api/users')
const tasks = require('./routes/api/tasks')

const app = express()

const keys = require('./config/keys')

mongoose
    .connect(keys.mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err))

app.get('/', (req, res) => {
    res.send('Hello')
})

app.use('/api/users', users)
app.use('/api/tasks', tasks)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`server running on port ${port}`));