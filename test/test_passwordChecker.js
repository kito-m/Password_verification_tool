const assert = require('assert')
const {PasswordChecker} = require('../src/passwordChecker')

let testChecker = new PasswordChecker()

describe("Test PasswordChecker class", () => {
    describe("Admin test", () => {
        it("Should return invalid and inform user of requirements if password is null", () => { assert.strictEqual(testChecker.RunCheck('', 'admin'), 'Password NOT valid\nMust be at least 13 characters\nMust contain at least 1 letter\nMust contain at least 1 number\nMust contain at least 1 special character') })

        it("Should return invalid and inform user if password does not contain, at least 1 letter, at least 1 number, and is not at least 13 characters.", () => { assert.strictEqual(testChecker.RunCheck('!', 'admin'), 'Password NOT valid\nMust be at least 13 characters\nMust contain at least 1 letter\nMust contain at least 1 number') })
        it("Should return invalid and inform user if password does not contain, at least 1 letter, at least 1 special character, and is not at least 13 characters.", () => { assert.strictEqual(testChecker.RunCheck('0', 'admin'), 'Password NOT valid\nMust be at least 13 characters\nMust contain at least 1 letter\nMust contain at least 1 special character') })
        it("Should return invalid and inform user if password does not contain, at least 1 number, at least 1 special character, and is not at least 13 characters.", () => { assert.strictEqual(testChecker.RunCheck('p', 'admin'), 'Password NOT valid\nMust be at least 13 characters\nMust contain at least 1 number\nMust contain at least 1 special character') })

        it("Should return invalid and inform user if password does not contain, at least 1 letter, and is not at least 13 characters.", () => { assert.strictEqual(testChecker.RunCheck('1!', 'admin'), 'Password NOT valid\nMust be at least 13 characters\nMust contain at least 1 letter') })
        it("Should return invalid and inform user if password does not contain, at least 1 special character, and is not at least 13 characters.", () => { assert.strictEqual(testChecker.RunCheck('p3', 'admin'), 'Password NOT valid\nMust be at least 13 characters\nMust contain at least 1 special character') })
        it("Should return invalid and inform user if password does not contain, at least 1 number, and is not at least 13 characters.", () => { assert.strictEqual(testChecker.RunCheck('!p', 'admin'), 'Password NOT valid\nMust be at least 13 characters\nMust contain at least 1 number') })

        it("Should return invalid and inform user if password does not contain at least 1 letter and at least 1 special character", () => { assert.strictEqual(testChecker.RunCheck('12345678901234', 'admin'), 'Password NOT valid\nMust contain at least 1 letter\nMust contain at least 1 special character') })
        it("Should return invalid and inform user if password does not contain, at least 1 special character and at least 1 number", () => { assert.strictEqual(testChecker.RunCheck('passwordpassword', 'admin'), 'Password NOT valid\nMust contain at least 1 number\nMust contain at least 1 special character') })
        it("Should return invalid and inform user if password does not contain, at least 1 letter and at least 1 number", () => { assert.strictEqual(testChecker.RunCheck('!@#$%^&*!@#$%', 'admin'), 'Password NOT valid\nMust contain at least 1 letter\nMust contain at least 1 number') })

        it("Should return invalid and inform user if password does not contain, at least 1 special character", () => { assert.strictEqual(testChecker.RunCheck('password1234567', 'admin'), 'Password NOT valid\nMust contain at least 1 special character') })
        it("Should return invalid and inform user if password does not contain, at least 1 number", () => { assert.strictEqual(testChecker.RunCheck('password!@#$%', 'admin'), 'Password NOT valid\nMust contain at least 1 number') })
        it("Should return invalid and inform user if password does not contain, at least 1 letter", () => { assert.strictEqual(testChecker.RunCheck('123456!@#$%^&*', 'admin'), 'Password NOT valid\nMust contain at least 1 letter') })
        

        it("Should return VALID if the password meets the requirements", () => { assert.strictEqual(testChecker.RunCheck('password1234!', 'admin'), 'Password VALID') })
    })
    describe("Standard/Normal test", () => {
        it("Should return invalid and inform user of requirements if password is null", () => { assert.strictEqual(testChecker.RunCheck('', 'normal'), 'Password NOT valid\nMust be at least 8 characters\nMust contain at least 1 letter\nMust contain at least 1 number') })

        it("Should return invalid and inform user if password does not contain, at least 1 letter, at least 1 number, and is not at least 8 characters.", () => { assert.strictEqual(testChecker.RunCheck('!', 'normal'), 'Password NOT valid\nMust be at least 8 characters\nMust contain at least 1 letter\nMust contain at least 1 number') })
        it("Should return invalid and inform user if password does not contain, at least 1 letter, and is not at least 8 characters.", () => { assert.strictEqual(testChecker.RunCheck('0', 'normal'), 'Password NOT valid\nMust be at least 8 characters\nMust contain at least 1 letter') })

        it("Should return invalid and inform user if password is not at least 8 characters.", () => { assert.strictEqual(testChecker.RunCheck('pass12', 'normal'), 'Password NOT valid\nMust be at least 8 characters') })
        it("Should return invalid and inform user if password does not contain at least 1 number", () => { assert.strictEqual(testChecker.RunCheck('password', 'normal'), 'Password NOT valid\nMust contain at least 1 number') })
        it("Should return invalid and inform user if password does not contain at least 1 letter", () => { assert.strictEqual(testChecker.RunCheck('12345678', 'normal'), 'Password NOT valid\nMust contain at least 1 letter') })

        it("Should return VALID if the password meets the requirements", () => { assert.strictEqual(testChecker.RunCheck('password1234', 'normal'), 'Password VALID') })
    })
})