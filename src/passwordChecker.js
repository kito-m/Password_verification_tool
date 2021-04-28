//Iteration 2

//Must be <= 8 characters

//Must contain 1 letter

//Must contain 1 number

//Must also indicate why password is not valid



class PasswordChecker{
    constructor() {}
    validatePassword(password){
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
}

try{
    module.exports = {PasswordChecker}
}
catch (e) {
    if (e instanceof ReferenceError) {
        console.log('Could not export class')
    }
}
