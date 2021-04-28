// Iteration 1

// Must be <= 8 characters

// Must contain 1 letter

// Must contain 1 number

class PasswordChecker{
    validatePassword(password){
        let flag = 0;
        let message = "";
        while(true){
            if(password.length < 8){
                flag = -1;
                break;
            }
            else if(/[a-z]/.exec(password) == null){
                flag = -1;
                break;
            }
            else if(/[0-9]/.exec(password) == null){
                flag = -1;
                break;
            }
            else{
                return 'Valid password';
            }
        }
        if(flag == -1){
            return 'Password not valid'
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
