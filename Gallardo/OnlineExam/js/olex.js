var App = {
    canvas:$("#canvas"),
    url: "http://localhost/PUP2022-1/Gallardo/OnlineExam/#",
    api: "/api"
}


$(document).ready(function(){
    $.Mustache.load('templates.html').done(function(){
        Path.map("#/login").to(function(){
            App.canvas.mustache('login');
            $("#form-login").on('submit',function(e){
                e.preventDefault();
                var email = $('#email').val();
                var pswrd = $('#pswrd').val();
                var error = 0;
                var errorMessage = [];

                if(email == null || email == "") 
                {
                    errorMessage.push("Email ");
                    error++;
                }
                if(pswrd == null || pswrd == "")
                {
                    errorMessage.push("Password ");
                    error++;
                }
                if(error != 0)
                {
                    alert(errorMessage + "cannot be blank");
                }
                else
                {
                    console.log(email);
                    console.log(pswrd);
                }
                    
            });
        });
        Path.map("#/loginAsGuest").to(function(){
            App.canvas.mustache('loginAsGuest');
            $("#login-parent").hide();
            $("#guestLogin-form").on('submit', function(e){
                e.preventDefault();
                var guestFirstName = $('#guestFirstName').val();
                var guestMiddlename = $('#guestMiddleName').val();
                var guestLastName = $('#guestLastName').val();
                var category = $('#category').val();
                var error = 0;
                var errorMessage = [];
                if(guestFirstName == null || guestFirstName == "")
                {
                    errorMessage.push("First Name ");
                    error++;
                }
                if(guestMiddlename == null || guestMiddlename == "")
                {
                    errorMessage.push("Middle Name ");
                    error++;
                }
                if(guestLastName == null || guestLastName == "")
                {
                    errorMessage.push("Last Name ");
                    error++;
                }
                if(category == null || category == "")
                {
                    errorMessage.push("Category ");
                    error++;
                }
                if(error != 0)
                {
                    alert(errorMessage + "is REQUIRED");
                }
                else
                {
                    console.log(guestFirstName,guestMiddlename,guestLastName,category);
                }
            })
        });
        Path.map("#/prompt").to(function(){
            App.canvas.mustache('prompt');
            $("#login-parent").hide();
            
        });
        Path.map("#/creatorRegister").to(function(){
            App.canvas.mustache('creatorSignup');
            $("#prompt-parent").hide();
            $("#creatorSignup-form").on('submit', function(e){
                e.preventDefault();
                var userType = $('#userType').val();
                var creatorFirstname = $('#creatorFirstname').val();
                var creatorMiddleName = $('#creatorMiddleName').val();
                var creatorLastName = $('#creatorLastName').val();
                var creatorAddress = $('#creatorAddress').val();
                var creatorBirthday = $('#creatorBirthday').val();
                var creatorEmail = $('#creatorEmail').val();
                var creatorPswrd = $('#creatorPswrd').val();
                var creatorContact = $('#creatorContact').val();
                var error = 0;
                var errorMessage = [];
                if(creatorFirstname == null || creatorFirstname == "")
                {
                    errorMessage.push("First Name ");
                    error++;
                }
                if(creatorMiddleName == null || creatorMiddleName == "")
                {
                    errorMessage.push("Middle Name ");
                    error++;
                }
                if(creatorLastName == null || creatorLastName == "")
                {
                    errorMessage.push("Last Name ");
                    error++;
                }
                if(creatorAddress == null || creatorAddress == "")
                {
                    errorMessage.push("Address ");
                    error++;
                }
                if(creatorBirthday == null || creatorBirthday == "")
                {
                    errorMessage.push("Birthday ");
                    error++;
                }
                if(creatorEmail == null || creatorEmail == "")
                {
                    errorMessage.push("Email ");
                    error++;
                }
                if(creatorPswrd == null || creatorPswrd == "")
                {
                    errorMessage.push("Password ");
                    error++;
                }
                if(creatorContact == null || creatorContact == "")
                {
                    errorMessage.push("Contact ");
                    error++;
                }
                if(error != 0)
                {
                    alert(errorMessage + "cannot be BLANK");
                }
                else
                {
                        console.log(userType);
                        console.log(creatorFirstname);
                        console.log(creatorMiddleName);
                        console.log(creatorLastName);
                        console.log(creatorAddress);
                        console.log(creatorBirthday);
                        console.log(creatorEmail);
                        console.log(creatorPswrd);
                        console.log(creatorContact);
                }
            })
        });
        Path.map("#/examineeRegister").to(function(){
            App.canvas.mustache('examineeSignup');
            $("#prompt-parent").hide();
            $("#examineeSignup-form").on('submit', function(e){
                e.preventDefault();
                var userType = $('#userType').val();
                var examineeFirstName = $('#examineeFirstName').val();
                var examineeMiddleName = $('#examineeMiddleName').val();
                var examineeLastName = $('#examineeLastName').val();
                var examineeAddress = $('#examineeAddress').val();
                var examineeBirthday = $('#examineeBirthday').val();
                var examineeEmail = $('#examineeEmail').val();
                var examineePswrd = $('#examineePswrd').val();
                var examineeContact = $('#examineeContact').val();
                var category = $('#category').val();
                var error = 0;
                var errorMessage = [];
                if(examineeFirstName == null || examineeFirstName == "")
                {
                    errorMessage.push("First Name ");
                    error++;
                }
                if(examineeMiddleName == null || examineeMiddleName == "")
                {
                    errorMessage.push("Middle Name ");
                    error++;
                }
                if(examineeLastName == null || examineeLastName == "")
                {
                    errorMessage.push("Last Name ");
                    error++;
                }
                if(examineeAddress == null || examineeAddress == "")
                {
                    errorMessage.push("Address ");
                    error++;
                }
                if(examineeBirthday == null || examineeBirthday == "")
                {
                    errorMessage.push("Birthday ");
                    error++;
                }
                if(examineeEmail == null || examineeEmail == "")
                {
                    errorMessage.push("Email ");
                    error++;
                }
                if(examineePswrd == null || examineePswrd == "")
                {
                    errorMessage.push("Password ");
                    error++;
                }
                if(examineeContact == null || examineeContact == "")
                {
                    errorMessage.push("Contact ");
                    error++;
                }
                if(error != 0)
                {
                    alert(errorMessage + "cannot be BLANK");
                }
                else
                {
                        console.log(userType);
                        console.log(examineeFirstName);
                        console.log(examineeMiddleName);
                        console.log(examineeLastName);
                        console.log(examineeAddress);
                        console.log(examineeBirthday);
                        console.log(examineeEmail);
                        console.log(examineePswrd);
                        console.log(examineeContact);
                        console.log(category);
                }
            });
        });
        Path.root("#/login");
        Path.listen();
    });
});
//---------Input Restrictions-------//
function numOnly(ev){
    var ch = String.fromCharCode(ev.which)
    if(!(/[0-9]/.test(ch)))
    {
    ev.preventDefault();
    }
}
function lettersOnly(ev){
    var ch = String.fromCharCode(ev.which)
    var name = $('#fullname');
    var allow = /[a-zA-z " ".]/;
    if(!(allow.test(ch))){
    ev.preventDefault();
    }
}
function noSpace(ev){
    var ch = String.fromCharCode(ev.which);
    uname = $('#username');
    var allow = /^[A-Za-z0-9_@./#&+-]*$/;
    if(!(allow.test(ch))){
    ev.preventDefault();
    }
}