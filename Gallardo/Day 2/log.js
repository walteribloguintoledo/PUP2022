

const form = document.getElementById('input');
const errorName = document.getElementById('errorName');
const errorAddress = document.getElementById('errorAdd');
const errorUname = document.getElementById('errorUname');
const errorEmail = document.getElementById('errorEmail');
const errorBday = document.getElementById('errorBday');
const errorContact = document.getElementById('errorContact');
document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();
    var name = document.getElementById('fullname').value;
    var address = document.getElementById('address').value;
    var uname = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var bday = document.getElementById('bday').value;
    var contact = document.getElementById('contact').value;
    var err = 0;
    let messages = [];
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
        let array = [];
        // console.log(name +" "+ address + " " + bday + " " + contact + " " + uname + " " +email);
        alert(name +" "+ address + " " + bday + " " + contact + " " + uname + " " +email);
        array.push(name, address, bday, contact, uname, email);
        const inputArr = [];
        const inputs = { 
            "Time Submited" : Date.now(),
            "name": document.getElementById('fullname').value,
            "Address: " : document.getElementById('address').value,
            "Username: " : document.getElementById('username').value,
            "Email: " : document.getElementById('email').value,
            "Birthday: " : document.getElementById('bday').value,
            "Contact: " : document.getElementById('contact').value
        };
        inputArr.push(inputs);
        document.getElementById('input').reset();
        console.log(inputArr);
        // saveArr();
        dispArr(array)
        // console.log(array);
    //    document.getElementById('input').reset();

        
    }
    
    
    
})
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
function timeSubmit(){
    var todayDate = new Date();
    // var todayDay = todayDate.getDate();
    // var todayMonth = todayDate.getMonth();
    // var todayYear = todayDate.getFullYear();
    // var currdate = '${month}/${date}/${year}';
    console.log(todayDate);
}
// // function saveArr(){
// //     const inputArr = new Array();
// //     // var name = document.getElementById('fullname').value;
// //     // var address = document.getElementById('address').value;
// //     // var uname = document.getElementById('username').value;
// //     // var email = document.getElementById('email').value;
// //     // var bday = document.getElementById('bday').value;
// //     // var contact = document.getElementById('contact').value;
// //     const inputs = new Array( { 
// //         "Time Submited" : Date.now(),
// //         "name": document.getElementById('fullname').value,
// //         "Address: " : document.getElementById('address').value,
// //         "Username: " : document.getElementById('username').value,
// //         "Email: " : document.getElementById('email').value,
// //         "Birthday: " : document.getElementById('bday').value,
// //         "Contact: " : document.getElementById('contact').value
// //     });
    
// //     // inputArr.push(name, address, uname, email, bday, contact);
// //         // array.push(inputs);
  
// //     inputArr.push(inputs);
// //     document.getElementById('input').reset();
// //     console.log(inputArr); //di nag sesave ang last input napapalitan agad ng bagong ininput
// //     // console.log(array);
// }
function dispArr(array){
    // let text = "<ul>";
    // for(let i=0; i<array.length; i++)
    // {
       
    //     text += "<p>" + array[i] + "</p>";
       
    // }
    // text += "</ul>";
    document.getElementById("array").innerHTML = array;
    console.log(array);
}
    
    // var address = document.getElementById('address').value;
    // var uname = document.getElementById('username').value;
    // var email = document.getElementById('email').value;
    // var bday = document.getElementById('bday').value;
    // var contact = document.getElementById('contact').value;
     // document.getElementById('submit').onclick = function(){
            // var name = document.getElementById('fullname').value;
            // var address = document.getElementById('address').value;
            // var uname = document.getElementById('username').value;
            // var email = document.getElementById('email').value;
            // var bday = document.getElementById('bday').value;
            // var contact = document.getElementById('contact').value;
    