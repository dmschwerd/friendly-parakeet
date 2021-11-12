// Assignment code here
var lowerCaseChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialChars = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
var usedChars = [];

function generatePassword() {
  var lowerAdded = window.confirm('Would you like your password to use lower case characters?');
  if (lowerAdded) {
    usedChars = usedChars + lowerCaseChars; 
  }

  var upperAdded = window.confirm('Would you like your password to use upper case characters?');
  if (upperAdded) {
    usedChars = usedChars + upperCaseChars; 
  }

    var specialAdded = window.confirm('Would you like your password to use special characters?');
  if (specialAdded) {
    usedChars = usedChars + specialChars; 
  }
  return usedChars;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
