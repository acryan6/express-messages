//Message Model
// If you are using mongo/mongoose create your schema here

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/messages', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', () => console.log('error connecting to db'));
db.once('open', () => console.log('Connected to db mydude'));

const MessageSchema = new mongoose.Schema({
  id: Number,
  name: String,
  message: String
});

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;
