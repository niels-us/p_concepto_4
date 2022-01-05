const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const connectDatabase = require('./database/connection');

dotenv.config();
connectDatabase();
const app = express();
app.use(cors())

app.use(express.json());
app.use(require('./routes/index'));
app.use(require('./routes/format'));
app.use(require('./routes/comment'));
app.use(require('./routes/indicator'));
app.use(require('./routes/field'));
app.use(require('./routes/fieldAdditional'));
app.use(require('./routes/data'));


module.exports = app;

