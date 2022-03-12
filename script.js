// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// PROMPTS + CONSOLE.LOG for user answers.
var userLenghtCharacters = prompt("How many characters would  you like your password contain?", "Minimun 8 characters and Maximun characters 128");
console.log(userLenghtCharacters);

var userSpecialCharacters = confirm("Click OK to confirm including Special characters.");
console.log(userSpecialCharacters);

var userNumericCharacters = confirm("Click OK to confirm including Numeric characters.");
console.log(userNumericCharacters);

var userUppercase = confirm("Click OK to confirm including UPPERcase characters.");
console.log(userUppercase);

var userLowercase = confirm("Click OK to confirm including LOWERcase characters.");
console.log(userLowercase);

// ARRAYS for ech password criteria.
var randomFunc = ['getRandomLower','getRandomUpper','getRandomNumber','getRandomSpecial'];


function getLenghtCharacters () {
  return String.fromCharCode((Math.floor(Math.random()* 8)+ 120));}
console.log(getLenghtCharacters());

function getRandomLower() {
  return String.fromCharCode((Math.floor(Math.random()* 26)+ 97));}
console.log(getRandomLower());

function getRandomUpper() {
  return String.fromCharCode((Math.floor(Math.random()* 26) + 65)) ;
}
console.log(getRandomUpper());

function getRandomNumber() {
  return String.fromCharCode(Number(Math.floor(Math.random()* 10) + 48)) ;
}
console.log(getRandomNumber());

function getRandomSpecial() {
const symbols = '!@#$%^&*(){}=<>/,.';
return symbols [Math.floor(Math.random()*symbols.length)];
}
  console.log(getRandomSpecial());




