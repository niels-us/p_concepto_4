const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors')
const connectDatabase = require('./database/connection');

dotenv.config();
connectDatabase();
const app = express();
app.use(cors())

app.use(express.json());
app.use(require('./routes/index'));
app.use(require('./routes/history'));
app.use(require('./routes/processActivityRegister'));
app.use(require('./routes/processDownloadHistory'));
app.use(require('./routes/formatActivityRegister'));
app.use(require('./routes/formatDownloadHistory'));

module.exports = app;


