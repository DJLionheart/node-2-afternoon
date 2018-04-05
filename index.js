const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const ctrl = require('./products_controller');
require('dotenv').config();

const app = express();

app.use( bodyParser.json() );
app.use( cors() );
massive( process.env.CONNECTION_STRING ).then( dbInstance => app.set('db', dbInstance))


app.get('/api/products', ctrl.getAll);

app.get('/api/product/:id', ctrl.getOne);

app.put('/api/product/:id?desc', ctrl.update);

app.post('/api/product', ctrl.create);

app.delete('/api/product/:id', ctrl.delete);










const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`Ye olde server doth lend an ear at port ${port}.`); } );