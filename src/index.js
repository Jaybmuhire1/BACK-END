import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import blogRouter from './routes/blogRoute';
import contactRouter from './routes/messageRoute';
import userRouter from './routes/userRoute';


const app= express();


dotenv.config();

const PORT = process.env.PORT;
app.listen(PORT, ()=> console.log(`App running on port ${PORT}`));

app.use(express.json());
app.use(bodyParser.json());
app.use('/', blogRouter);
app.use('/', contactRouter);
app.use('/', userRouter);


mongoose.connect('mongodb://localhost:127.0.0.1/Jay-brandDB', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true  
}, 
()=> console.log("mongoDB connected!"));




export default app;
