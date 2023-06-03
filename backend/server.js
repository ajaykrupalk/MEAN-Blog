require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const blogRoutes = require('./routes/blogRoutes')

//express app
const app = express()

//middleware
app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/blogs', blogRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB and Listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })