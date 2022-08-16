var App = {
    canvas:$("#canvas"),
    url: "http://localhost/gallardo/Day5",
    api: "/api"
}
var loginCred = localStorage.getItem('loginCred');
var logcred = JSON.parse(loginCred);
var logout = 0;
var login = 0;
var usercred = []; // user input storage
$.Mustache.load('templates.html').done(function () {

console.log(App.url);

//Signup
Path.map("#/signup").to(function(){
    App.canvas.mustache('signup');
    prevAccess(logcred);
    //------ Sign Up Javascript-------//
    $(document).ready(function(){
        var storeUser = []; // user input storage

    //-------Event Handler for Form submission-------// 
        $('#signUp').submit(function(e){ 
            e.preventDefault();                                   
            var name = $('#fullname').val();
            var address = $('#address').val();
            var uname = $('#username').val();
            var email = $('#email').val();
            var password = $('#password').val();
            var bday = $('#bday').val();
            var contact = $('#contact').val();
            var err = 0;
            let messages = [];
            
            //-----------User Input Validation----------//        
            if (name == "" || name == null)
            {
                messages.push("Name is Required ");
                err = 1;
            }

            if (address == "" || address == null)
            {
                messages.push("Address is required ");
                err = 1;
            }
            if (uname == "" || uname == null)
            {
                messages.push("Username is required ");
                err = 1;
            }
            if(email == "" || email == null)
            {
                messages.push("Email is required ");
                err = 1;
            }
            if(password == "" || password == null)
            {
                messages.push("Password is required ");
                err = 1;
            }
            if(bday == "" || bday == null)
            {
                messages.push("Birthday is required ");
                err = 1;
            }
            if(contact == "" || contact == null)
            {
                messages.push("Contact is required ");
                err = 1; 
            }
            if ( err == 1)
            {
                alert(messages);
            }
            else
            {
                $.ajax({
                    method: "POST",
                    url: "insert.php?username=",
                    datatype: "json",
                    data: {
                            name : name,
                            address : address,
                            uname : uname,
                            email : email,
                            password : password,
                            bday : bday,
                            contact : contact
                        }
                    }).done(function(data){
                        if(data == "User exist")
                        {
                            alert('The user have been registered');
                            $('#signUp').trigger("reset");
                        }
                        if(data == "User does not exist")
                        {
                            calcAge();
                            timeSubmit();
                            alert(name +" "+ address + " " + bday + " " + contact + " " + uname + " " +email);
                            alert('New user registered');
                            $('#signUp').trigger("reset");
                            
                        }
                        });
                            
            }
                            
        });//end of event handler

        //-------------Event handler for "show user input" button------------//
        $('#show').click(function(){ 
            dispArr(storeUser);
        });//end of event handler

        //-------------Function for Age Calculation------------//
        function calcAge(){
            var bday = $('#bday').val();
            var birthDate = new Date($('#bday').val());
            var birthDay = birthDate.getDate();
            var birthMonth = birthDate.getMonth();
            var birthYear = birthDate.getFullYear();

            var todayDate = new Date();
            var todayDay = todayDate.getDate();
            var todayMonth = todayDate.getMonth();
            var todayYear = todayDate.getFullYear();

            var calcAge = 0;

            if(todayMonth > birthMonth)
            {
                calcAge = todayYear - birthYear;
            }
            else if (todayMonth == birthMonth)
            {
                if(todayDay >= birthDay)
                {
                    calcAge = todayYear - birthYear; 
                }
                else
                {
                    calcAge = todayYear - birthYear - 1;
                }
            }
            else
            {
                calcAge = todayYear - birthYear - 1
            }
            console.log("Age is " + calcAge);
        }//End of age calculation function

        //-------------Function for Form Submission------------//
        function timeSubmit(){
            var todayDate = new Date();
            console.log(todayDate);
        }

        //-------------Function for User Input Storage------------//
        function saveArr(){
            // const inputArr = new Array();
            const inputs = new Array( { 
                "Time Submited" : Date.now(),
                "Name": $('#fullname').val(),
                "Address" : $('#address').val(),
                "Username" : $('#username').val(),
                "Email" : $('#email').val(),
                "Password": $('#password').val(),
                "Birthday" : $('#bday').val(),
                "Contact" : $('#contact').val()
            });

            $('#signUp').trigger("reset");
            return inputs;
        }
            
        $('#tologin').click(function(){
            window.location.replace("#/login");
            window.location.reload();
        });
    });//end of signup form doc ready
});
        
//Login
Path.map("#/login").to(function(){
    App.canvas.mustache('login');
    prevAccess(logcred);
    //------ Login Javascripts --------//
    $(document).ready(function(){ 
        var userInfo = localStorage.getItem('userInfo');
        var obj = JSON.parse(userInfo);
        console.log(obj);

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
                    var found = 0;
                    $.ajax({
                        method: "POST",
                        url: "check.php", //App.api + /update/user/ + 
                        datatype: "json",
                        data: {
                                uname : uname,
                                email : email,
                                pswd : password
                            }
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
            $('#tosignup').click (function (){
                window.location.replace("#/signup");
                window.location.reload();
                });
    });// end of login doc ready
    
});

//Home
Path.map("#/home").to(function(){
    App.canvas.mustache('home');
    prevHome(login);
    $(document).ready(function(){
        $("#logout").click(function(){
            logout = 1;
            alert("Logging out......");
            localStorage.removeItem('loginCred');
            window.location.replace("#/login");
            window.location.reload();
        });
        $("#update").click(function(){
            alert("Want to update your info?");
            window.location.replace("#/update");
            window.location.reload();
        })
        $("#view").click(function(){
            window.location.replace("#/view");
            window.location.reload();
        })
    });
});

Path.map("#/update").to(function(){
    App.canvas.mustache('update');
    prevHome(login);
    //------Update Scripts--------//
    $(document).ready(function(){
        $.getJSON("getinfo.php?username=" + logcred[0][0].Username +"&email=" + logcred[0][0].Email , function(){
            }).done(function(response){
                var edit = response;
            
                // $("#fupdate").on("submit", function(e) {
                //     e.preventDefault();

                // }); This is the standard
            $("#fupdate").submit(function(e){
                e.preventDefault();
                var newname = $('#newname').val();
                var newaddress = $('#newaddress').val();
                var newuname = $('#newusername').val();
                var newemail = $('#newemail').val();
                var newpassword = $('#newpassword').val();
                var newbday = $('#newbday').val();
                var newcontact = $('#newcontact').val();
                var uerr = 0;
                let umessages = [];

                //-----------User Input Validation----------//        
                if (newname == "" || newname == null)
                {
                    umessages.push("Name is Required ");
                    uerr = 1;
                }

                if (newaddress == "" || newaddress == null)
                {
                    umessages.push("Address is required ");
                    uerr = 1;
                }
                if (newuname == "" || newuname == null)
                {
                    umessages.push("Username is required ");
                    uerr = 1;
                }
                if(newemail == "" || newemail == null)
                {
                    umessages.push("Email is required ");
                    uerr = 1;
                }
                if(newpassword == "" || newpassword == null)
                {
                    umessages.push("Password is required ");
                    uerr = 1;
                }
                if(newbday == "" || newbday == null)
                {
                    umessages.push("Birthday is required ");
                    uerr = 1;
                }
                if(newcontact == "" || newcontact == null)
                {
                    umessages.push("Contact is required ");
                    uerr = 1; 
                }
                if ( uerr == 1)
                {
                    alert(umessages);
                }
                else
                {
                    $.ajax({
                        method: "POST",
                        url: "update.php",
                        datatype: "json",
                        data: {
                                edit : edit,
                                name : newname,
                                address : newaddress,
                                uname : newuname,
                                email : newemail,
                                password : newpassword,
                                bday : newbday,
                                contact : newcontact
                            }
                    }).done(function(){
                        
                            const newinputs = new Array( { 
                                "Time Submited" : Date.now(),
                                "Username" : newuname,
                                "Email" : newemail,
                                "Password":newpassword
                            });
                            usercred.push(newinputs);
                            localStorage.setItem("loginCred", JSON.stringify(usercred));
                            alert("Changes have been saved!");
                            $('#fupdate').trigger("reset");
                        
                    });
                }
        });
    });
                $("#cancel").click(function(){
                    window.location.replace("#/home");
                    window.location.reload();
                });
            });
});
//View users
Path.map("#/view").to(function(){
    prevHome(login);
    App.canvas.mustache('view');
    
    $(document).ready(function(){
        $.ajax({
            method: "GET",
            url: "view.php?username=" + logcred[0][0].Username + "&email=" + logcred[0][0].Email,
            success: function (data){
                $("#canvas").html(data);
                $("#backhome").click(function(){
                    prevHome()
                    window.location.replace("#/home");
                    window.location.reload();
                });
            }
        });
        //delete users
        $(document).on('click', '#delete', function () {
            var delid = $(this).attr('userid');
            
                $.ajax({
                    type: "POST",
                    url: "delete.php",
                    data: { userid: delid },
                }).then(function (response) {
                        if (response.success == "0") {
                            alert("Error");
                            location.reload();
                        }
                        else {
                            alert("Data deleted successfully.");
                            location.reload();
                        }
                    });
            });
    });
    
});
Path.root("#/login");
Path.listen();

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
//---- Prevents user to go back to the previous page -----//
        // function disableBack() { window.history.forward();}
        // setTimeout("disableBack()", 0);
        // window.onunload = function () { null };

        // function clearPanel(){
        //     // You can put some code in here to do fancy DOM transitions, such as fade-out or slide-in.
        // }