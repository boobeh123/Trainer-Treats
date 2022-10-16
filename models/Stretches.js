const mongoose = require('mongoose')

const StretchSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
  },
  instructions: [
    {
    type: String,
    },
],
  muscle: {
    type: String,
    required: true,
  },
  stretchId: {
    type: Number,
  },
  coverImg: {
    type: String,
  },
  demoVideo: {
    type: String,
  }
})

module.exports = mongoose.model('Stretch', StretchSchema)
