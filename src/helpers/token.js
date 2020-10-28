import jwt from 'jsonwebtoken';


 export const generateToken = (newUser) => {
   const {fullName, emai, _id} = newUser;
   return jwt.sign({fullName, emai, _id}, 'uyguhuihuihi',  { expiresIn: '600s' });
 }


 export const decryptToken = (token) => {
   return jwt.verify(token, 'uyguhuihuihi', (err,userinfo) => {
    if(err) console.log(err.message);
    return userinfo
   })
 
 }
