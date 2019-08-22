const express = require('express')
const app = express()
const port = 1337
const db = require('../db/db_server.js')

/* Middlewares */
app.use(express.static('./public'))


/* Routes */

//app.get('/', (req, res) => res.send('Hello World!'))


/* Server Creation */

app.listen(port, () => console.log(`Example app listening on port ${port}!`))