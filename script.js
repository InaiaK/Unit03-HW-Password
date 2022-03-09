// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

sign = window.prompt('How many characters would you likeyour password contain?');

if(window.confirm("Click OK to confirm including Special characters.")) { }

if(window.confirm("Click OK to confirm including Numeric characters.")) { }

if(window.confirm("Click OK to confirm including UPPERcase characters.")) { }

if(window.confirm("Click OK to confirm including LOWERcase characters.")) { }


// generate passcode
if (window.confirm("Do you really want to leave?")) {
  window.open("exit.html", "Thanks for Visiting!");
}

generateBtn.addEventListener("click", writePassword);