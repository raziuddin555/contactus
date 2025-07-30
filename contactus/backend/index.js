const express = require('express');
const app = express();
const conntectDB = require('./database');
const PORT = 8000
const cors = require('cors')
const contactRouter = require('./router/contact.routes')
require('dotenv').config()
conntectDB()

app.use(express.json())
app.use(cors())
app.get('/', (req, res) => {
    console.log(process.env.DB_URI)
    res.send("Wlcm to home page")
})

app.use('/api/contact', contactRouter)

app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`)
})