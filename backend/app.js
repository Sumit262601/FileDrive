const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const cors = require('cors');
const cookiesParser = require('cookie-parser');
const connectToDb = require('./db/db');
const userRouter = require('./routes/user.routes');

connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cookiesParser());

app.use('/user', userRouter);

module.exports = app;