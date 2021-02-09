// Assignment Code
var generateBtn = document.querySelector("#generate");

// character sets
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
var numberChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!","\"", "\'", "\\", "/", "<", ">", ":", ";", ",", ".", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "=", "?", "]", "[", "{", "}", "_", "`", "~"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  //variable declarations
  var passChar = [];
  var tempPass = [];
  var lastPass = "";

  var passLength;
  var useLower;
  var useUpper;
  var useNumber;
  var useSpecial;
   
  //prompt user for passLength, input is validated
  passLength = parseInt(prompt("Please enter a password length between 8 and 128."));
  while ((!(passLength >= 8)) || (!(passLength <= 128))){
    passLength = parseInt(prompt("Invalid input. Please enter a length between 8 and 128."));
  }
    

  //prompt user for character sets, validate that at least one character set is chosen
  //puts one character from each chosen character set into tempPass array
  do{
    useLower = confirm("Include lower case characters?");
    if(useLower){
      for(var i=0; i<lowerChar.length; i++){
        passChar.push(lowerChar[i]);
      }
      tempPass.push(lowerChar[Math.floor(Math.random()*lowerChar.length)]);
    }

    useUpper = confirm("Include upper case characters?");
    if(useUpper){
      for(var j=0; j<upperChar.length; j++){
        passChar.push(upperChar[j]);
      }
      tempPass.push(upperChar[Math.floor(Math.random()*upperChar.length)]);
    }

    useNumber = confirm("Include number characters?");
    if(useNumber){
      for(var k=0; k<numberChar.length; k++){
        passChar.push(numberChar[k]);
      }
      tempPass.push(numberChar[Math.floor(Math.random()*numberChar.length)])
    }

    useSpecial = confirm("Include special characters?");
    if(useSpecial){
      for(var l=0; l<specialChar.length; l++){
        passChar.push(specialChar[l]);
      }
      tempPass.push(specialChar[Math.floor(Math.random()*specialChar.length)]);
    }

    if(!useLower && !useUpper && !useNumber && !useSpecial){
      alert("Please choose at least one character set.");
    }
  }
  while(!useLower && !useUpper && !useNumber && !useSpecial);
    
  //fill the tempPass array with random characters until specified passLength
  for(var m=tempPass.length; m<passLength; m++){
  tempPass.push(passChar[Math.floor(Math.random()*passChar.length)]);
  }

  //randomize the order of tempPass array elements
  //Fisher-Yates Random Sort
  var x, y, z;

  for (x = tempPass.length -1; x > 0; x--) {
    y = Math.floor(Math.random() * x)
    z = tempPass[x]
    tempPass[x] = tempPass[y]
    tempPass[y] = z
  }

  //push each element of the reordered tempPass array into a string
  for(var n=0; n<tempPass.length; n++) {
    lastPass = lastPass + tempPass[n];
  }

  return lastPass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


