// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
for(var i =0; i <=passwordText; i++){
  password = passwordText.value + lengthCha + randomFunc + value.charAt(Math.floor(Math.random()*Math.floor(value.length-1)));
}
document.getElementById('#generate').passwordText.value = password;


// The best to be as length ? 
document.getElementById("#generate").innerHTML = "Min 08 ; Max 128 ";

  let lengthCha = prompt('How many characters would  you likey our password contain?');
  for (let i = 0; i < passLength; i+=secInt) {
  let length = Number(8 < 128);}


 
if(window.confirm("Click OK to confirm including Special characters.")) {}

if(window.confirm("Click OK to confirm including Numeric characters.")) { }

if(window.confirm("Click OK to confirm including UPPERcase characters.")) { }

if(window.confirm("Click OK to confirm including LOWERcase characters.")) { }



var randomFunc = 'lower: getRandomLower'; 'upper: getRandomUpper'; 'number: getRandomNumber'; 'symbol: getRandomSymbol';

// https://net-comber.com/charset.html


function passwordLength(){
  var password = document.getElementById("password");
  if(textbox.value.length <= 8 && textbox.value.length >= 128){
      alert("success");
  }
  else{
      alert("make sure the input is between 8-128 characters long")
  }



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


