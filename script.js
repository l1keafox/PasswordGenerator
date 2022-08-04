// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){
//  THEN I am presented with a series of prompts for password criteria
//  WHEN prompted for password criteria
//  THEN I select which criteria to include in the password
//  WHEN prompted for the length of the password
//  THEN I choose a length of at least 8 characters and no more than 128 characters
let lengthOfPswrd;

do{
  lengthOfPswrd = prompt("Enter the length of password you would like");
  console.log(lengthOfPswrd);
  if(lengthOfPswrd < 8 || lengthOfPswrd > 128){
    alert("We only accept password lengths between 8 and 128");
  }
}while( lengthOfPswrd < 8 || lengthOfPswrd > 128 )
 


//  WHEN asked for character types to include in the password
//  THEN I confirm whether or not to include lowercase, 
//  THEN I confirm whether or not to include uppercase,
let lowercase;
let uppercase;
do{
  lowercase = confirm("Include Lowercase");
  console.log(lowercase ,"lowercase");
  uppercase = confirm("Include Uppercase");
  console.log(uppercase ,"uppercase");
  if(!lowercase && !uppercase ){
    alert("password needs lower or uppercase!");
  }
}while(!lowercase && !uppercase )

//  THEN I confirm whether or not to include numeric, and/or special characters
let numeric = confirm("Include Numbers");


//  THEN I confirm whether or not to include special characters
let specialChars = confirm("Include Special Characters");
console.log(specialChars, "specialChars");

//WHEN I answer each prompt

//  THEN my input should be validated and at least one character type should be selected

let getNumberBetween = function(min,max){
  let randHigh = max - min;
  let randomNumber = Math.floor( Math.random() * randHigh );
  return randomNumber + min;
}

let getLetter = function(uppercase,lowercase){
  let letters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
  if(uppercase && lowercase){
    letters.concat(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z' ] );
  } else if(lowercase&& !uppercase){
    letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z' ];
  }
  let rando =  getNumberBetween(0,letters.length-1);
  return letters[rando];
}

let getNumber = function(){
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let rando =  getNumberBetween(0,numbers.length-1);
  return numbers[rando];
}

let getSpecial = function(){
  let specials =["!","@","#","$","%","^","&","*","(",")"];
  let rando =  getNumberBetween(0,specials.length-1);
  return specials[rando];
}


let passwordLength = getNumberBetween(8,lengthOfPswrd);
let returnPassword = "";

if(uppercase){
  returnPassword += getLetter(uppercase,false);
  passwordLength--;
}
if(lowercase){
  returnPassword += getLetter(false,lowercase);
  passwordLength--;
}
if(specialChars){
  returnPassword += getSpecial();
  passwordLength--;
}
if(numeric){
  returnPassword += getNumber();
  passwordLength--;
}

for(let i = 0;i<passwordLength;i++){
  switch(getNumberBetween(0,4)  ){ //
    case 1:
      if(uppercase){
        returnPassword += getLetter(uppercase,false);        
      } else {
        passwordLength++;
      }
      break;
    case 2:
      if(lowercase){
        returnPassword += getLetter(false,lowercase);
      } else {
        passwordLength++;
      }
      
      break;
    case 3:
      if(specialChars){
        returnPassword += getSpecial();
      } else {
        passwordLength++;
      }
      
      break;
    case 0:
      if(numeric){
        returnPassword += getNumber();
      } else {
        passwordLength++;
      }
      
      break;
  }
}

//  THEN a password is generated that matches the selected criteria
// Generating password, requiresments and 1 of each requiremnt. 





//  THEN the password is either displayed in an alert or written to the page
alert("This is your password: "+returnPassword);
}
