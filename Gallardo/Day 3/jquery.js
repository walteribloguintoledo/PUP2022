
var storeUser = []; // user input storage
const form = $('#input');
const errorName = $('#errorName');
const errorAddress = $('#errorAdd');
const errorUname = $('#errorUname');
const errorEmail = $('#errorEmail');
const errorBday = $('#errorBday');
const errorContact = $('#errorContact');

//-------Event Handler for Form submission-------// // jQuery conversions:
$('#input').submit(function(e){ 
        e.preventDefault();                                   
        var name = $('#fullname').val();
        var address = $('#address').val();
        var uname = $('#username').val();
        var email = $('#email').val();
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
    // let array = [];
    //console.log(name +" "+ address + " " + bday + " " + contact + " " + uname + " " +email);
    alert(name +" "+ address + " " + bday + " " + contact + " " + uname + " " +email);
    // array.push(name, address, bday, contact, uname, email);
    // saveArr();
    var users = saveArr();
    storeUser.push(users);
    console.log(storeUser);
    // dispArr(array)
    // console.log(array);
    //document.getElementById('input').reset();
     
} 
});
//-------------Event handler for "show user input" button------------//
$('#show').click(function(){ 
    dispArr(storeUser);
});
//-------------Function for Age Calculation------------//
function calcAge(){
    var bday = $('#bday').value;
    var birthDate = new Date($('#bday').value);
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
    // var todayDay = todayDate.getDate();
    // var todayMonth = todayDate.getMonth();
    // var todayYear = todayDate.getFullYear();
    // var currdate = '${month}/${date}/${year}';
    
}
//-------------Function for User Input Storage------------//
function saveArr(){
    const inputArr = new Array();
    // var name = document.getElementById('fullname').value;
    // var address = document.getElementById('address').value;
    // var uname = document.getElementById('username').value;
    // var email = document.getElementById('email').value;
    // var bday = document.getElementById('bday').value;
    // var contact = document.getElementById('contact').value;
    const inputs = new Array( { 
        "Time Submited" : Date.now(),
        "name": $('#fullname').value,
        "Address: " : $('#address').value,
        "Username: " : $('#username').value,
        "Email: " : $('#email').value,
        "Birthday: " : $('#bday').value,
        "Contact: " : $('#contact').value
    });
    inputArr.push(inputs);
    $('#input').reset();
    return inputArr;
    // inputArr.push(name, address, uname, email, bday, contact);
    // array.push(inputs);
    // console.log(inputArr); //di nag sesave ang last input napapalitan agad ng bagong ininput
    // console.log(array);
}
//-------------Function for User Input of Array display------------//
function dispArr(storeUser){
    // let text = "<ul>";
    // for(let i=0; i<storeUser.length; i++)
    // {
       
    //     text += "<p>" + storeUser[i] + "</p>";
        
    // }
    // text += "</ul>";
    $("#array").innerHTML = JSON.stringify(storeUser);
    // document.getElementById("array").innerHTML = storeUser;
    console.log(storeUser);
}