import request from 'supertest';
import User from '../src/models/user';
import {generateToken} from '../src/helpers/token';
import mongoose from 'mongoose';

import app from '../src/app';

const dbURL = 'mongodb://localhost:27017/testing';

describe('USER TESTING', () => {


    let token;
    let user1;

    beforeEach(()=>{
        const user = {
            _id: mongoose.Types.ObjectId().toHexString(),
            fullName : "Baptiste Muhire",
            email : "jaybmuhire@gmail.com",
            password : "Andela123"
        };
        user1 = {
          publisher: user.fullName,
          title: 'Amazing journey to software engineering',
          content: 'Did you know you could be whatver you want to be if you are pasioante to it and hard work',
          photo: ""
        
        }
        token = generateToken(user1);
    })
    afterEach(async () => await User.deleteMany());

    
    it("Signup user", async () => {
     await request(app)
            .post('/register')
            .set('auth-token', token)
            .send(user1)

     expect(user1).not.toBe(null);
    });
    
    it("Login user", async () => {
        const res = await request(app)
            .post('/login')
            .send({
                fullName : "Baptiste Muhire",
                email : "jaybmuhire@gmail.com",
                password : "Andela123"
            })

     expect(res.status).toBe(404);
    });
    
    it('read all users', async (done) => {
        const res = await request (app)
        .get('/getusers')
        .set('auth-token', token);
     
        expect(res.status).toBe(200);
        done();
       });
       
       it('It should delete a user', async(done)=>{
        const userToDelete = await User({
            fullName : "Baptiste Muhire",
            email : "jaybmuhire@gmail.com",
            password : "Andela123"
        });
        const deletedUser = await userToDelete.save();
        const id = deletedUser._id;
        const res = await request (app)
            .delete(`/deleteuser/${id}`)
            .set('auth-token', token)
        expect(res.status).toBe(200);  
        done();
    });     
  });

