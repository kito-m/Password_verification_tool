
const checker = new PasswordChecker();
const username = document.getElementById('username')
const password = document.getElementById('password')
const submitBtn = document.getElementById('submitBtn')
const admin_switch = document.getElementById('myonoffswitch')

let Admin_user = false;

function onOffSwitch(){
    admin_switch.addEventListener('click', () => {
        if(admin_switch.checked){
            Admin_user = true
        }
        else{
            Admin_user = false
        }
    })

}

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


onOffSwitch()
Submit()
