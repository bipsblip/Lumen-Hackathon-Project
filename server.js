const express=require('express')
const ejs=require('ejs')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const detailSchema=require("./models/detailSchema")

mongoose.set('strictQuery',false)
mongoose.connect("mongodb://127.0.0.1:27017/registered-data").then(()=>{
    console.log("data base connected successfully")

})


const app=express()
app.set('view engine','ejs')   
app.use(express.static('public')) 

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true
})) 

app.post('/box',async(req,res)=>{
    const name=req.body.name
    const email=req.body.email
    const phone=req.body.phone
    const address=req.body.address

    const newuser=await detailSchema.create({
        name,email,phone,address

    })
    res.render("detailsPage",{user: newuser})
})

app.get('/index',(req,res)=>{
    res.render("index")
})


app.listen(2000,()=>{
    console.log("server is running at port number 2000")
})