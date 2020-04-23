const mongoose = require('mongoose');
module.exports = mongoose.connect('mongodb://localhost:27017/messages', { useNewUrlParser: true, useUnifiedTopology: true });
