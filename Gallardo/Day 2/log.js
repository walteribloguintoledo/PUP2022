

const form = document.getElementById('input');
const errorName = document.getElementById('errorName');
const errorAddress = document.getElementById('errorAdd');
const errorUname = document.getElementById('errorUname');
const errorEmail = document.getElementById('errorEmail');
const errorBday = document.getElementById('errorBday');
const errorContact = document.getElementById('errorContact');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    var name = document.getElementById('fullname').value;
    var address = document.getElementById('address').value;
    var uname = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var bday = document.getElementById('bday').value;
    var contact = document.getElementById('contact').value;
    let messages = [];
    if (name == "" || name == null)
    {
        messages.push("Name is Required");
        errorName.innerText = messages.join(', ');
    }
    if (address == "" || address == null)
    {
        messages.push("Address is required");
        errorAddress.innerText = messages.join(', ');
    }
    if (uname == "" || uname == null)
    {
        messages.push("Username is required");
        errorUname.innerText = messages.join(', ');
    }
    if(email == "" || email == null)
    {
        messages.push("email is required");
        errorEmail.innerText = messages.join(', ');
    }
    if(bday == "" || bday == null)
    {
        messages.push("Birthday is required");
        errorBday.innerText = messages.join(', ');
    }
    if(contact == "" || contact == null)
    {
        messages.push("Contact is required");
        errorBday.innerText = messages.join(', ');
    }
    
    else
    {
        console.log(name + address + uname + email + bday + contact);
    }
            
})
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
    