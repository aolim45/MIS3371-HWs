/*
Name: Abigail Lim
File: homework2.js
Date created: 2024-10-18
Date last edited: 2024-10-19
Purpose: To validate & redisplay all of the user's inputs.
*/

/* Grabs date from user system */
window.onload = function getdate() {
  document.getElementById("currentDate").innerHTML = new Date().toLocaleDateString();
};

/* Retrieves user's input on health slider */
function updateHealthScore(value) {
  document.getElementById('healthscale').textContent = value;
}

/*Ensures passwords match & fulfill requirements */
function passwordentry() 
    {
    var passwordoutput;
    var passwordinput = document.getElementById("passwordbox1").value;
    console.log(passwordinput);

    // Password length checker
    if(passwordinput.length < 8) {
        passwordoutput = "Password length must be 8 or more";
        error_flag = 1;
    }
    if(passwordinput.length > 30) {
        passwordoutput = "Password length needs to 30 or less";
        error_flag = 1;
    }
    document.getElementById("password_message5").innerHTML = passwordoutput;
    // No special characters /[!\@#\$%&*\-_\\.+\(\)]/
   if(passwordinput.search(/[!@#$%^&*()?<>.`;:'"`]/)>0 ) {   
    passwordoutput = "No special characters allowed. Use only letters, numbers, and an underscore or dash";
    error_flag = 1;
    document.getElementById("password_message4").innerHTML = passwordoutput;
   }

   // Prevents spaces in password
   if(passwordinput.search(/[]/)>0 ) {   
    passwordoutput = "No spaces allowed";
    error_flag = 1;
    } 
  }
