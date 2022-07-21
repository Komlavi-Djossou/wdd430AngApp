const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
  subject: { type: String, required: true },
  msgText: { type: String, required: true },
  sender: { type: String, required: true }

});

module.exports = mongoose.model('Post', messageSchema);