import jwt from 'jsonwebtoken';

// const jwt = require('jsonwebtoken');
 export const generateToken = (newUser) => {
   return jwt.sign(newUser, 'uyguhuihuihi',  { expiresIn: '600s' });
 }
//  console.log(generateToken({name: 'muhire'}));
 const decryptToken = (token) => {
   return jwt.verify(token, 'uyguhuihuihi', (err,userinfo) => {
    if(err) console.log(err.message);
    return userinfo
   })
 
 }
//  console.log(decryptToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibXVoaXJlIiwiaWF0IjoxNjAzNTE5MTQwLCJleHAiOjE2MDM1MTk3NDB9.aZujBAwZJ6t6c38BUmHBT9nhUBBvTyUwIHoUFsSsq30'))


//  module.exports = {generateToken};