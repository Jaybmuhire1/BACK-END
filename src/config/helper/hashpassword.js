import bcrypt from 'bcryptjs'
const hashPassword = async (data) =>{
 const salt = await bcrypt.genSalt(10);
 const hasedPassword = await bcrypt.hash(data,salt);
 return hasedPassword;
}
export default hashPassword;
