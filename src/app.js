import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import blogRouter from './routes/blogRoute';
import contactRouter from './routes/messageRoute';
import userRouter from './routes/userRoute';
import commentRouter from './routes/commentRoute';

const app= express();
dotenv.config();

app.use(express.json());
app.use(bodyParser.json());

app.use('/blogs', blogRouter);
app.use('/messages', contactRouter);
app.use('/users', userRouter);
app.use('/comments', commentRouter);


app.use('/', (req,res) =>{
   res.status(200).json({message: 'Welcome to your app'});
})
mongoose.connect('mongodb://localhost:127.0.0.1/Jay-brandDB', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true  
}, 
()=> console.log("mongoDB connected!"));




export default app;
