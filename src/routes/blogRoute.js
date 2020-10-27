import express from 'express';
import {createblog, readblog,readblogs, deleteblog, updateblog} from '../controllers/blogController';

 const blogRouter = express.Router();

blogRouter.get('/getblog/:id', readblog);
blogRouter.get('/getblogs', readblogs);
blogRouter.post('/createblog', createblog);
blogRouter.put('/updateblog/:id', updateblog);
blogRouter.delete('/deleteblog/:id', deleteblog);
// blogRouter.post('/commentblog/:id', commentblog);

 

export default blogRouter;
