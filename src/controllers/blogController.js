import Blog from '../models/blogModel';
// import express from 'express';

export const createblog = (req,res,next)=>{
    Blog.create(req.body)
     .then((blog) => {
        console.log('Blog Created ', blog);
        res.statusCode = 200;
        res.json(blog);
    }, (err) => next(err))
    .catch((err) => next(err));
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

 export const readblogs = (req, res, next) =>{
   Blog.find({})
    .then((blogs) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(blogs);
    }, (err) => next(err))
    .catch((err) => next(err));
 }

 
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