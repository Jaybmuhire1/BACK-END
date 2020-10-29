import request from 'supertest';
import Blog from '../src/models/blogModel';
import {generateToken} from '../src/helpers/token';
import mongoose from 'mongoose';

import app from '../src/index';

const dbURL = 'mongodb://localhost:27017/testing';

describe('BLOG TESTING', () => {


    let token;
    let blog;

    beforeEach(()=>{
        const user = {
            _id: mongoose.Types.ObjectId().toHexString(),
            fullName : "Baptiste Muhire",
            email : "jaybmuhire@gmail.com",
            password : "Andela123"
        };
        blog = {
          publisher: user.fullName,
          title: 'Amazing journey to software engineering',
          content: 'Did you know you could be whatver you want to be if you are pasioante to it and hard work',
          photo: ""
        
        }
        token = generateToken(user);
    })
    afterEach(async () => await Blog.deleteMany());

    it("it should post a new blog", async () => {
     await request(app)
            .post('/createblog')
            .set('auth-token', token)
            .send(blog)

     expect(blog).not.toBe(null);
    });
    
  });



  //Read all  blogs

  describe('Read blog', () => {

  let token;

  beforeEach(()=>{
      const user = {
          _id: mongoose.Types.ObjectId().toHexString(),
          fullName : "Baptiste Muhire",
          email : "jaybmuhire@gmail.com",
          password : "Andela123"
      };

      token = generateToken(user);
  })
  afterEach(async () => await Blog.deleteMany());
  it('read all blogs', async (done) => {
   const res = await request (app)
   .get('/getblogs')
   .set('auth-token', token);

   expect(res.status).toBe(200);
   done();
  });
})



  //update blog

  describe('UPDATE BLOG', ()=>{
    let blog;
    let token;
        const user = {
            _id: mongoose.Types.ObjectId().toHexString(),
            firstName : "Simon",
            lastName : "Musirikare",
            email : "samuelm@gmail.com",
            password : "samuel1234"
        }
        token = generateToken(user);
        blog = {
            title : "Amazing journey to software engineering",
            content : "Amazing journey to software engineering",
            content: "Did you know you could be whatver you want to be if you are pasioante to it and hard work",
            publisher : user.firstName,
            photo : ""
        }
    afterEach(async () => await Blog.remove());
    it('It should update a blog', async(done)=>{
        const updatedBlog = await Blog(blog);
        const id = updatedBlog._id;
        const res = await request (app)
            .put(`/updateblog/${id}`)
            .set('auth-token', token)
            .send({
                title : "Amazing journey to software engineering career",
                content: "Did you know you could be whatver you want to be if you are pasioante to it and hard work",
                photo : ""
            })
        expect(res.status).toBe(200);
        done();
    });
  })

// DELETE BLOG TESTING 
describe('DELETING  A BLOG', ()=>{
    let blog;
    let token;
        const user = { 
            _id: mongoose.Types.ObjectId().toHexString(),
            fullName : "Kazungu",
            email : "kazungu@gmail.com",
            password : "Kazungu1234"
        }
        token = generateToken(user);
        blog = {
            title : "SOFTWARE TESTING Course", 
            content : "Did you know you could be whatver you want to be if you are pasioante to it and hard work", 
            publisher : user.fullName,
            photo : ""
        }
    afterEach(async () => await Blog.remove());
    it('It should delete a blog', async(done)=>{
        const blogToDelete = await Blog(blog);
        const deletedBlog = await blogToDelete.save();
        const id = deletedBlog._id;
        const res = await request (app)
            .delete(`/deleteBlog/${id}`)
            .set('auth-token', token)
        expect(res.status).toBe(200);  
        done();
    });     
    
    // it('Not delete a blog', async(done)=>{
    //     const blogToDelete = await Blog(blog1);
    //     const deletedBlog = await blogToDelete.save();
    //     const id = deletedBlog._id;
    //     const res = await request (app)
    //         .delete(`/deleteBlog/${id}`)
    //         .set('auth-token', token)
    //     expect(res.status).toBe(200);  
    //     done();
    // });     
})



// GET ONE BLOG BY ID TESTING 

describe('GET  A BLOG BY IT ID', ()=>{
    let blog;
    let token;
    beforeEach( async()=>{
        const user = { 
            _id: mongoose.Types.ObjectId().toHexString(),
            fullName : "Kaboss",
            email : "kaboss@gmail.com",
            password : "Kazungu1234"
        }
        token = generateToken(user);
        blog = {
            title : "SOFTWARE TESTING Course", 
            content : "Did you know you could be whatver you want to be if you are pasioante to it and hard work", 
            publisher : user.fullName,
            photo : ""
        }
    });
    afterEach(async () => await Blog.remove());
    it('It should GET a blog', async(done)=>{
        const blogToGet = await Blog(blog);
        const gotBlog = await blogToGet.save();
        const id = gotBlog._id;
        const res = await request (app)
            .get(`/getblog/${id}`)
            .set('auth-token', token)
        expect(res.status).toBe(200);  
        done();
    });
});


