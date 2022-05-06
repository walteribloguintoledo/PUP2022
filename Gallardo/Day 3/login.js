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
        console.log(obj[2][0][0].Username);
    //-------Event Handler for Form submission-------// // jQuery conversions:
    $('#input').submit(function(e){ 
            e.preventDefault();                                   
            var uname = $('#username').val();
            var email = $('#email').val();
            var password = $('#password').val();
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
    //-----------Check user cred------------//
    // if(userInfo.Username == uname){
      
    // }
    else
    {
        timeSubmit();
        alert(uname + " " +email+" "+password);
        saveArr();
        // usercred.push(users);
        // console.log(usercred);
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
        // const logcred = new Array();
        const inputs = new Array( { 
            "Time Submited" : Date.now(),
            "Username" : $('#username').val(),
            "Email" : $('#email').val(),
            "Password":$('#password').val()
        });
        usercred.push(inputs);
        $('#input').trigger("reset");
    }
    
    });