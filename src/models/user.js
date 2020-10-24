import mongoose from 'mongoose';

const User = mongoose.model('User', new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        minlength: 6,
        maxlength: 12,
        required: true
    }
}));


export default User;
