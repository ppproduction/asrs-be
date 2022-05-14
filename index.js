require('dotenv').config();

const cors = require('cors')
const express = require('express');
const mongoose = require('mongoose');
const apis = require('./routes/router');

const app = express();
mongoose.connect(process.env.MONGO_URI,(e) => {
    if(e) console.error('DB connection error! ' + e);
    else console.log('Connected to mongodb!');
});
app.listen(process.env.PORT, () => { console.log('server started on port 3001') });

app.use(cors());
app.use(express.json());
app.use('/api', apis);