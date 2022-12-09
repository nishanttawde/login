// [Omkar]: Why this is declared at top/ globally?
var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

// [Omkar]: What is the use of this?
var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);

function validated(){
    if (email.value.length < 9) {
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
         // [Omkar]: There should be return statment outside if too.
        return false;
    }
    if (password.value.length < 6) {
        password.style.border = "1px solid red";
        pass_error.style.display = "block";
        password.focus();
         // [Omkar]: There should be return statment outside if too.
        return false;
    }
}

// [Omkar]: Is this working? How?
function email_Verify(){
    if (email.value.length >=8) {
        email.style.border = "1px solid silver";
        email_error.style.display = "none";
        // [Omkar]: There should be return statment outside if too. What happens if input length is less than 8?
        return true;
    }
}
function pass_Verify(){
    if (password.value.length >=5) {
        password.style.border = "1px solid silver";
        pass_error.style.display = "none";
        // [Omkar]: There should be return statment outside if too. What happens if password length is less than 5?
        return true;
    }
}