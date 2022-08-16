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
$('#input').submit(function(e){ 
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
    messages.push("email is required ");
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
    alert(name +" "+ address + " " + bday + " " + contact + " " + uname + " " +email+""+password);
    // var users = saveArr();
    // storeUser.push(users);
    // localStorage.setItem("userInfo", JSON.stringify(storeUser));
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
    $('#input').trigger("reset");
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
$("#inArr").click(function(){
    $("#inArr").hide();
  });
});