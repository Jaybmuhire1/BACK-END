import express from 'express';
import commentController from '../controllers/comentController';
import { userAuth } from '../middlewares/auth';

const commentRouter = express.Router();

commentRouter.post('/:_id',userAuth, commentController.addComment);
commentRouter.get('/:_id', commentController.readComment)



export default commentRouter;
