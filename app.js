

const EMAIL_PATTERN = /[a-z A-Z 0-9 _ /-]*[@][a-z]*[.][a-z]{3,5}/;
let userInput = document.getElementById("email-box").value;

function validateEmail(userInput){
    let match = EMAIL_PATTERN.test(userInput);
        if (!(match)){
            document.getElementById("form").style.border = "2px solid hsl(0, 93%, 68%)";
            document.getElementById("error-message").style.display = "block";
            document.getElementById("error-icon").style.display = "block";
        }
}
validateEmail(userInput);