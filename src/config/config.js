import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT,
  SECRET_KEY:process.env.SECRET_KEY
  
}