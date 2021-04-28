const assert = require('assert')
const {PasswordChecker} = require('../src/passwordChecker')

let testChecker = new PasswordChecker()

describe("Test 'PasswordChecker' class", () => {

    it("Should return invalid and inform user of requirements if password is null", () => { assert.strictEqual(testChecker.validatePassword(''), 'Password NOT valid\nMust be at least 8 characters\nMust contain at least 1 letter\nMust contain at least 1 number') })


    it("Should return invalid and inform user if password does not contain at least 1 number and is not at least 8 characters.", () => { assert.strictEqual(testChecker.validatePassword('passwor'), 'Password NOT valid\nMust be at least 8 characters\nMust contain at least 1 number') })
    it("Should return invalid and inform user if password does not contain at least 1 letter and is not at least 8 characters.", () => { assert.strictEqual(testChecker.validatePassword('1234567'), 'Password NOT valid\nMust be at least 8 characters\nMust contain at least 1 letter') })
    it("Should return invalid and inform user if password does not contain at least 1 letter and does not contain at least 1 number", () => { assert.strictEqual(testChecker.validatePassword('!@#$%^&*'), 'Password NOT valid\nMust contain at least 1 letter\nMust contain at least 1 number') })


    it("Should return invalid and inform user if password does not contain at least 1 letter.", () => { assert.strictEqual(testChecker.validatePassword('12345678'), 'Password NOT valid\nMust contain at least 1 letter') })
    it("Should return invalid and inform user if password does not contain at least 1 number", () => { assert.strictEqual(testChecker.validatePassword('password'), 'Password NOT valid\nMust contain at least 1 number') })
    it("Should return invalid invalid and inform user if password is too short", () => { assert.strictEqual(testChecker.validatePassword('pass123'), 'Password NOT valid\nMust be at least 8 characters') })

    it("Should return valid if password meets requirements", () => { assert.strictEqual(testChecker.validatePassword('password123'), 'Password VALID') })
})