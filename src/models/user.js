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
    admin:{
       type: Boolean,
       default: false 
    },
    role: {
        type: String,
        default:"standard user"
       },
    password: {
        type: String,
        minlength: 6,
        maxlength: 150,
        required: true
    }
}));


export default User;
