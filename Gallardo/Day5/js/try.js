
    var App = {
        canvas:$("#canvas"),
        url: "http://gallardo/Day5/#",
        api: "/api"
    }
    var loginCred = localStorage.getItem('loginCred');
    var logcred = JSON.parse(loginCred);
    // console.log(logcred[0][0].userid);
    var logout = 0;
    var login = 0;
    var usercred = []; // user input storage for login
    var storeUser = []; // user input storage for signup

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
                $('#flogin').on('submit',function(e){ 
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
                            url: "api/check", 
                            dataType: "json",
                            data: {
                                uname : uname,
                                email : email,
                                pswd : password
                            },
                            success: function (response){
                                console.log(response.valid)
                                if(response.valid)
                                {
                                    login = 1;
                                    alert('Hello! You are logged in');
                                    window.location.replace("#/home");
                                    window.location.reload();
                                    found = 1;
                                    console.log(found);
                                    //-----Save to Local Storage-----//
                                    saveArr(response.userid,response.uname,response.email,response.password);
                                    localStorage.setItem("loginCred", JSON.stringify(usercred));
                                }
                                else
                                {
                                    alert("The username, email, or password is invalid");
                                    $('#flogin').trigger("reset");
                                }
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
                function saveArr(userid,uname,email,password){
                    const inputs = new Array( { 
                        "Time Submited" : Date.now(),
                        "userid" : userid,
                        "Username" : uname,
                        "Email" : email,
                        "Password":password
                    });
                    usercred.push(inputs);
                    $('#flogin').trigger("reset");
                }
                $('#tosignup').on('click', function (){
                    window.location.replace("#/signup");
                    window.location.reload();
                    });
            
        });

        Path.map("#/home").to(function(){
            App.canvas.mustache('home');
            prevHome(login);
            $(document).ready(function(){
                $("#logout").on('click',function(){
                    logout = 1;
                    alert("Logging out......");
                    localStorage.removeItem('loginCred');
                    window.location.replace("#/login");
                    window.location.reload();
                });
                $("#update").on('click',function(){
                    alert("Want to update your info?");
                    window.location.replace("#/update");
                    window.location.reload();
                })
                $("#view").on('click',function(){
                    window.location.replace("#/view");
                    window.location.reload();
                })
            });
        });

        Path.map("#/signup").to(function(){
            App.canvas.mustache('signup');
            prevAccess(logcred);
            $('#signUp').on('submit',function(e){ 
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
                        type: "POST",
                        url: "api/register",
                        dataType: "json",
                        data: {
                                name : name,
                                address : address,
                                uname : uname,
                                email : email,
                                password : password,
                                bday : bday,
                                contact : contact
                            },
                        success: function (response)
                        {
                            console.log(response.valid);
                            if(response.valid)
                            {
                                alert("Your information is registered");
                                //-----Save to Local Storage-----//
                                var users = saveArr(response.fullname,response.address,response.username,response.email,response.password,response.bday,response.contact);
                                var existing = JSON.parse(localStorage.getItem("users"));
                                console.log(existing);
                                if(existing!==null)
                                {
                                    storeUser.push(users);
                                    existing.push(users);
                                    localStorage.setItem("users", JSON.stringify(existing));
                            
                                }
                                else
                                {
                                    storeUser.push(users);
                                    console.log(storeUser);
                                    localStorage.setItem("users", JSON.stringify(storeUser));
                                }
                                calcAge(response.bday);
                                timeSubmit();
                            }
                            else if(response.emailexist)
                            {
                                console.log(response.emailexist); 
                                alert("The email is already registered provide another");
                                
                            }
                            else if(response.userexist)
                            {
                                console.log(response.userexist); 
                                alert("The username is already taken provide another");
                            }
                            else
                            {
                                alert('Something went wrong');
                            }
                        }
                        });
                }
                                
            });//end of event handler
            
            //-------------Function for Age Calculation------------//
            function calcAge(bday){
                var birthDate = new Date(bday);
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
            function saveArr(name,address,username,email,password,birthday,contact){
                // const inputArr = new Array();
                const inputs = new Array( { 
                    "Time Submited" : Date.now(),
                    "Name": name,
                    "Address" : address,
                    "Username" : username,
                    "Email" : email,
                    "Password": password,
                    "Birthday" : birthday,
                    "Contact" : contact
                });

                $('#signUp').trigger("reset");
                return inputs;
            }
                
                $('#tologin').on('click',function(){
                    window.location.replace("#/login");
                    window.location.reload();
                });
        });
        Path.map("#/view").to(function(){
            prevHome(login);
            App.canvas.mustache('view');
            $("#backhome").on('click',function(){
                prevHome()
                window.location.replace("#/home");
                window.location.reload();
            });
            $.ajax({
                type: "GET",
                url: "api/view/" + logcred[0][0].userid,
                dataType: "json",
                data:{
                    userid: logcred[0][0].userid
                },
                success: function(response){
                    var rlen=response.length;
                    console.log(rlen);
                    var a = 0;
                    for(a=0;a<rlen;a++)
                    {
                        $('#tb').append('<tr><td>'+response[a].userid+'</td> <td>'+response[a].fullname+'</td><td>'+response[a].address+'</td><td>'+response[a].username+'</td><td>'+response[a].email+'</td><td>'+response[a].password+'</td><td>'+response[a].birthday+'</td><td>'+response[a].contact+'</td><td><button type="button" class="btn btn-danger" id="delete" userid = '+response[a].userid+'>Delete</button></td></tr>');
                    }
                    $(document).on('click', '#delete', function () {
                        var delid = $(this).attr('userid');
                        alert("Delete user?");
                        console.log(delid);
                            $.ajax({
                                type: "POST",
                                url: "api/delete",
                                data: { userid: delid },
                                success: function(response){
                                    if(response)
                                    {
                                        alert("User has been deleted");
                                        location.reload();
                                    }
                                    else
                                    {
                                        alert("There is something wrong");
                                        location.reload();
                                    }
                                }
                            })
                        });
                }
            });
           
        });

        Path.map("#/update").to(function(){
            App.canvas.mustache('update');
            prevHome(login);
            var uid = logcred[0][0].userid;
            console.log(uid);
            $.ajax({
                type: "GET",
                url: "api/getuserinfo",
                dataType: "json",
                data:{
                    userid: uid
                },
                success: function(response){
                    $('#newname').val(response.fullname);
                    $('#newaddress').val(response.address);
                    $('#newusername').val(response.username);
                    $('#newemail').val(response.email);
                    $('#newpassword').val(response.password);
                    $('#newbday').val(response.birthday);
                    $('#newcontact').val(response.contact);
                    
                    $("#fupdate").on('submit',function(e){
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
                            type: "POST",
                            url: "api/update",
                            dataType: "json",
                            data: {
                                    edit : uid,
                                    name : newname,
                                    address : newaddress,
                                    uname : newuname,
                                    email : newemail,
                                    password : newpassword,
                                    bday : newbday,
                                    contact : newcontact
                                },
                            success: function(response)
                            {
                                console.log(response);
                                if(response.valid)
                                {
                                    const newCreds = new Array( { 
                                        "Time Submited" : Date.now(),
                                        "userid" : response.userid,
                                        "Username" : response.username,
                                        "Email" :response.email,
                                        "Password":response.password
                                    });
                                    usercred.push(newCreds);
                                    localStorage.setItem("loginCred", JSON.stringify(usercred));
                                    alert("New information has been saved");
                                    window.location.reload();
                                }
                                else
                                {
                                    alert("The email or username is already taken");
                                }
                            }
                        });
                    }
                    
                });
                }
            });
            
                $("#cancel").on('click',function(){
                    window.location.replace("#/home");
                    window.location.reload();
                });
                $("#back").on('click',function(){
                    window.location.replace("#/home");
                    window.location.reload();
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
