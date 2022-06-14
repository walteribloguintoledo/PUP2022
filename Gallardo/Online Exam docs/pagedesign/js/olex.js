$(document).ready(function(){
    $('#signupForm').on('submit', function(e){
        e.preventDefault();
        var firstname = $('#firstname').val();
        var lastname = $('#lastname').val();
        var address = $('#address').val();
        var birthday = $('#birthday').val();
        var email = $('#email').val();
        var pswd = $('#pswd').val();
        // var confirmPassword = $('#confirmPswd')
        // var contact = $('#contact').val();
        var errors = 0;
        let errorMessages = [];

        if(firstname == "" || firstname == null)
        {
            errors = 1;
            errorMessages.push("Firstname");
        }
        if(lastname == "" || lastname == null)
        {
            errors = 1;
            errorMessages.push("Lastname");
        }
        if(address == "" || address == null)
        {
            errors = 1;
            errorMessages.push("Address");
        }
        if(birthday == "" || birthday == null)
        {
            errors = 1;
            errorMessages.push("Birthday");
        }
        if(email == "" || email == null)
        {
            errors = 1;
            errorMessages.push("Email");
        }
        if(pswd == "" || pswd == null)
        {
            errors = 1;
            errorMessages.push("Password");
        }
        if(errors = 1)
        {
            alert("OOPS! " + errorMessages + " cannot be blank");
        }
    });
});