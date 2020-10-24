import mongoose from 'mongoose';

const Message = mongoose.model('Contact', new mongoose.Schema({
    fullname: {
        type: String,
        minlength: 2,
        maxlength: 100,
        required: true
    },
    email: {
        type: String,
        minlength: 5,
        maxlength: 10000,
        required: true
    },
    content: {
        type: String,
        minlength: 2,
        maxlength: 100,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
}));
export default Message;
