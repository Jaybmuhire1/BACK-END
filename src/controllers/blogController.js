import Blog from '../models/blogModel';


export const createblog = async(req,res)=> {
   try {
      const { title, content} = req.body;
      const { fullName } = req.user;

      const blog = await Blog.findOne({title});
      
      if (blog) return res.status(400).json({msg: 'Blog published before'})
      
      const newBlog = await Blog({
          title,
          publisher: { fullName },
          content
      })

      const savedBlog = await newBlog.save();

      return res.status(201).json({msg: 'blog created', savedBlog})
  } catch (err) {
      return res.status(500).json({msg: err.message})
  }
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

