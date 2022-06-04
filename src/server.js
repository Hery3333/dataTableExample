const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

var data = require('./dataSource.json');

//all record
app.post('/orders', function(req, res){
    return res.json({ result: data, count: data.length })
})


//insert
app.post('/orders/insert', function(req,res){
    data.splice(0,0,req.body.value);
    return res.status(200).send('row inserted')
})

//remove
app.post('/orders/delete', function(req,res){
    data = data.filter(x => x.OrderID != req.body.key);
    return res.status(200).send('Row deleted')
})
//update
app.post('/orders/update', function(req, res){
    var index = data.findIndex(x => x.OrderID === req.body.value.OrderID);
    data.splice(index, 1, req.body.value)
    return res.status(200).send('Row Updated')
})

app.listen(8080)