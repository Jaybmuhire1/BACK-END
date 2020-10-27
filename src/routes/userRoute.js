import express from 'express';
import {signup_user, getAllusers, login_user, delete_user, singleUser, update_user} from '../controllers/signup';


 const userRouter = express.Router();

 userRouter.get('/getuser/:id', singleUser);
 userRouter.get('/getusers', getAllusers);
 userRouter.post('/register', signup_user);
 userRouter.post('/login', login_user);
 userRouter.put('/updateuser/:id', update_user);
 userRouter.delete('/deleteuser/:id', delete_user);
 

export default userRouter;

