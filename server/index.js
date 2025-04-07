const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const CardsModel = require('./models/Cards')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/employee_system")

app.get('/', (req, res) => {
    CardsModel.find({})
    .then(cards => res.json(cards))
    .catch(err => res.json(err))
})

app.get('/getCard/:id',(req,res) => {
    const id = req.params.id;
    CardsModel.findById({_id:id})
    .then(cards => res.json(cards))
    .catch(err => res.json(err))
})

app.put("/updateemployee/:id", (req,res) =>{
    const id = req.params.id;
    CardsModel.findByIdAndUpdate({_id: id},{
        name: req.body.name,
        position: req.body.position,
        department:req.body.department,
        salary: req.body.salary
 })
 .then(cards => res.json(cards))
 .catch(err => res.json(err))
})


app.delete('/deleteCard/:id',(req,res) => {
    const id = req.params.id;
    CardsModel.findByIdAndDelete({_id: id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})

app.post("/addemployee",(req, res) => {
    CardsModel.create(req.body)
    .then(cards => res.json(cards))
    .catch(err => res.json(err))
})


app.listen(3001, () => {
    console.log("Server is Running")
})