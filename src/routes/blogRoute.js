import express from 'express';
import {createblog, readblog,readblogs, deleteblog, updateblog} from '../controllers/blogController';

 const blogRouter = express.Router();

blogRouter.get('/selectblog/:id', readblog);
blogRouter.get('/selectblogs', readblogs);
blogRouter.post('/createblog', createblog);
blogRouter.put('/updateblog/:id', updateblog);
blogRouter.delete('/deleteblog/:id', deleteblog);
 

export default blogRouter;
