# Password_verification_tool

A tool for verifying the strength of passwords.

# Features

* Takes into account type of user (stricter requirements for admin users)
* Checks password too short
* Checks password contains the required characters
* Outputs what requirement is not being met if password is not valid

## Dependencies

mocha@8.3.2

## Installation


```bash
$ git clone https://github.com/kito-m/Password_verification_tool.git
$ cd Password_verification_tool
$ npm init -y
$ npm install mocha --save-dev
```

## Usage

#### JavaScript

```JavaScript
const checker = new PasswordChecker();
const password = document.getElementById('password');


function Submit(){
    submitBtn.addEventListener('click', () => {
        if (Admin_user == true){
            alert(checker.RunCheck(password.value, 'admin'))
        }
        else{
            alert(checker.RunCheck(password.value, 'normal'))
        }

    })
}
```
#### Python
```Python
from validate_password import PasswordChecker

Checker = PasswordChecker()

Checker.RunCheck("password123", "admin")

# returns a string either 'Password VALID' or 'Password NOT valid...'

```
## Testing
### Javascript
```
$ npm run test
```
### Python
```
$ cd python_check
$ python test_validate_password.py
```

## Example

```
cd example 
google-chrome index.html
```

![ Alt text](passCheck.gif) [](passCheck.gif)

## License
[MIT](https://choosealicense.com/licenses/mit/)
