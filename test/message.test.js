import request from 'supertest';
import message from '../src/controllers/messageController';
// import {generateToken} from '../src/helpers/token';
import mongoose from 'mongoose';

import app from '../src/index';





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

// describe('GET  MESSAGE BY ITs ID', ()=>{
//   let message1;
    
//       message1 = {
//         fullname : "Kazungu",
//           title : "SOFTWARE TESTING Course", 
//           content : "Did you know you could be whatver you want to be if you are pasioante to it and hard work" 
//       }

//   it('It should GET a message', async(done)=>{
//       const gotMessage = await message(message1);
//       const remainmessage = await gotMessage.save();
//       const id = remainmessage._id;
//       const res = await request (app)
//           .get(`/getmessage/${id}`)
//       expect(res.status).toBe(200);  
//       done();
//   });
// });






describe('GET  A MESSAGE BY ITS ID', ()=>{
  let message1;
  // let token;
  // beforeEach( async()=>{
      // const user = { 
      
      //     fullName : "Kaboss",
      //     email : "kaboss@gmail.com",
          
      // }
      // token = generateToken(user);
      message1 = {
        fullname : "Kaboss", 
          email : "ff@gmail.com",
          content : "Did you know you could be whatver you want to be if you are pasioante to it and hard work", 
           
      }
  // });
  // afterEach(async () => await message.remove());
  it('It should GET a blog', async(done)=>{
      const gotMessage = await message(message1);
      const remainmessage = await gotMessage.save();
      const id = remainmessage._id;
      const res = await request (app)
          .get(`/getmessage/${id}`)
          .set('auth-token', token)
      expect(res.status).toBe(200);  
      done();
  });
});


















// // DELETE BLOG TESTING 

// describe('DELETING  A MESSAGE', ()=>{
//   let message1;
  
//       // const user = { 
//       //     _id: mongoose.Types.ObjectId().toHexString(),
//       //     fullName : "Kazungu",
//       //     email : "kazungu@gmail.com",
//       //     password : "Kazungu1234"
//       // }
      
//       message1 = {
//         fullname : "Kaka",
//           title : "SOFTWARE TESTING Course", 
//           content : "Did you know you could be whatver you want to be if you are pasioante to it and hard work"
          
          
//       }
//   // afterEach(async () => await message1.remove());
//   it('It should delete a blog', async(done)=>{

//       const gotMessage = await message(message1);
//       const remainmessage = await gotMessage.save();
//       const id = remainmessage._id;
//       const res = await request (app)
//           .delete(`/deletemessage/${id}`)
       
//       expect(res.status).toBe(200);  
//       done();
//   });     
// })


