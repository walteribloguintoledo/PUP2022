var alluser = [];
//recall info in Local Storage
var strAlluser = localStorage.getItem("alluser");
var parsedArr = JSON.parse(strAlluser);
alluser = parsedArr
console.log(alluser)    

var name = "";
var email = "";
var address = "";
var bday = "";
var contactnumber = "" ;
var username = "";
var password = "";
var age = "";
var cpassword = "";
var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
var letters = /^[A-Za-z]+$/;
var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var message1 = "";
var message2 = "";
var display = "";


function getage(bday){
    var dob = new Date(bday);
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff); 
    var year = age_dt.getUTCFullYear();
    age = Math.abs(year - 1970);
    return age;
}

function validation(username,name,email,address,birthday,contactnumber,password,cpassword){
    message1 ="";
    if (username==null||username==""){
        message1 = "Please Type Username"
    }
    
    else{

        if(name==null||name==""){
            message1 = "Please Type Name"
        }
        else if(!letters.test(name))
        {
            message1 = 'Name field required only alphabet characters';
        }
        else{
            if (email==null||email==""){
                message1 = "Please Type email"
            }
            
            else{
                if(address==null||address==""){
                    message1 = "Please Type address"
                }
                else{
                    if(birthday==null||birthday==""){
                        message1 = "Please Type Birthday"
                    }
                    else{
                        if(contactnumber==null||contactnumber==""){
                            message1 = "Please Type Contact Number"
                        }
                        else{
                            if(password==null||password==""){
                                message1 = "Please Type Password"
                            }
                            else if(!pwd_expression.test(password))
                            {
                                message1 ='Upper case, Lower case, Special character and Numeric letter are required in Password filed';
                            }
                            else if(password.length < 6)
                            {
                                message1 ='Password minimum length is 6';
                            }
                            else if(password.length > 12)
                            {
                                message1 ='Password max length is 12';
                            }
                            else{
                                
                                    if(password==cpassword){
                                        message1 = ""
                                    }
                                    else{
                                        message1 = "Password Unmatched"
                                    }
                                }
                            
                        }
                    }
                }  
                }   
        }
    }
    return message1;
}

function getinfo(){
    $(document).ready(function(){
    $("button").click(function(){
        username = $("#username").val();   
            name = $("#name").val();
            email = $("#email").val();
            address = $("#address").val();
            bday = $("#birthday").val();
            contactnumber = $("#contactnumber").val();
            password = $("#password").val();
            cpassword = $("#cpassword").val();
    });
    validation(username,name,email,address,bday,contactnumber,password,cpassword);
    //checker(username, email);        
        if (message1==""&&message2==""){
            console.log("      Your Info:\nName: "+ name +"\nEmail: "+ email +"\nAddress: "+ address +"\nbirthday: "+ getage(bday) +"\nAge: "+ age+"\nContact Number: "+ contactnumber + "\nUsername: "+ username +"\nPassword: "+ password+"\nPassword Confirmation: "+ cpassword);
            var user = {};
        user.username = username; 
        user.name = name;
        user.email = email;
        user.address = address;
        user.birthday = bday; 
        user.age = getage(bday);
        user.cnumber = contactnumber;
        user.password = password;
        console.log(user);
        alluser.push(user);
        console.log(alluser);
        $("#insertuser").text("Username: "+ username);
        $("#insertname").text("Name: "+ name);
        $("#insertemail").text("Email: "+ email);
        $("#insertaddres").text("Address: "+ address);
        $("#insertbday").text("Birthday: "+ bday);
        $("#insertage").text("Age: "+ age);
        $("#insertcnum").text("Contact Number: "+ contactnumber);
        $("#insertpass").text("Password: "+ password);

        
        // Save to Local Storage
        const jsonArr = JSON.stringify(alluser);
        localStorage.setItem("alluser", jsonArr);
        
        window.location.href = 'http://joshuamina/Day3/Authentication/#/login';

        }
        else{
                alert(message1+"\n"+message2);
            }
    });
}
function searchinfo(){
    $("#searches").click(function(){
    var search =  $("#search").val();
    var match =  $("#insert").val();
    var matchuser = "";
    var usernameinfo = "Username:   ";
    var nameinfo = "Name:   ";
    var emailinfo = "Email:     ";
    var addressinfo = "Address: ";
    var bdayinfo = "Birthday:   ";
    var ageinfo = "Age:     ";
    var contactinfo = "Contact Number: ";
    var passinfo = "Password";
    for (var i= 0; i < alluser.length; i++) {
        for(var y in alluser[i]){
        if(alluser[i][y] == search){
            for(var w in alluser[i]){
                if (w == "username"){
                    usernameinfo += alluser[i][w] + ";      ";
                    $("#insertuser").text(usernameinfo);
                }
                if (w == "name"){
                    nameinfo += alluser[i][w] + ";      ";
                    $("#insertname").text(nameinfo);
                }
                if (w == "email"){
                    emailinfo += alluser[i][w] + ";      ";
                    $("#insertemail").text(emailinfo);
                }
                if (w == "address"){
                    addressinfo += alluser[i][w] + ";      ";
                    $("#insertaddres").text(addressinfo);
                }
                if (w == "birthday"){
                    bdayinfo += alluser[i][w] + ";      ";
                    $("#insertbday").text(bdayinfo);
                }
                if (w == "age"){
                    ageinfo += alluser[i][w] + ";      ";
                    $("#insertage").text(ageinfo);
                }
                if (w == "cnumber"){
                    contactinfo += alluser[i][w] + ";      ";
                    $("#insertcnum").text(contactinfo);
                }
                if (w == "password"){
                    passinfo += alluser[i][w] + ";      ";
                    $("#insertpass").text(passinfo);
                }
            }
        }
        }
    }
    

});
}
function checker(username,email){ 
    
    const str = localStorage.getItem("alluser");
    const parsedArr = JSON.parse(str);
    console.log(parsedArr);
    for (var i= 0; i < parsedArr.length; i++) {
        message2 = "";
        if(parsedArr[i]["username"] == username){
            console.log("Confirm");
            message2 += "That username is Already Taken \n" ;

        }
        if(parsedArr[i]["email"] == email){
            console.log("Confirm");
            message2 += "That email is already used \n" ;
        }
        
    }
    return message2;
        
}   