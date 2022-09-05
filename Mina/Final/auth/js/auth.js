$(document).ready(function(){
var App = {
    canvas: $('#canvas'),
    url: "http://joshuamina/Final/auth",
    api: "http://joshuamina/Final/api",
    token: localStorage.getItem("token")
}

$.Mustache.options.warnOnMissingTemplates = true;
$.Mustache.load('./templates/auth.html').done(function () {
    function clearPanel(){
    }
    Path.map("#/login").to(function(){ 
        App.canvas.html("").append($.Mustache.render("loginPage"));
        localStorage.removeItem('onlineToken');
        localStorage.removeItem('userInfo');
        $("#formLogin").on("submit",function(e){
            e.preventDefault();
            var search =  $("#user").val();
            var pass =  $("#password").val();
            $.ajax({
                method: "POST", 
                dataType: "json",
                url: App.api + "/user/login", 
                data: {user: search, password: pass},
                success: function(msg){
                  if (parseInt(msg.verified)==1){
                    alert(msg.errorMessage);
                    const jsonArr = JSON.stringify(msg.userData);
                    localStorage.setItem("userInfo", jsonArr);
                    const jsonAr = JSON.stringify(msg.useronline);
                    localStorage.setItem("onlineToken", jsonAr);
                    window.location.href = 'http://joshuamina/Final/auth/#/home'
                  }
                  else if (parseInt(msg.verified) == 0){
                    alert(msg.errorMessage)
                  }
                }   
            });
        });

        $("#gosign").click(function(){
            window.location.href = 'http://joshuamina/Final/auth/#/signin';
            window.location.reload();
        });

        $("#forgot").click(function(){
            var forgotPass = prompt("Please Enter your email.");
            if (forgotPass!=null){
                $.ajax({
                    method: "POST", 
                    dataType: "json",
                    url: App.api + "/user/forgot", 
                    data: {email: forgotPass},
                    success: function(msg){
                      if (parseInt(msg.query)==1){
                        alert(msg.message +"\n      Your Password: "+ msg.password);
                      }
                      else if (parseInt(msg.query) == 0){
                        alert(msg.message);
                      }
                    }   
                });
            }
            
        });
    });

    Path.map("#/signin").to(function(){
        App.canvas.html("").append($.Mustache.render("signinPage"));
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
        //submit event
        $("#formSignUp").on("submit",function(e){
            e.preventDefault();
            username = $("#username").val();   
            name = $("#name").val();
            email = $("#email").val();
            address = $("#address").val();
            bday = $("#birthday").val();
            contactnumber = $("#contactnumber").val();
            password = $("#password").val();
            cpassword = $("#cpassword").val();
            validation(username,name,email,address,bday,contactnumber,password,cpassword);
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
                    $.ajax({
                        method: "POST", 
                        dataType: "json",
                        url: App.api + "/user/signin", //"../api/logininfo.php",
                        data: user,
                        success: function(msg){
                            console.log(msg);
                        if (parseInt(msg.verified) == 1){
                            alert(msg.errorMessage); 
                        }
                        else if (parseInt(msg.verified) == 0){
                            alert(msg.errorMessage)
                            window.location.href = 'http://joshuamina/Final/auth/#/login'
                        }
                        else if (parseInt(msg.verified) == 2){
                            alert(msg.errorMessage)
                        }
                        }
                    });
                
                }
                else{
                        alert(message1+"\n"+message2);
                    }
        });

        $("#back").click(function(){
            window.location.href = 'http://joshuamina/Final/auth/#/login';
            window.location.reload();
        });

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
    }).enter(clearPanel);

    Path.map("#/home").to(function(){        
        App.canvas.html("").append($.Mustache.render("homePage"));
        $("#signin").click(function(){
            var answer = confirm("By leaving the home page you need to log-out first.\nDo you really want to log-out?")
            if (answer == true){
                window.location.href = 'http://joshuamina/Final/auth/#/signin';
                localStorage.removeItem('onlineToken');
                localStorage.removeItem('userInfo');
            }
        });

        $("#logout").click(function(){
            var answer = confirm("Do you really want to logout?")
            if (answer == true){
                window.location.href = 'http://joshuamina/Final/auth/#/login';
                localStorage.removeItem('onlineToken');
                localStorage.removeItem('userInfo');
            }
        });

        $("#showinfo").on('click', function() {
            var strAlluser = localStorage.getItem("userInfo");
            var userInfo = JSON.parse(strAlluser);
            var token = localStorage.getItem("onlineToken");
            if (token==null||token==0){
                window.location.href = 'http://joshuamina/Final/auth/#/login';
                alert("No account logged in... \nYou need to log-in first!");;
            }
            else{
                var data = { username: userInfo[0], name: userInfo[1], email: userInfo[2], address: userInfo[3], birthday: userInfo[4],  age: userInfo[5], contactnum: userInfo[6]};
                var template = "<h3     >WELCOME {{username}}!!</h3> <br> <h3>Hello {{ name }} <br> You are living at {{address}}.<br> Your email is {{email}}.<br> Your birthdate is {{birthday}} and you are {{age}} right now. <br>Your registered number is {{contactnum}} </h5>";
                var text = Mustache.render(template, data);
                $("#user").html(text);
            }
        });
    });
    

    Path.root("#/login");

    Path.listen();

    });
});