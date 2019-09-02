const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
// routes
const usersRoutes = require('./routes/users');

dotenv.config();

// connect to DB
mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true}, () => console.log('connected to DB'));

app.use(cors());
app.use(express.json());

app.use('/users', usersRoutes);

app.listen(process.env.PORT, () => {
    console.log('server is running')
});