var passwordLength = 8;
var choice = [];
var specialCharacter = ['!','@','#','$','%','^','*','(',')','-','+'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','Y','Z']
var numbers = ['1','2','3','4','5','6','7','8','9','0'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword () {
  passwordLength = prompt("How many characters would you like for your password? Choose length between 8 and 128");
  console.log("Length of password:" + passwordLength );

}

if(passwordLength < 8 || passwordLength > 128) { 
  alert("Password length needs to be between 8 - 128 characters. ");
  return false;
}

if (confirm("WIll your password contain Numbers?")){
choice = choice.concat(numbers);
}

if (confirm("WIll your password contain Numbers?")){
choice = choice.concat(numbers);
}
if (confirm("WIll your password contain Numbers?")){
choice = choice.concat(numbers);
}
if (confirm("WIll your password contain Numbers?")){
choice = choice.concat(numbers);
}
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

