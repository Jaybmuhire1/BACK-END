import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import blogRouter from './routes/blogRoute';
import router from './controllers/signup';
import contactRouter from './routes/messageRoute';


const app= express();
dotenv.config();


// app.use(express.json());
app.use(bodyParser.json());
app.use('/', blogRouter);
app.use('/', contactRouter);
app.use('/', router);


mongoose.connect('mongodb://localhost:27017/capstoneDB', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true  
}, 
()=> console.log("mongoDB connected!"));


const PORT = process.env.PORT;

app.listen(PORT, ()=> console.log(`App running on port ${PORT}`));
