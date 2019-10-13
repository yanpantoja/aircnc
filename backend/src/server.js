const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-r1tjk.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
 
//req.query = access query params (for filters)
//req.params = access rout params = http://localhost:3333/users/1  (for edition and delete)
//req.body = access requistion body

//express, use format json:
app.use(express.json());
app.use(routes);

app.listen(3333);