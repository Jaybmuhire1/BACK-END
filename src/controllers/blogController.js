import Blog from '../models/blogModel';
import {decryptToken} from '../helpers/token'

// const Blog = [];
export const createblog = (req,res)=> {
   const auth = req.header.authorization;
   const token = auth && auth.split('')[1];
   if(!auth) 
      res.status(403).json({message: 'please login'})
   else {
      user = decryptToken(user)['fullName'];
      const blog = req.body;
      blog.publisher = user;
      blog.date = new Date();
      Blog.push(blog)
      res.status(201).json({message: 'blog created', blog, token})
   }

   //   .then((blog) => {
   //      console.log('Blog Created ', blog);
   //      res.statusCode = 200;
   //      res.json(blog);
   //  }, (err) => next(err))
   //  .catch((err) => next(err));
 }

 export const readblog = (req, res, next) =>{
   const {id}=req.params; 
   Blog.findById(id)
    .then((blogs) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(blogs);
    }, (err) => next(err))
    .catch((err) => next(err));
 }
  //Read All blogs
 export const readblogs = (req, res, next) =>{
   Blog.find({})
    .then((blogs) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(blogs);
    }, (err) => next(err))
    .catch((err) => next(err));
 }

 // DELETING A BLOG
 export const deleteblog = async (req, res, next) => {
   let { id } = req.params;
       const existBlog = await Blog.find({ _id: id });
      if (existBlog.length) {
      try {
          const deletedBlog = await Blog.deleteOne({ _id: id });
          res.status(200).send(`Blog is deleted ${existBlog}`);
       }
          catch (error) {
              res.status(500).json({error});
           };
       }
      else { res.status(404).json({ status: 403, error: 'Blog does not exist' });
      };
}
//Comment on Blog


// UPDATING A BLOG

export const updateblog = async (req, res, next) =>{
   try {
      const blog = await Blog.findByIdAndUpdate({ _id: req.params.id }, req.body);
      const updatedBlog = await Blog.findOne({ _id: req.params.id });
      res.status(200).send(updatedBlog);
   }
   catch {
          res.status(400).json(`Error: ${error}`);
   }
}



