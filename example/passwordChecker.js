// Iteration 4
//------------

// TIGHTER REQUIREMENTS

// STANDARD/NORMAL
// Must be <= 10 characters
// Must contain at least 1 letter
// Must contain at least 1 number
// Must also indicate why password is not valid
//------------------------------------------------

// ADMIN
// Must be <= 13 characters
// Must contain at least 3 special character
// Must contain at least 1 letter
// Must contain at least 1 number
// Must also indicate why password is not valid
//------------------------------------------


class PasswordChecker{
    constructor() {}
    validateStandardPassword(password){
        let valid = true;
        let message = [];
        if(password.length < 10){
            message.push('\nMust be at least 10 characters')
            valid = false;
        }
        if(/[a-z]/.exec(password) == null){
            message.push('\nMust contain at least 1 letter')
            valid = false;
        }
        if(/[0-9]/.exec(password) == null){
            message.push('\nMust contain at least 1 number')
            valid = false;
        }
        else{
            //pass
        }
        if(valid == true){
            return 'Password VALID'
        }
        else{
            return 'Password NOT valid' + message.join('')
        }
    }

    validateAdminPassword(password){
        let valid = true;
        let message = [];
        if(password.length < 13){
            message.push('\nMust be at least 13 characters')
            valid = false;
        }
        if(/[a-z]/.exec(password) == null){
            message.push('\nMust contain at least 1 letter')
            valid = false;
        }
        if(/[0-9]/.exec(password) == null){
            message.push('\nMust contain at least 1 number')
            valid = false;
        }
        if(/[!@#$%^&*]{3}/.exec(password) == null){
            message.push('\nMust contain at least 3 special characters')
            valid = false;
        }
        else{
            //pass
        }
        if(valid == true){
            return 'Password VALID'
        }
        else{
            return 'Password NOT valid' + message.join('')
        }
    }

    RunCheck(password, user_type){
        if(user_type == 'admin'){
           return this.validateAdminPassword(password);
        }
        else{
            return this.validateStandardPassword(password)
        }
    }
}
try{
    module.exports = {PasswordChecker}
}
catch (e) {
    if (e instanceof ReferenceError) {
        console.log('Could not export class')
    }
}
