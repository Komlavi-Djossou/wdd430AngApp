const mongoose = require('mongoose');

const documentSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  imageUrl: { type: String, required: true },
  group: [String, String]

});

module.exports = mongoose.model('Post', contacttSchema);