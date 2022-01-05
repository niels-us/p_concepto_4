const express = require('express');
const app = express();
const cors = require('cors')
const dotenv = require('dotenv');
const connectDatabase = require('./database/connection');

dotenv.config();
connectDatabase();
app.use(cors())
app.use(express.json());

app.use(require('./routes/index'));
app.use(require('./routes/process'));
app.use(require('./routes/meansVerification'));

module.exports = app;

