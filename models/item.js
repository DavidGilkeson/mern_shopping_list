const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  }
});

//The model is exported, so it is brought into other files

module.exports = Item = mongoose.model("item", ItemSchema);
