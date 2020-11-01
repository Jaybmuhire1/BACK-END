import jwt from 'jsonwebtoken';


 export const generateToken = (newUser) => {
  const secreteKey = 'muhire';
   const {fullName, email, _id, admin} = newUser;
   return jwt.sign({fullName, email, _id, admin}, secreteKey,  { expiresIn: '5d' });
 }
