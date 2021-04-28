// Iteration 3
//------------

// Must also be able to accept admin users who have more strict specifications
//--------------------------------------------------------------------------

// REGULAR
// Must be <= 8 characters
// Must contain at least 1 letter
// Must contain at least 1 number
// Must also indicate why password is not valid
//------------------------------------------------

// ADMIN
// Must be <= 13 characters
// Must contain at least 1 special character
// Must contain at least 1 letter
// Must contain at least 1 number
// Must also indicate why password is not valid
//------------------------------------------


class PasswordChecker{
    constructor() {}
    validateStandardPassword(password){
        let valid = true;
        let message = [];
        if(password.length < 8){
            message.push('\nMust be at least 8 characters')
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
        if(/[!@#$%^&*]/.exec(password) == null){
            message.push('\nMust contain at least 1 special character')
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
