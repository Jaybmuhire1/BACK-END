import jwt from 'jsonwebtoken';

export const userAuth = (req, res, next)=>{
    const token = req.header('auth-token');
    if(!token) return res.status(401).json({msg: 'please, sign in first'});

    try{
        // const secreteKey = config.SECRETE_KEY;
        const secreteKey = 'muhire';
        const verified = jwt.verify(token, secreteKey);
        req.user = verified;
        return next();
    }catch(err){
        return res.status(403).json({message: 'Invalid token'});
    }
};


export const adminAuth = (req, res, next) => {
    const { admin } = req.user;
 
    if (!admin) return res.status(401).json({msg: 'Access denied, for admins only!'})
 
    return next();
  }
