const mongoose = require('mongoose');

const SoccerFieldSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String },
    createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.module('SoccerField, SoccerFieldSchema')