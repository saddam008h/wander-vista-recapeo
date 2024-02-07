const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email:
  {
    type: String,
  },
  age:{
    type: Number,
  },

});

const Category = mongoose.model('bu', categorySchema);

module.exports = Category;
