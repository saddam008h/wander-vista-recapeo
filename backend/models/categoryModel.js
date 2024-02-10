const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  
  destCity:
  {
    type: String,
  },
  departCity:{
    type: String,
  },
  departDate:{
    type: String,
  },
  departTime:{
    type: String,
  },
  arrivDate:{
    type: String,
  },
  arrivTime:{
    type: String,
  },


});

const Category = mongoose.model('bu', categorySchema);

module.exports = Category;
