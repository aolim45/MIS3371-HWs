/*
Name: Abigail Lim
File: homework2.js
Date created: 2024-10-18
Date last edited: 2024-10-19
Purpose: To validate & redisplay all of the user's inputs.
*/

// Grabs date from user system
window.onload = function() {
    document.getElementById("currentDate").innerHTML = new Date().toLocaleDateString();
  }

// Adds hyphens automatically for tel
/*function addHyphen(element) {
    let ele = document.getElementById(element.id);
        ele = ele.value.split('-').join('');
        // Code above removes any dashes (-) mistakenly entered.
  
    let finalVal = ele.replace(/(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)/, 
    '$1$2$3-$4$5$6-$7$8$9$10')
        document.getElementById(element.id).value = finalVal;
  }*/
  /* I did not write this code. Source: 
  https://stackoverflow.com/questions/56516668/automatically-add-hyphen-in-phone-number-e-g-111-111-1111
  */
  
// Adds hyphens automatically for ssn (work in progress)
// FOR WHEN I EDIT HTML onkeyup="addHyphen2(this)"
  /* function addHyphen2 (element) {
    let ele = document.getElementById(element.id);
        ele = ele.value.split('-').join('');
        // Code above removes any dashes (-) mistakenly entered.
  
    let finalVal = ele.replace(/(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)/, 
    '$1$2$3-$4$5$6-$7$8$9')
        document.getElementById(element.id).value = finalVal;
  }
*/

// Retrieves user's input on health slider
  function showHealthScore(value) {
    document.getElementById("healthscale").textContent = value;
  }

// Birth date validator
function validateDOB() {
    dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date()-122);

    if (date > new Date()) {
        document.getElementById("DOBer").innerHTML = 
        "Date of birth cannot be in the future.";
        dob.value="";
        return false;
    } 
    else if (date < new Date(maxDate)) {
        document.getElementById("DOBer").innerHTML = 
        "Birth year cannot be more than 122 years ago.";
/* The oldest person alive was 122 years old according 
to the Guinness World Records so that is why I chose 122 years. 
source: https://www.guinnessworldrecords.com/news/2023/12/oldest-person-ever-was-henry-jenkins-really-169-years-old-762010
*/
        dob.value="";
        return false;
    } 
    else {
        document.getElementById("DOBer").innerHTML = "";
        return true;
    }
    }

// SSN validator
function validateSSN() {
    const ssn = document.getElementById("ssn").value;
    // Regex pattern for ssn
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    // SSN formatter & masker (work in progress)
    //const formattedSSN = ssn.slice(0,3) + "-" + ssn.slice (3,5) + "-" + ssn.slice (5,9);
    //ssnInput.value = formattedSSN;

    if (!ssnR.test(ssn)) {
        document.getElementById("SSNer").innerHTML = 
        "Social Security Number should be 9 digits long.";
        return false;
    } 
    else {
        document.getElementById("SSNer").innerHTML = "";
        return true;
    }

}

// Address Line 1 validator
function validateAdd1() {
    var ad1 = document.getElementById("add1").value;
    console.log(ad1);
    console.log(ad1.length);

    if (ad1.length < 5) {
    document.getElementById("add1er").innerHTML =
    "Please enter a valid address on Address Line 1.";
    return false;
    } 
    else {
        document.getElementById("add1er").innerHTML = "";
        return true;
    }

}

// Zip code validator
function validateZip() {
    const zipInput = document.getElementById("zip");
    let zip = zipInput.value.replace(/[^\d-]/g, "");
    // Code aboves removes any non-digit characters.

    if (!zip) {
        document.getElementById("ziper").innerHTML =
        "Zip code must be 5 digits.";
        return false;
    } 
    if (zip.length > 5) {
        zip = zip.slice(0,5);
    }
    // Code above removes any extra digits after the first 5.
    
    zipInput.value = zip;
        document.getElementById("ziper").innerHTML = "";
        return true;
}

// E-mail validator
function validateEmail() {
    email = document.getElementById("email").value;
    // Regex pattern for e-mail
    var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // Lowercase converter
    email = email.toLowerCase();

    // Shows typed e-mail in lowercase
    document.getElementById("email").value = email;

    if (email =="") {
        document.getElementById("emailer").innerHTML = 
        "Please enter a valid e-mail.";
        return false;
    }
    else if (!email.match(emailR)) {
        document.getElementById("emailer").innerHTML =
        "E-mail must contain @ and a valid domain type.";
        return false;
    }
    else {
        document.getElementById("emailer").innerHTML = "";
        return true;
    }
}

// Phone number validator
function validateTel() {
    const teleInput = document.getElementById("tel");
    const tel = telInput.value.replace(/\D/g, "");
    // Code above removes all non-digits.

    if (tele.length !== 0) {
        document.getElementById("teler").innerHTML = 
        "Please enter a valid 10 digit phone number.";
    }

    const formattedTel = tel.slice(0,3) + "-" + tel.slice(3,6) + "-" + tel.slice(6,10);
    telInput.value = formattedTel;
    document.getElementById("teler").innerHTML = "";
    return true;
}

// Username validator
function validateUser() {
    user = document.getElementById("user").value;

    if (user.length == 0) {
    document.getElementById("userer").innerHTML = 
    "Please enter a valid username."
    return false;
}

// Lowercase converter
user = user.toLowerCase();

// Shows typed username in lowercase
document.getElementById("user").value = user;

// Prevents a number from being the 1st character
if (!isNaN(user.charAt(0))) {
    document.getElementById("userer").innerHTML = 
    "Username cannot start with a number."
}

// Username regex pattern
let regex = /^[a-zA-Z0-9_]+$/;
if (!regex.test(user)) {
    document.getElementById("userer").innerHTML = 
    "Username may only have letter, digits, and underscores.";
    return false;
}
// Username length checkers
else if (user.length < 5) {
    document.getElementById("userer").innerHTML = 
    "Minimum username length is 5.";
    return false;
}
else if (user.length > 25) {
    document.getElementById("userer").innerHTML = 
    "Maximum username length is 25.";
    return false;
}
else {
    document.getElementById("userer").innerHTML = "";
    return true;
}

}

// Ensures passwords match & fulfill requirements
  function validatePW() {
    const pw = document.getElementById("pw").value;
    const user = document.getElementById("user").value;

    // Array
    const errorMessage = [];

    // Password length checkers
    if(pw.length < 8) {
        errorMessage.push("Minimum password length is 8 characters.");
    }
    if(pw.length > 30) {
        errorMessage.push("Minimum password length is 30 characters.");  
    }

    // Checks for lowercase letters
    if (!pw.match(/[a-z]/)) {
        errorMessage.push("Password must contain at least one lowercase letter.");
    }

    // Checks for uppercase letters
    if (!pw.match(/[A-Z]/)) {
        errorMessage.push("Password must contain at least one uppercase letter.");
    }

    // Checks for digits
    if (!pw.match(/[0-9]/)) {
        errorMessage.push("Password must contain at least one digit.");
    }

    // Checks for special characters not including quotations
    if (!pw.match(/[!\@#\$%&*\-_\\.+\(\)]/)) {
        errorMessage.push("Password must contain at least one special character (not including quotations).");
    }

    // Prevents password and username from matching
    if (pw == user || pw.includes(user)) {
        errorMessage.push("Password cannot be the same as username.");
    }

    // Allows error messages to display as needed
    const errorContainer = document.querySelector(".pwmessage");
    errorContainer.innerHTML = errorMessage
    .map((message) => '<span>${message}</span></br>')
    .join("");

    }

function confirmPW() {
    pw1 = document.getElementById("pw").value;
    pw2 = document.getElementById("pwv").value;

    if (pw1 != pwv) {
        document.getElementById("pwer").innerHTML = 
        "Passwords do not match. Please re-enter.";
        return false;
    }
    else {
        document.getElementById("pwer").innerHTML = "Passwords match!";
        return true;
    }
}

// Allows user to review their input by pressing "CHECK INPUT"
function checkInput() {
    var formcontent = document.getElementById("signin")
    var formoutput;
    var i;
    formoutput = "<table class='output'><th colspan = '3'>Entered Information:</th>";
    for (i = 0; i < formcontent.length; i++) {
        if (formcontent.elements[i].value != "") {
            datatype = formcontent.elements[i].type;
            switch (datatype) {
                case "checkbox":
                if (formcontent.elements[i].checked) {
                    formoutput = formoutput + "<tr><td align= right'>" + formcontent.elements[i].name + "</td>";
                    formoutput = formoutput + "<td class='outputdata'>&#x2713;</td></tr>";
                }
                    break;
                case "radio":
                if (formcontent.elements[i].checked) {
                    formoutput = formoutput + "<tr><td align='right'>" + formcontent.elements[i].name + "</td>";
                    formoutput = formoutput + "<td class='outputdata'>" + formcontent.elements[i].value + "</td></tr>";
                }
                    break;
                case "button":
                case "submit":
                case "reset":
                    break;
                default:
                    formoutput = formoutput + "<tr><td align='right'>" + formcontent.elements[i].name + "</td>";
                    formoutput = formoutput + "<td class='outputdata'>" + formcontent.elements[i].value + "</td></tr>";
            }
        }
    }
    if (formoutput.length > 0) {
        formoutput = formoutput + "</table>";
        document.getElementById("checkInput").innerHTML = formoutput;
    }
}

// Removes user input review
function removeCheck () {
    document.getElementById("checkInput").innerHTML = "";
}
