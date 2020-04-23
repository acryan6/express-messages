const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const cors = require('cors');

// if you are using mongo/mongoose uncomment this line
const Message = require('./db/Message');

// if you are using postgres, uncomment this line
// const pool = require('./db/pgconfig');

app.use(bodyParser.json());
// app.use(cors());

const port = 3000;

app.listen(port, () => {
  console.log('Listening on port', port);
});

app.post('/api/messages', (req, res) => {
  console.log(req.body);
  let newMessage = new Message(req.body);
  newMessage.save((err) => {
    if (err) {
      return console.log(err);
    }
  });
  res.end();
});

app.get('/api/messages', (req, res) => {
  Message.find().then(messages => res.send(messages));
});

app.put('/api/messages/:id', async (req, res) => {

  // let newMessage = new Message(req.body);
  await Message.updateOne({ id: req.params.id }, req.body);
  res.end();
});

app.delete('/api/messages/:id', (req, res) => {
  Message.deleteOne({ id: req.params.id }, (err) => {
    if (err) {
      return console.log(err);
    }
  }).then(() => res.end());
});

app.get('/api/messages/:id', (req, res) => {

  Message.findOne({ id: req.params.id }, (err) => {
    if (err) {
      return console.log(err);
    }
  }).then((message) => res.send(message));
});

module.exports = app;
