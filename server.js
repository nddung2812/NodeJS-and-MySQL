import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes.js'

const app = express();
const port = process.env.PORT || 5000; 

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use('/users', userRoutes)
app.listen(port, () => console.log(`Server started on port: ${port}`));

