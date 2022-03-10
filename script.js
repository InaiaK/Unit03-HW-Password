// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;}

 sign = window.prompt("How many characters would  you likey our password contain?");

if(window.confirm("Click OK to confirm including Special characters.")) { }

if(window.confirm("Click OK to confirm including Numeric characters.")) { }

if(window.confirm("Click OK to confirm including UPPERcase characters.")) { }

if(window.confirm("Click OK to confirm including LOWERcase characters.")) { }

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
}

// https://net-comber.com/charset.html

  function getRandomLower() {
  return String.fromCharCode((Math.floor(Math.random()* 26)+ 97));
}

console.log(getRandomLower());

function getRandomUpper() {
  return String.fromCharCode((Math.floor(Math.random()* 26) + 65)) ;
}
console.log(getRandomUpper());

function getRandomNumber() {
  return String.fromCharCode(Number(Math.floor(Math.random()* 10) + 48)) ;
}
console.log(getRandomNumber());


function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}=<>/,.'
  return symbols [Math.floor(Math.random()*symbols.length)];
}
  console.log(getRandomSymbol());






// Set up a function ( with IF & ELSE statment ) OR Arrays first? 

// How generate randown arrays for characters  ?

// generate passcode.//