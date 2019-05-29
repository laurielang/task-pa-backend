const serverless = require('serverless-http');
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.get('/tasks', function (request, response) {

  const username = request.query.username;

  let tasks = [{taskDescrition: "nsoos", complete: false}, {taskDescrition: "nsoos", complete: false}, {taskDescrition: "nsoos", complete: false}, {taskDescrition: "nsoos", complete: false}];

  const someJson = {
    message: "Hello " + username + ", how are you?" + " Here are your tasks" ,
    
    tasks: tasks
  };
  response.json(someJson);
})



module.exports.handler = serverless(app);