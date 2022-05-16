
const fullname = document.getElementById ("fullname");
const address = document.getElementById ("address");
const bday = document.getElementById ("bday");
const contact = document.getElementById ("contact");
const signup = document.getElementById ('signup');
const error = document.getElementById ('error');

signup.addEventListener('submit',(e) => {
    e.preventDefault();
    let messages = [];
    if( fullname.value == ''|| fullname.value == null)
    {
        messages.push('Name is Required')
    }
    
})