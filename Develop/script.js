/*GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page*/

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var passwordLength = window.prompt("Choose password length between 8 and 128 characters long.");
  // handle cancel button
  if (passwordLength === null) {
    return;
  }
  
  var isNotNumber = isNaN(passwordLength);
  while (isNotNumber) {
    passwordLength = window.prompt("Invalid entry. Choose password length between 8 and 128 characters long");
    // handle cancel button
    if (passwordLength === null) {
      return;
    }
    isNotNumber = isNaN(passwordLength);
  } 
  while (passwordLength < 8 || passwordLength > 128 ){
    passwordLength = window.prompt("Invalid entry. Choose password length between 8 and 128 characters long");
    // handle cancel button
    if (passwordLength === null) {
      return;
    }
  }
  
  var passwordType1 = window.prompt("Would you like to include lowercase letters? Answer 'yes' or 'no'.", "yes").toLowerCase();
  while (!(passwordType1 == "yes") && !(passwordType1 == "no")){
    passwordType1 = window.prompt("Would you like to include lowercase letters? Answer 'yes' or 'no'.", "yes").toLowerCase();
  }

  var passwordType2 = window.prompt("Would you like to include uppercase letters? Answer 'yes' or 'no'.", "yes").toLowerCase();
  while (!(passwordType2 == "yes") && !(passwordType2 == "no")){
    passwordType2 = window.prompt("Would you like to include uppercase letters? Answer 'yes' or 'no'.", "yes").toLowerCase();
  }

  var passwordType3 = window.prompt("Would you like to include numeric characters? Answer 'yes' or 'no'.", "yes").toLowerCase();
  while (!(passwordType3 == "yes") && !(passwordType3 == "no")){
    passwordType3 = window.prompt("Would you like to include numeric characters? Answer 'yes' or 'no'.", "yes").toLowerCase();
  }

  var passwordType4 = window.prompt("Would you like to include special characters? Answer 'yes' or 'no'.", "yes").toLowerCase(); 
  while (!(passwordType4 == "yes") && !(passwordType4 == "no")){
    passwordType4 = window.prompt("Would you like to include special characters? Answer 'yes' or 'no'.", "yes").toLowerCase();
  }

  if (passwordType1 == "no" && passwordType2 == "no" && passwordType3 == "no" && passwordType4 == "no"){
    window.alert("Choose at least one type of characters to include into your password!")
    return;
  }

  var password = generatePassword(passwordLength, passwordType1, passwordType2, passwordType3, passwordType4);  
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(passwordLength, passwordType1, passwordType2, passwordType3, passwordType4) {
  /*
   * 1. define string for each set of password type options: lowercase, uppercase, symbols and numbers
   * 2. generate characters string based on password type options
   * 3. generate password string by looping password length times and randomly pick a character from the characters string 
   */
  const alphaLower = "abcdefghijklmnopqrstuvwxyz";
  const alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*_-+=";
  var password = "";
  var characters = "";
  if (passwordType1 == "yes") {
    characters += alphaLower;
  }
  if (passwordType2 == "yes") {
    characters += alphaUpper;
  }
  if (passwordType3 == "yes") {
    characters += numbers;
  }
  if (passwordType4 == "yes") {
    characters += symbols;
  }
  console.log(characters)

  for (var i = 0; i < passwordLength; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
