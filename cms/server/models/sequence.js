const mongoose = require('mongoose');

const sequenceSchema = mongoose.Schema({
  value: { type: String, required: true }

});

module.exports = mongoose.model('Post', sequenceeSchema);