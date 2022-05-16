
var storeUser = []; // user input storage
const form = document.getElementById('input');
const errorName = document.getElementById('errorName');
const errorAddress = document.getElementById('errorAdd');
const errorUname = document.getElementById('errorUname');
const errorEmail = document.getElementById('errorEmail');
const errorBday = document.getElementById('errorBday');
const errorContact = document.getElementById('errorContact');

//-------Event Handler for Form submission-------// // jQuery conversions:
form.addEventListener('submit', (e) => {//$("form").submit(function(e){ actions go here });
        e.preventDefault();                                   
        var name = document.getElementById('fullname').value; // => var name = $('#fullname').val();
        var address = document.getElementById('address').value;// => var address = $('#address').val();
        var uname = document.getElementById('username').value;// => var uname = $('#username').val();
        var email = document.getElementById('email').value;// => var email = $('#email').val();
        var bday = document.getElementById('bday').value;// => var bday = $('#bday').val();
        var contact = document.getElementById('contact').value;// => var name = $('#fullname').val();
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
    // console.log(name +" "+ address + " " + bday + " " + contact + " " + uname + " " +email);
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
})
//-------------Event handler for "show user input" button------------//
document.getElementById('show').addEventListener('click', (e) => {
    dispArr(storeUser);
});
//-------------Function for Age Calculation------------//
function calcAge(){
    var bday = document.getElementById('bday').value;
    var birthDate = new Date(document.getElementById('bday').value);
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
        "name": document.getElementById('fullname').value,
        "Address: " : document.getElementById('address').value,
        "Username: " : document.getElementById('username').value,
        "Email: " : document.getElementById('email').value,
        "Birthday: " : document.getElementById('bday').value,
        "Contact: " : document.getElementById('contact').value
    });
    inputArr.push(inputs);
    document.getElementById('input').reset();
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
    document.getElementById("array").innerHTML = JSON.stringify(storeUser);
    // document.getElementById("array").innerHTML = storeUser;
    console.log(storeUser);
}