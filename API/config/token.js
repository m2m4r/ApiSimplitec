
const dotenv = require('dotenv');
dotenv.config();

exports.generateToken=(payload)=> {
    const token = jwt.sign({ payload }, procces.dotenv.API_KEY, {
      expiresIn: procces.dotenv.TOKEN_EXPIRES_IN,
    });
  
    return token;
  }

 exports.validateToken=(token)=> {
    return jwt.verify(token, procces.dotenv.API_KEY);
  }  