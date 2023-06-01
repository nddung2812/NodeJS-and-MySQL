import connectDB from "./config/data.js";
import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import totalPoint from './routes/totalPoint.js'
connectDB();

const app = express();
const port = process.env.PORT || 5000; 

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.use('/', totalPoint)
app.listen(port, () => console.log(`Server started on port: ${port}`));

