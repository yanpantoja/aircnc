const express = require('express');
const routes = require('./routes');

const app = express();

//req.query = access query params (for filters)
//req.params = access rout params = http://localhost:3333/users/1  (for edition and delete)
//req.body = access requistion body

//express, use format json:
app.use(express.json());
app.use(routes);

app.listen(3333);