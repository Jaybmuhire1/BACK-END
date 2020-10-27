import User from '../models/user.js';
import bcrypt from 'bcryptjs'; 
import { Router } from 'express'; 
import {generateToken} from '../helpers/token.js';
import hashPassword from '../config/helper/hashpassword'

//Register a user

 export const signup_user = async (req, res) => {    
  try {        
  const { fullName, email, password} = req.body;    
  const checkUser = await User.findOne({email});        
  if (checkUser) {           
  return res.status(400).json({error: 'Email already exist!'}); 
        }   
 
   const hashpass = await hashPassword(password);

   const newUser = new User ({ 
      fullName,            
      email,            
      password : hashpass          
     });  
     const token = generateToken(newUser); 

      const savedUser = await newUser.save();   
      return res.status(201).json({msg: 'Account created successfully',savedUser, token})    
      } catch (err) {        
     return res.status(500).json({error: err.message})    
    } 
   };


//Get all users

export const getAllusers = (req, res, next) =>{
  User.find({})
   .then((users) => {
       res.statusCode = 200;
       res.setHeader('Content-Type', 'application/json');
       res.json(users);
   }, (err) => next(err))
   .catch((err) => next(err));
}

// Get a single user by ID
 export const singleUser = async (req, res) => {
  try {
     const {id} = req.params;
     await User.findById(id).then((users) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(users);
    })
  } catch (err) {
    return res.status(500).json({error: err.message})
  }
}
  
// Login
export const login_user = async (req, res) => {  
  
try {        
const { email, password} = req.body;         
const checkAccount = await User.findOne({email});                  
if (!checkAccount) return res.status(404).json({error: 'Invalid email'});         
 const isValidPass = await bcrypt.compare(password, checkAccount.password) 

 if (!isValidPass) return res.status(400).json({error: 'Invalid password!'}); 

 const token = await generateToken(checkAccount) 
 return res.status(200).json({msg: 'logged in successfully!', token})     
 } catch (err) {       
  return res.status(500).json({error: err.message})   
  } 
};  


 //delete a user 
  
export const delete_user = async (req, res, next) => {
  let { id } = req.params;
      const existUser = await User.find({ _id: id });
     if (existUser.length) {
     try {
         const deletedUser = await User.deleteOne({ _id: id });
         res.status(200).send(`User  deleted ${existUser}`);
      }
         catch (error) {
             res.status(500).json({error});
          };
      }
     else { res.status(404).json({ status: 403, error: 'User does not exist' });
     };
  }

  //Update user

  export const update_user = async (req, res, next) =>{
    try {
       const user = await User.findByIdAndUpdate({ _id: req.params.id }, req.body);
       const updatedUser = await User.findOne({ _id: req.params.id });
       res.status(200).send(updatedUser);
    }
    catch {
           res.status(400).json(`Error: ${error}`);
    }
 }