const bcrypt = require("bcrypt");

 exports.validatePassword= async (password, salt)=> {
    return bcrypt
    .hash(password, this.salt)
    .then((hash) => hash === this.password)

     
  }  