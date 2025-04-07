const mongoose = require('mongoose')

const CardsSchema = new mongoose.Schema({
    name: String,
    position: String,
    department: String,
    salary: Number
})

const CardsModel = mongoose.model("cards", CardsSchema)
module.exports = CardsModel