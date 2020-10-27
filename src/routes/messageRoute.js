import express from 'express';
import {createContact, readAllContacts, readOneContact, deleteContact } from '../controllers/messageController';

const contactRouter = express.Router();

contactRouter.post('/sendmessage', createContact);
contactRouter.get('/getmessage/:id', readOneContact);
contactRouter.get('/getmessages', readAllContacts);
contactRouter.delete('/deletemessage/:id', deleteContact);

export default contactRouter;
