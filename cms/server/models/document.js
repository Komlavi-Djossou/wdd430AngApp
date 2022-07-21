const mongoose = require('mongoose');

const documentSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String, required: true },
  children: [String, Number]

});

module.exports = mongoose.model('Post', documentSchema);
