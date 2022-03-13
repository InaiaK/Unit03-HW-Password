// Assignment Code
const generateBtn = document.getElementById("generate");
generateBtn.addEventListener("click", writePassword)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementById("password");

  passwordText.value = password;
}

function generatePassword() {
  // PROMPTS + CONSOLE.LOG for user answers.
  var userLenghtCharacters = parseInt(prompt("How many characters would  you like your password contain?", "Minimun 8 characters and Maximun characters 128"));
  console.log(userLenghtCharacters);
  if (userLenghtCharacters < 8 || userLenghtCharacters > 128) {
    return " Please enter the min and max characters required"
  }
  var userSpecialCharacters = confirm("Click OK to confirm including Special characters.");
  console.log(userSpecialCharacters);

  var userNumericCharacters = confirm("Click OK to confirm including Numeric characters.");
  console.log(userNumericCharacters);

  var userUppercase = confirm("Click OK to confirm including UPPERcase characters.");
  console.log(userUppercase);

  var userLowercase = confirm("Click OK to confirm including LOWERcase characters.");
  console.log(userLowercase);

  if (!userLowercase && !userUppercase && !userNumericCharacters && !userSpecialCharacters) {
    return " Please select at least one option."
  }
  var password = ""
  var i = 0;
  while (i < userLenghtCharacters - 1) {
    if (userLowercase && i < userLenghtCharacters - 1) {
      password += getRandomLower()
      i++
    }
    if (userUppercase && i < userLenghtCharacters - 1) {
      password += getRandomUpper()
      i++
    }
    if (userSpecialCharacters && i < userLenghtCharacters - 1) {
      password += getRandomSpecial()
      i++
    }
    if (userNumericCharacters && i < userLenghtCharacters - 1) {
      password += getRandomNumber()
      i++

    }
  }
  console.log(password);
  return password;
}

// ARRAYS for ech password criteria.
var randomFunc = ['getRandomLower', 'getRandomUpper', 'getRandomNumber', 'getRandomSpecial'];

// DEFINED ARRAYS (  https://net-comber.com/charset.html )


function getLenghtCharacters() { // confirm this function 
  return String.fromCharCode((Math.floor(Math.random() * 8) + 120));
}
console.log(getLenghtCharacters());


function getRandomLower() {
  return String.fromCharCode((Math.floor(Math.random() * 26) + 97));
}
console.log(getRandomLower());

function getRandomUpper() {
  return String.fromCharCode((Math.floor(Math.random() * 26) + 65));
}
console.log(getRandomUpper());

function getRandomNumber() {
  return String.fromCharCode(Number(Math.floor(Math.random() * 10) + 48));
}
console.log(getRandomNumber());

function getRandomSpecial() {
  const symbols = '!@#$%^&*(){}=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}
console.log(getRandomSpecial());
