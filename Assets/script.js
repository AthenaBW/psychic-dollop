// Assingment code
// Variables in arrays to be called to the function
var passwordLength = 8;
var choice = [];
var specialCharacter = ['!','@','#','$','%','^','*','(',')','-','+'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','Y','Z']
var numbers = ['1','2','3','4','5','6','7','8','9','0'];

var generateBtn = document.querySelector("#generate");

// Event listener for a click to begin prompts

generateBtn.addEventListener("click", writePassword);

// Function "getPrompts" called, assigns to "passwordText' to generate" 
// Error console logs error if untrue, then returns
function writePassword() {
  var confirmedPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (!confirmedPrompts) {
    console.error("No prompts selected , please try again");
    return;
  }
    var generatedPW = generatePassword(confirmedPrompts);
    if(!generatedPW){
      console.error("Password Failed to generate")
    }
    passwordText.value = generatedPW
  }
  
// Password variable defined empty. For loop begins process of assigning to variable randomChoice * password length

function generatePassword () {
var password = "";
for (var i = 0; i < passwordLength; i++) {
    var randomChoice = Math.floor(Math.random() * choice.length);
    password = password + choice[randomChoice];
}
return password;
}

//  Intializes prompts for user to choose password options

function getPrompts() {
  choice = [];

// Password options begin and functions react in a true / false manner

passwordLength = prompt("How many characters would you like for your password? Choose length between 8 and 128");

if(!passwordLength){
  alert("input Required");
}

if(passwordLength < 8 || passwordLength > 128) { 
  passwordLength = alert("Password length needs to be between 8 - 128 characters. ");
return false;
}

if (confirm("Will your password contain Numbers?")) {
choice = choice.concat(numbers);
}

if (confirm("Will your password contain Special Characters?")) {
choice = choice.concat(specialCharacter);
}
if (confirm("Will your password contain Lower Case Characters?")) {
choice = choice.concat(lowerCase);
}
if (confirm("WIll your password contain Uppercase Characters?")) {
choice = choice.concat(upperCase);
}
return true; }

// value returns true and loops back if user reclicks generate button