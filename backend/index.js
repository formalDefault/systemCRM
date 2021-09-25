const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const { mongoose } = require('./database');
var cors = require('cors'); 
app.use(cors());

//configuraciones
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api/system', require('./routes/api-routes'));

//Front end, se necesita compilar para ver cambios
app.use(express.static(path.join(process.cwd(), 'frontend', 'public')));

//star server 
app.listen(app.get('port'));