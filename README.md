# password-generator
Bootcamp Homework 3 - Password Generator

Objective: 

Create a password generator using javascript, which will generate a random string of characters within a certain range of lengths and using a selection of chosen character sets. These passwords should be strong enough to protective sensitive data.

Requirements:

- The user specifies a length between 8 and 128 characters long.

- The user chooses which character sets to include from lowercase letter, uppercase letters, numbers, and special characters.

- The program validates inputs and requires at least one character set.

- The generated password is the specified length, randomly generated, and includes at least one character from each chosen character set.


Contents:

- prompt.html, script0.js - This solution strictly follows the guidelines of the assignment, utilizing prompts to have the user set the password length and choose the character sets used. In the case an invalid input is taken, the user is re-prompted. 

- checkbox.html, script1.js - This solution strays from assignment guidelines in an effort to improve security and ease of usability. Rather than prompts, a combination of drop downs and checkboxes are used for inputs. Using drop downs, the user specifies a minimum and maximum length between 8 and 128; the password will be a random length within the specified range. Drop down values are actively adjusted to prevent the minimum being higher than the maximum and vice versa. In the case that no character sets are selected, the generate password button will be disabled.