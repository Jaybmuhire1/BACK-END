import express from 'express';
import {createblog, readblog,readblogs, deleteblog, updateblog} from '../controllers/blogController';
import {adminAuth, userAuth}  from '../middlewares/auth';



 const blogRouter = express.Router();

blogRouter.get('/getblog/:id',readblog);
blogRouter.get('/getblogs', readblogs);
blogRouter.post('/createblog', userAuth, createblog);
blogRouter.put('/updateblog/:id', updateblog);
blogRouter.delete('/deleteblog/:id',[userAuth, adminAuth], deleteblog);


 

export default blogRouter;

