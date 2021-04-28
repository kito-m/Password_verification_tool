const assert = require('assert')
const {PasswordChecker} = require('../src/passwordChecker')

let testChecker = new PasswordChecker()

describe("Test PasswordChecker class", () => {
    it("Should return invalid if password is less than 8 characters.", () => {assert.strictEqual(testChecker.validatePassword('pass1'), 'Password not valid')})
    it("Should return invalid if password does not contain at least 1 letter", () => {assert.strictEqual(testChecker.validatePassword('12345678'), 'Password not valid')})
    it("Should return invalid if password does not contain at least 1 number", () => {assert.strictEqual(testChecker.validatePassword('password'), 'Password not valid')})
    it("Should return valid if password meets requirements", () => {assert.strictEqual(testChecker.validatePassword('password123'), 'Valid password')})
})
