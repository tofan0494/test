var mongoose = require("mongoose");

var PostSchema = mongoose.Schema({
  id: mongoose.Types.ObjectId,
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },

  price: {
    type: Number,
    require: true,
  },

  phone: {
    type: Number,
    require: true,
  },

  date: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("Plan", PostSchema);
