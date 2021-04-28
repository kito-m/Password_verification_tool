import unittest
from unittest import TestCase
from validate_password import PasswordChecker

class TestCheckPassword(TestCase):

    def setUp(self):
        self.test_checker = PasswordChecker()


    def test_Run_Check_admin(self):
        self.assertEqual(self.test_checker.Run_check('', admin=True), 'Password NOT valid\nMust be at least 13 characters\nMust contain at least 1 letter\nMust contain at least 1 number\nMust contain at least 3 special characters')
        self.assertEqual(self.test_checker.Run_check('!!!', admin=True), 'Password NOT valid\nMust be at least 13 characters\nMust contain at least 1 letter\nMust contain at least 1 number')
        self.assertEqual(self.test_checker.Run_check('1', admin=True), 'Password NOT valid\nMust be at least 13 characters\nMust contain at least 1 letter\nMust contain at least 3 special characters')
        self.assertEqual(self.test_checker.Run_check('p', admin=True), 'Password NOT valid\nMust be at least 13 characters\nMust contain at least 1 number\nMust contain at least 3 special characters')
        self.assertEqual(self.test_checker.Run_check('1!!!', admin=True), 'Password NOT valid\nMust be at least 13 characters\nMust contain at least 1 letter')
        self.assertEqual(self.test_checker.Run_check('p3', admin=True), 'Password NOT valid\nMust be at least 13 characters\nMust contain at least 3 special characters')
        self.assertEqual(self.test_checker.Run_check('!!!p', admin=True), 'Password NOT valid\nMust be at least 13 characters\nMust contain at least 1 number')
        self.assertEqual(self.test_checker.Run_check('12345678901234', admin=True), 'Password NOT valid\nMust contain at least 1 letter\nMust contain at least 3 special characters')
        self.assertEqual(self.test_checker.Run_check('passwordpassword', admin=True), 'Password NOT valid\nMust contain at least 1 number\nMust contain at least 3 special characters')
        self.assertEqual(self.test_checker.Run_check('!@#$%^&*!@#$%', admin=True), 'Password NOT valid\nMust contain at least 1 letter\nMust contain at least 1 number')
        self.assertEqual(self.test_checker.Run_check('password1234567', admin=True), 'Password NOT valid\nMust contain at least 3 special characters')
        self.assertEqual(self.test_checker.Run_check('password!@#$%', admin=True), 'Password NOT valid\nMust contain at least 1 number')
        self.assertEqual(self.test_checker.Run_check('123456!@#$%^&*', admin=True), 'Password NOT valid\nMust contain at least 1 letter')
        self.assertEqual(self.test_checker.Run_check('password12@#!', admin=True), 'Password VALID')



    def test_Run_Check_standard_user(self):
        self.assertEqual(self.test_checker.Run_check(''), 'Password NOT valid\nMust be at least 10 characters\nMust contain at least 1 letter\nMust contain at least 1 number')
        self.assertEqual(self.test_checker.Run_check('pass'), 'Password NOT valid\nMust be at least 10 characters\nMust contain at least 1 number')
        self.assertEqual(self.test_checker.Run_check('1234'), 'Password NOT valid\nMust be at least 10 characters\nMust contain at least 1 letter')
        self.assertEqual(self.test_checker.Run_check('pass12'), 'Password NOT valid\nMust be at least 10 characters')
        self.assertEqual(self.test_checker.Run_check('passwordpass'), 'Password NOT valid\nMust contain at least 1 number')
        self.assertEqual(self.test_checker.Run_check('1234567890'), 'Password NOT valid\nMust contain at least 1 letter')
        self.assertEqual(self.test_checker.Run_check('password1234'), 'Password is valid')

if __name__ == "__main__":
    unittest.main()