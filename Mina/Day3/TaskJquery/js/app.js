var App = {
    canvas:$("#canvas"),
    url: "http://localhost/gallardo/Day%203",
    api: "/api"
}
var loginCred = localStorage.getItem('loginCred');
var logcred = JSON.parse(loginCred);
var logout = 0;
var login = 0;
$.Mustache.load('templates.html').done(function () {

console.log(App.url);

function clearPanel(){
    // You can put some code in here to do fancy DOM transitions, such as fade-out or slide-in.
}

    Path.map("#/signup").to(function(){
            App.canvas.mustache('signup');
            prevAccess(logcred);
                    //------ Sign Up Javascript-------//
                $(document).ready(function(){
                        var storeUser = []; // user input storage
                        const form = $('#input');
                        const errorName = $('#errorName');
                        const errorAddress = $('#errorAdd');
                        const errorUname = $('#errorUname');
                        const errorEmail = $('#errorEmail');
                        const errorPass = $('#password')
                        const errorBday = $('#errorBday');
                        const errorContact = $('#errorContact');

                    //-------Event Handler for Form submission-------// // jQuery conversions:
                        $('#submit').click(function(e){ 
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
                                calcAge();
                                timeSubmit();
                                alert(name +" "+ address + " " + bday + " " + contact + " " + uname + " " +email);
                                
                                //-----Save to Local Storage-----//
                                var existing = JSON.parse(localStorage.getItem("userInfo"));
                                console.log(existing);
                                if(existing!==null)
                                {
                                    var users = saveArr();
                                    storeUser.push(users);
                                    existing.push(users);
                                    localStorage.setItem("userInfo", JSON.stringify(existing));

                                }
                                else
                                {
                                    var users = saveArr();
                                    storeUser.push(users);
                                    console.log(storeUser);
                                    localStorage.setItem("userInfo", JSON.stringify(storeUser));
                                }
                                
                            } 
                        });
                    //-------------Event handler for "show user input" button------------//
                    $('#show').click(function(){ 
                            dispArr(storeUser);
                        });

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
                    }

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

                    //-------------Function for User Input of Array display------------//
                    function dispArr(){
                        var a = 0
                        var userInfo = localStorage.getItem('userInfo');
                        var obj = JSON.parse(userInfo);
                        var len = obj.length;
                        for(a=0;a<len;a++)
                        {
                            $('#inArr').append("Name: " + obj[a][0].Name + "<br>"+ "Address: "+obj[a][0].Address + "<br>"+ "Username: " + obj[a][0].Username + "<br>" + "Email: "+obj[a][0].Email+"<br>" + "Birthday: " +obj[a][0].Birthday+"<br>"+ "Contact no: " + obj[a][0].Contact+"<br><br>");
                        }
                        $("#inArr").show();
                        console.log(obj);
                    }
                       
                    //-----Hide displayed user inputs-----//
                    $("#inArr").click(function(){
                        $("#inArr").hide();
                    });

                    $('#tologin').click(function(){
                        window.location.replace("#/login");
                        window.location.reload();
                    });
                });
    });
        

    
    Path.map("#/login").to(function(){
            App.canvas.mustache('login');
            console.log(logcred);
            prevAccess(logcred);
            //------ Login Javascripts --------//
                $(document).ready(function(){
                    var usercred = []; // user input storage
                    const form = $('#input');
                    const errorName = $('#errorName');
                    const errorAddress = $('#errorAdd');
                    const errorUname = $('#errorUname');
                    const errorEmail = $('#errorEmail');
                    const errorPass = $('#password')
                    const errorBday = $('#errorBday');
                    const errorContact = $('#errorContact');
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
                        
                    //-----------User Input Validation----------//
                    
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
                            for(var a = 0; a < obj.length; a++)
                            {
                                if((obj[a][0].Username == uname)&&(obj[a][0].Email == email)&&(obj[a][0].Password == password))
                                {
                                    login = 1;
                                    alert('Hello');
                                    window.location.replace("#/home");
                                    window.location.reload();
                                    found = 1;
                                    console.log(found);
                                    break;
                                }
                            }
                            if(found==0)
                            {
                                alert("The username, email, or password is invalid");
                            }
                    
                        timeSubmit();
                        saveArr();
                
                    //-----Save to Local Storage-----//
                    localStorage.setItem("loginCred", JSON.stringify(usercred));
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
                });
        
    }).enter(clearPanel);

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
        });
        // var viewData = { name: 'Ed John Paul' };
        // $.Mustache.load('templates.html').done(function () {
        //     $('body').mustache('simple-hello', viewData);
        // });
    }).enter(clearPanel);

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
//---- Prevents user to go back to the previous page -----//
        // function disableBack() { window.history.forward();}
        // setTimeout("disableBack()", 0);
        // window.onunload = function () { null };
    function prevAccess(loginCred){
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
    function prevHome(login)
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