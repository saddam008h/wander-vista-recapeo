const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
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

const Bus = mongoose.model('Bus', busSchema);

module.exports = Bus;
