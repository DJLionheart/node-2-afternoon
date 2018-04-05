const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();

const app = express();

app.use( bodyParser.JSON() );
app.use( cors() );









massiv( process.env.CONNECTION_STRING ).then( dbInstance => app.set('db', dbInstance))


const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`Ye olde server doth lend an ear at port ${port}.`); } );