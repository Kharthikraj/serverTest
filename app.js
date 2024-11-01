const express = require('express')
const fs = require('fs')
const port = 3000
const app = express()

app.use(express.static('./src'))

app.get('/', (req, res) =>{
    fs.readFile('./index.html', 'utf8', (err, data) =>{
        res.send(data)
    })
})

app.get('/home', (req, res) =>{
    let result = Number(req.query.id) + Number(req.query.prev)
    const obj = JSON.stringify([result])
    res.send(obj)
})

app.listen(port, ()=>{
    console.log('listening on http://localhost:3000')
})