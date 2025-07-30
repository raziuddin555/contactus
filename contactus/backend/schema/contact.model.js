const { default: mongoose } = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    requiewd: true,
    trim: true,
    match: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-z]{2,}$/,
  },
  subject: {
    type: String,
    required: true,
    trim: true,
  },
  message: {
    type: String,
    required: true,
    trim: true,
  }
},{timestamps:true});


const contact = mongoose.model('message', contactSchema)
module.exports = contact;