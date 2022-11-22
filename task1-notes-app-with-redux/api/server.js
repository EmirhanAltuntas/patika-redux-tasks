const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require('cors');
const { json } = require('body-parser');
const { nanoid } = require('nanoid');

dotenv.config({ path: './config.env' });

const app = express();

app.use(cors());
app.use(json());

let notes = [
  {
    id: nanoid(),
    title: 'note 1',
    color:'#cddc39',
  },
  {
    id: nanoid(),
    title: 'note 2',
    color:'#03a9f4',
  },
  {
    id: nanoid(),
    title: 'note 3',
    color:'#ffeb3b',
  },

];

app.get('/notes', (req, res) => res.send(notes));

app.post('/note', (req, res) => {
  const note = { title: req.body.title, id: nanoid(),color:req.body.color};
  notes.push(note);
  return res.send(note);
});


app.delete('/notes/:id', (req, res) => {
  const id = req.params.id;
  const index = notes.findIndex((note) => note.id == id);
  if (index > -1) {
    notes.splice(index, 1);
  }

  res.send(notes);
});

const PORT = 7000;

app.listen(PORT, console.log(`Server running on port ${PORT}`.green.bold));