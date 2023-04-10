const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const expressValidator = require('express-validator');
require('dotenv').config();

const emailRoutes = require('./routes/email');

const { DATABASE } = require('./config /keys');

// app
const app = express();

// db
mongoose
    .connect(DATABASE, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => console.log('DB Connected'));

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
//app.use(expressValidator());
app.use(cors());
app.use(express.static('client/dist'))
// routes middleware
app.use('/api', emailRoutes);

const port = process.env.PORT || 8000;


if(process.env.NODE_ENV=="production"){
    app.use(express.static('client/dist'))
    const path = require('path')
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','dist','index.html'))
    })
}


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
