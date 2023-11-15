const express = require('express')
const app = express()
const PORT = process.env.PORT || 4500

const homeRouter = require('./routes/home')

app.use(express.json())

app.use('/home', homeRouter)

app.get('/', (req, res) => {
    res.json({message:"Welcome to my API"})
})

app.listen(PORT, () => {
    console.log("Express API is running", PORT)
})