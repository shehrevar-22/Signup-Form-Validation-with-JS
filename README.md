# Signup-Form-Validation-with-JS
Front-end design for HTML/CSS sign -up form and validation using Javascript
<img width="696" alt="Js output form" src="https://user-images.githubusercontent.com/113840033/196358723-026790b3-48d3-424a-a992-5ad672c927a5.png"><br>
HTML and CSS sign up form is shown above<br>
<b>You’ll validate the following:</b><br>

<br>Username cannot be blank.
<br>Email is mandatory and valid.
<br>Password has eight characters or longer. And it must contain 1 lowercase character, 1 uppercase character, 1 number, and at least one special character in this set (!@#$%^&*).<br>

<b>Create the project structure:</b>

<br>First, create the form-validation folder that stores all the source code files of the project.

<br>Second, create the js and css folders inside the form-validation folder.

<br>Third, create the style.css in the css folder, the script.js in the js folder, and index.html directly in the form-validation folder.

<br><b> CSS description:</b><br>
<br>The form elements are aligned to the center using CSS flexbox applied on class .registration-form class and other necessary styles are defined like, width, background-color, font style, color, etc.
<br>You can see codes for :hover and :focus these are used to change certain CSS styles of elements on different actions on the element.
<br><b>Validation In Javascript</b>
<br>As soon as the register button (submit button) is clicked, all the data is submitted but validation in javascript for registration form is necessary before sending data to the server because data given by user may not be valid.
<br>When you validate the data and find it is not valid, you can show the error message to the user.
<br>For validation, you can use regex (regular expression) with javascript.
<br><b>Note:</b> regex is a pattern that is used to match character combinations in strings.
<br>A javascript function formValidation which validates our form.

<br>This function runs whenever a user submits the form if there is any input value that doesn't satisfy some constrain it alerts a message and stops the submission of the form by returning false.

<br>For name it checks whether the length of the name given by the user is between 3 and 21 or not. If not then it alerts a message, focus on name input, and returns a false which stops form submission.

<br>When checking email it matches user input by regex string /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/. By using javascript match() function we can check a string's validation by passing regex as an argument. If string does not satisfy regex then it return false and stop form submittion.
