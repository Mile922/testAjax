const express=require("express")
const app=express()
var i=0;
app.use('/',express.static('public'))
app.get("/BtCount",(req,res)=>{i++;res.send(i.toString())})
app.listen(10627)