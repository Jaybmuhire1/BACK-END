import express from 'express';

import router from '../controllers/signup';

 const userRouter = express.Router();

 userRouter.get('/getuser:id', getuser);
//  userRouter.post('/register', register);
 userRouter.put('/updateuser:id', updateuser);
 userRouter.delete('/deleteuser:id', deleteuser);
 

export default userRouter;



import User from '../models/user';
import { Router } from 'express';
import router from 'routes/User'

const router = new Router()

router.post('/register', async (req, res) => {
    try {
        const { fullName, email, password} = req.body;

        const checkUser = await User.findOne({email});
        if (checkUser) {
            return res.status(400).json({error: 'Email already exist!'});
        }
        
        const newUser =  new User({
            fullName,
            email,
            password
        });

        const savedUser = await newUser.save();
        return res.status(201).json({msg: 'Account created successfully', savedUser})
    } catch (err) {
        return res.status(500).json({error: err.message})
    }
});

export default userRoute;
