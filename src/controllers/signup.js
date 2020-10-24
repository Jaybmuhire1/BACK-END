import User from '../models/user.js';
import bcrypt from 'bcryptjs'; 
import { Router } from 'express'; 
import {generateToken} from '../helpers/token.js'

const router = new Router();

//Register a user

router.post('/register', async (req, res) => {    
  try {        
  const { fullName, email, password} = req.body;    
  const checkUser = await User.findOne({email});        
  if (checkUser) {           
  return res.status(400).json({error: 'Email already exist!'}); 
        }   
 
  //  const newUser = req.body;
  
   const token = generateToken(newUser); 
   console.log(token);

   const newUser = new User ({ 
      fullName,            
      email,            
      password          
     });  
               
      const savedUser = await newUser.save();   
      return res.status(201).json({msg: 'Account created successfully',newUser})    
      } catch (err) {        
     return res.status(500).json({error: err.message})    
    } 
   });


//Get all users

router.get('/getusers', async (req, res) => {    
  try {        
  const { fullName, email, password} = req.body;    
  const checkUser = await User.find({fullName, email, password});        
  if (checkUser) { 
    User.find({checkUser})            
   }                  
  } catch(err) {
    res.status(400).json({error: 'User not signed in'});  
  }   
});

//Get a single user
// roouter.get('/getuser', async (req, res)) => {
//   try {
//     await
//     const {id}=req.params; 
//     User.findById(id)
//     .then((users) => {
//       res.statusCode = 200;
//       res.setHeader('Content-Type', 'application/json');
//       res.json(users);
//   } catch (err);
// } 
// }
  
// Login
router.post('/login', async (req, res) => {  
  
try {        
const { email, password} = req.body;         
const checkAccount = await User.findOne({email});                  
if (!checkAccount) return res.status(404).json({error: 'Invalid email'});         
 const isValidPass = await bcrypt.compare(password, checkAccount.password)         
 if (!isValidPass) 
 return res.status(400).json({error: 'Invalid password!'});         
 return res.status(200).json({msg: 'logged in successfully!'})     
 } catch (err) {       
  return res.status(500).json({error: err.message})   
  } 
});  

 

 //delete a user

 router.delete('/deleteUser:id', async (req, res) => {  
  
  try {        
  await res.user.remove()
  res.json({message: 'User deleted'})                
   
   } catch (err) {       
    return res.status(500).json({error: err.message})   
    } 
  });  
  
  export default router;