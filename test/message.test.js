import request from 'supertest';
import Message from '../src/models/message';
// import message from '../src/controllers/messageController';

import mongoose from 'mongoose';

import app from '../src/app';





describe('MESSAGE TESTING', () => {

  let message1;


      message1 = {
        fullName: 'Karasira',
        email: 'karasira@gmail.com',
        content: 'Did you know you could be whatver you want to be if you are pasioante to it and hard work'
      
      }


  it("it should post a new message", async () => {
   await request(app)
          .post('/sendmessage')
          .send(message1)

   expect(message1).not.toBe(null);
  });
});

// GET ONE BLOG BY ID TESTING 

describe('GET  MESSAGE BY ITs ID', ()=>{
  let message1;
    
      message1 = {
        fullname : "Kazungu",
        email: 'karasira@gmail.com',
          title : "SOFTWARE TESTING Course", 
          content : "Did you know you could be whatver you want to be if you are pasioante to it and hard work" 
      }

  it('It should GET a message', async(done)=>{
      const gotMessage = await Message(message1);
      const remainmessage = await gotMessage.save();
      const id = remainmessage._id;
      const res = await request (app)
          .get(`/getmessage/${id}`)
      expect(res.status).toBe(200);  
      done();
  });
});


// // DELETE BLOG TESTING 

describe('DELETING  A MESSAGE', ()=>{
  let message1;
  
      const user = { 
          _id: mongoose.Types.ObjectId().toHexString(),
          fullName : "Kazungu",
          email : "kazungu@gmail.com",
          password : "Kazungu1234"
      }
      
      message1 = {
        fullname : "Kaka",
        email: 'karasira@gmail.com',
          title : "SOFTWARE TESTING Course", 
          content : "Did you know you could be whatver you want to be if you are pasioante to it and hard work"
          
          
      }
  afterEach(async () => await Message.remove());
  it('It should delete a blog', async(done)=>{

      const gotMessage = await Message(message1);
      const remainmessage = await gotMessage.save();
      const id = remainmessage._id;
      const res = await request (app)
          .delete(`/deletemessage/${id}`)

      expect(res.status).toBe(200);  
      done();
  });     
})



