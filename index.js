const express = require('express'),
  app = express(),
  config = require('./config.js'),
  port = config.port || 3000,
  { json } = require('body-parser'),
  cors = require('cors'),
  massive = require('massive'),
  studentsCtrl = require('./studentsCtrl');
require('dotenv').config();

app.use(json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set('db', dbInstance);
});

app.get('/api/students', studentsCtrl.getStudents);
app.post('/api/students', studentsCtrl.postStudent);

app.listen(port, () =>
  console.log(`This is Dr Crane... I'm Listening ${port}`)
);
