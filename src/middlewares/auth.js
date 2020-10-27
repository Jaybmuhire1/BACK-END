// import token from 'jsonwebtoken';
// import  config from '../config/config';

// export const auth = (req, res, next)
//  const token = req.header('auth-token')
//  if (!token) return res.status(401).json({msg: 'please login'})
//  try {
//  const secretKey = config.SECRET_KEY;
//  const verified = jwt.verify(token,secretKey);
//  req.user = verified;
//  return next();

//  } catch(err) {
//   return res.status(403).json({msg: 'invalid token'});
//  }
 