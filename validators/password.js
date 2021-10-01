const dry = require('drytypes')

module.exports = dry.makeDryType((x) => {
    if (x.length==0) {
        return { success: false, message: 'password cannot be set empty' }
    }
    if(x.length>30){
     return {success:false,message:'password length must be less than 30'} 
    }
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!x.match(passwordRegex)) {
        return { success: false, message: 'password must contain an uppercase letter , a lower case letter , a special character and a number' }
    }
  
    return { success: true }
  
}, 'Password')
