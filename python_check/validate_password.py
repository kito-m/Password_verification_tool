import re

class PasswordChecker():

    def validate_standard_password(self, password):
        valid = True
        messages = []
        if (len(password) < 10):
            messages.append('\nMust be at least 10 characters')
            valid = False
        if not re.search("[a-z]", password):
            messages.append('\nMust contain at least 1 letter')
            valid = False
        if not re.search("[0-9]", password):
            messages.append('\nMust contain at least 1 number')
            valid = False
        else:
            pass
        if valid:
            return 'Password is valid'
        else:
            return 'Password NOT valid' + ''.join(messages)


    def validate_admin_password(self, password):
        valid = True
        messages = []
        if (len(password) < 13):
            messages.append('\nMust be at least 13 characters')
            valid = False
        if not re.search("[a-z]", password):
            messages.append('\nMust contain at least 1 letter')
            valid = False
        if not re.search("[0-9]", password):
            messages.append('\nMust contain at least 1 number')
            valid = False
        if not re.search("[!@#$%^&*]{3}", password):
            messages.append('\nMust contain at least 3 special characters')
            valid = False
        else:
            pass
        if valid:
            return 'Password VALID'
        else:
            return 'Password NOT valid' + ''.join(messages)

    def Run_check(self, password, admin=False):
        if admin:
            return self.validate_admin_password(password)
        else:
            return self.validate_standard_password(password)