
    var App = {
        canvas:$("#canvas"),
        url: "http://gallardo/Day5",
        api: "/api"
    }
    var loginCred = localStorage.getItem('loginCred');
    var logcred = JSON.parse(loginCred);
    var logout = 0;
    var login = 0;
    var usercred = []; // user input storage
$(document).ready(function(){
    $.Mustache.load('templates.html').done(function () {
        Path.map("#/login").to(function(){
            App.canvas.mustache('login');
            prevAccess(logcred);
            //------ Login Javascripts --------//
            var userInfo = localStorage.getItem('userInfo');
            var obj = JSON.parse(userInfo);
            console.log(obj);
            console.log(App.url+App.api + "/login");
            //-------Event Handler for Form submission-------//
                $('#flogin').submit(function(e){ 
                        e.preventDefault();                                   
                        var uname = $('#uname').val();
                        var email = $('#logemail').val();
                        var password = $('#logpassword').val();
                        var err = 0;
                        let messages = [];
                        
            //-----------User Input Validations----------//
    
                    if (uname == "" || uname == null)
                    {
                        messages.push("Username is required ");
                        err = 1;
                    }
                    if(email == "" || email == null)
                    {
                        messages.push("email is required ");
                        err = 1;
                    }
                    if(password == "" || password == null)
                    {
                        messages.push("Password is required ");
                        err = 1;
                    }
                    if ( err == 1)
                    {
                        alert(messages);
                    }
                    
                    else
                    {
                        //-----------Check user cred inputs------------//
                        console.log(App.url + App.api + "/check");
                        var found = 0;
                        $.ajax({
                            type: "post",
                            url: App.url + App.api + "/check", 
                            dataType: "json",
                            data: {
                                uname : uname,
                                email : email,
                                pswd : password
                            },
                            
                        }).done(function(data){
                            if(data == 'User Found')
                            {
                                login = 1;
                                alert('Hello');
                                window.location.replace("#/home");
                                window.location.reload();
                                found = 1;
                                console.log(found);
                                //-----Save to Local Storage-----//
                                saveArr();
                                localStorage.setItem("loginCred", JSON.stringify(usercred));
                            }
                            else
                            {
                                alert("The username, email, or password is invalid");
                                $('#flogin').trigger("reset");
                            }
    
                        });
                    timeSubmit();
                    } 
                    
                });
            
                //-------------Function for Form Submission------------//
                function timeSubmit(){
                    var todayDate = new Date();
                    console.log(todayDate);
                }
            
                //-------------Function for User Input Storage------------//
                function saveArr(){
                    const inputs = new Array( { 
                        "Time Submited" : Date.now(),
                        "Username" : $('#uname').val(),
                        "Email" : $('#logemail').val(),
                        "Password":$('#logpassword').val()
                    });
                    usercred.push(inputs);
                    $('#flogin').trigger("reset");
                }
                // $('#tosignup').click (function (){
                //     window.location.replace("#/signup");
                //     window.location.reload();
                //     });
        
            
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
    var allow = /[a-zA-z " "]/;
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


function prevAccess(loginCred) //prevents logged in user to go back to login page
{
    if(loginCred === null && login==0)
    {
        return;
    }
    else if(logout == 1)
    {
        window.location.replace("#/login");
        logout = 0;
    }

    else
    {
        alert(" Oops! You are already logged in");
        window.location.replace("#/home");
        window.location.reload();
    }
}
function prevHome(login)//prevents logged out user to access pages
{
    if(login == 0 && logcred === null)
    {
        alert("You must login first");
        window.location.replace("#/login");
        window.location.reload();
        login = 0;
        return login;
    }
}