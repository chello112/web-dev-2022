const express = require('express')
const app = express()
app.get('/', function(req, res){
    res.end('Tere maailm!')
})
app.listen(5000)