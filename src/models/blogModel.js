import mongoose from 'mongoose';

const Blog = mongoose.model('Blog', new mongoose.Schema({
    title: {
        type: String,
        minlength: 2,
        maxlength: 100,
        required: true
    },
    content: {
       type: String,
        minlength: 5,
        maxlength: 10000,
        required: true
    },
    publisher: {
        type: String,
        minlength: 2,
        maxlength: 100,
        required: true
    },
    publishedOn: {
        type: Date,
        default: new Date()
    },
    editedOn: {
      type: Date,
      default: new Date()
  },
    photo: {
        type: String,
        required: false
    }
}));

export default Blog;
