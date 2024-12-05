const express = require('express'),
   app = express(),
   port = process.env.PORT || 3000,
   mongoose = require('mongoose'),
   Task = require('./api/models/todoListModel'),
   bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://volinhdatabase:JAGp6QUa0JCOLzCK@cluster0mongodb.4sbx9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0MongoDB');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

const routes = require('./api/routes/todoListRoutes'); //importing route
routes(app);//register the route

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);