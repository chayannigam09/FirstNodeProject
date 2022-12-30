const express = require('express');
const app = express()
require('./modals/index')
let userctrl = require('./controllers/userController')
app.get('/',(req,res)=>{
    res.send('Hello Express')
})
app.get("/add",userctrl.addUser);
app.get("/crud",userctrl.crudOp);
app.get('/help',(req,res)=>{
    res.send('<h1>Help page</h1>')
})
app.get('/product',(req,res)=>{
    if(!req.query.search){
        return res.send({
            error:'must need a query '
        })
    }
    console.log(req.query)
    res.send({
        product:[]
    })
})

app.get("/oneToOne", userctrl.oneToOne)

app.listen(3001,()=>{
    console.log('Server running on port 3001');
})