import express from 'express';
import {createContact, readAllContacts, readOneContact, deleteContact } from '../controllers/messageController';

const contactRouter = express.Router();

contactRouter.post('/', createContact);
contactRouter.get('/:_id', readOneContact);
contactRouter.get('/getmessages', readAllContacts);
contactRouter.delete(':_id', deleteContact);

export default contactRouter;
