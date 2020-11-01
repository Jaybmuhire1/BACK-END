import express from 'express';
import {signup_user, getAllusers, login_user, delete_user, singleUser, update_user} from '../controllers/signup';
import {adminAuth, userAuth}  from '../middlewares/auth';


 const userRouter = express.Router();

 userRouter.get('/:_id',userAuth, singleUser);
 userRouter.get('/', userAuth, adminAuth, getAllusers);
 userRouter.post('/signup', signup_user);
 userRouter.post('/login', login_user);
 userRouter.put('/:_id',userAuth, update_user);
 userRouter.delete('/:_id',userAuth, adminAuth, delete_user);
 

export default userRouter;

