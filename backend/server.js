const express = require('express')
const app = express()
const cors = require("cors")
const pool = require("./db")

// middleware
app.use(cors())
app.use(express.json())

app.listen(3000, () => {
    console.log("server demmarrer au port 3000");
})