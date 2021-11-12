// Assignment code here
// Arrays of lower case, upper case, numbers and special characters
var lowerCaseChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChars = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

// Function to handle randomly generating passwords
function generatePassword() {
  // Empty array to be added to for characters used in password
  var usedChars = [];
  // Prompt user to have lower case characters and add accordingly
  var lowerAdded = window.confirm('Would you like your password to use lower case characters?');
  if (lowerAdded) {
    usedChars = usedChars.concat(lowerCaseChars);
  }

  // Prompt user to have upper case characters and add accordingly
  var upperAdded = window.confirm('Would you like your password to use upper case characters?');
  if (upperAdded) {
    usedChars = usedChars.concat(upperCaseChars); 
  }

  // Prompt user to have numbers and add accordingly
  var numberAdded = window.confirm('Would you like your password to use numbers?');
  if (numberAdded) {
    usedChars = usedChars.concat(numberChars); 
  }

  // Prompt user to have special characters and add accordingly
  var specialAdded = window.confirm('Would you like your password to use special characters?');
  if (specialAdded) {
    usedChars = usedChars.concat(specialChars); 
  }

  var passwordLength = window.prompt('How long would you like your password to be? Must be between 8 and 128 characters.');
  var password = '';

  // Logic to ensure password length is acceptable
  if (passwordLength >= 8 && passwordLength <= 128) {
    for (var i = 0; i < passwordLength; i++) {
      password = password + usedChars[Math.floor(Math.random()*usedChars.length)];
    } 
  } else if (passwordLength < 8) {
      window.alert('Password length is too short. Please try again');
      generatePassword();
  } else if (passwordLength > 128) {
      window.alert('Password length is too long. Please try again');
      generatePassword();
  } else {
    window.alert('Invalid password length. Please try again');
    generatePassword();
  }
  return password;
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
