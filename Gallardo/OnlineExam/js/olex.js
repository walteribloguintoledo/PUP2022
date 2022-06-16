var App = {
    canvas:$("#canvas"),
    url: "http://localhost/PUP2022-1/Gallardo/OnlineExam/#",
    api: "/api"
}
var currentUser = [];
var login = 0;
var logout = 0;
$(document).ready(function(){
    $.Mustache.load('templates.html').done(function(){
        Path.map("#/login").to(function(){
            App.canvas.mustache('login');
            $("#form-login").on('submit',function(e){
                e.preventDefault();
                var email = $('#email').val();
                var pswrd = $('#pswrd').val();
                var error = 0;
                var errorMessage = [];

                if(email == null || email == "") 
                {
                    errorMessage.push("Email ");
                    error++;
                }
                if(pswrd == null || pswrd == "")
                {
                    errorMessage.push("Password ");
                    error++;
                }
                if(error != 0)
                {
                    alert(errorMessage + "cannot be blank");
                }
                else
                {
                    console.log(email);
                    console.log(pswrd);
                    $.ajax({
                        type: "post",
                        url: "api/check",
                        data: {
                            email : email,
                            pswrd : pswrd
                        },
                        dataType: "json",
                        success: function (response) {
                            if(response.valid)
                            {
                                if(response.userType == "Exam Creator")
                                {
                                    alert("You are now logged in Exam Creator");
                                    currentUser.push(response);
                                    console.log(currentUser);
                                    login++;
                                    localStorage.setItem("currentUser", JSON.stringify(currentUser));
                                    window.location.replace("#/creatorDashboard");
                                    window.location.reload();
                                }
                                if(response.userType == "Examinee")
                                {
                                    alert("You are now logged in Examinee");
                                    currentUser.push(response);
                                    console.log(currentUser);
                                    login++;
                                    localStorage.setItem("currentUser", JSON.stringify(currentUser));
                                    window.location.replace("#/examineeDashboard");
                                    window.location.reload();
                                }
                            }
                            else
                            {
                                alert("Invalid credentials");
                            }
                        }
                    });
                }
                    
            });
        });

        Path.map("#/creatorDashboard").to(function(){
            App.canvas.mustache('creatorDashboard');
            $("#creatorDashboard").on('click', function(){
                window.location.replace("#/creatorDashboard");
                window.location.reload();
            });
            $("#creatorDashboard-logo").on('click', function(){
                window.location.replace("#/creatorDashboard");
                window.location.reload();
            });
            $("#createExam").on('click', function(){
                window.location.replace("#/createExam");
                window.location.reload();
            });
            $("#createExam-btn").on('click', function(){
                window.location.replace("#/createExam");
                window.location.reload();
            });
            $("#createdExams").on('click', function(){
                window.location.replace("#/createdExams");
                window.location.reload();
            });
            
            $("#categories").on('click', function(){
                window.location.replace("#/categories");
                window.location.reload();
            });

            $("#subjects").on('click', function(){
                window.location.replace("#/subjects");
                window.location.reload();
            });

            $("#examinees").on('click', function(){
                window.location.replace("#/examinees");
                window.location.reload();
            });

            $("#scores").on('click', function(){
                window.location.replace("#/scores");
                window.location.reload();
            });

        });

        Path.map("#/createExam").to(function(){
            App.canvas.mustache('createExam');
            $("#creatorDashboard-logo").on('click', function(){
                window.location.replace("#/creatorDashboard");
                window.location.reload();
            });
            $("#creatorDashboard").on('click', function(){
                window.location.replace("#/creatorDashboard");
                window.location.reload();
            });
            $("#createExam").on('click', function(){
                window.location.replace("#/createExam");
                window.location.reload();
            });
            $("#createdExams").on('click', function(){
                window.location.replace("#/createdExams");
                window.location.reload();
            });
            
            $("#categories").on('click', function(){
                window.location.replace("#/categories");
                window.location.reload();
            });

            $("#subjects").on('click', function(){
                window.location.replace("#/subjects");
                window.location.reload();
            });

            $("#examinees").on('click', function(){
                window.location.replace("#/examinees");
                window.location.reload();
            });

            $("#scores").on('click', function(){
                window.location.replace("#/scores");
                window.location.reload();
            });
        });
        Path.map("#/createdExams").to(function(){
            App.canvas.mustache('createdExams');
            $("#creatorDashboard-logo").on('click', function(){
                window.location.replace("#/creatorDashboard");
                window.location.reload();
            });
            $("#creatorDashboard").on('click', function(){
                window.location.replace("#/creatorDashboard");
                window.location.reload();
            });
            $("#createExam").on('click', function(){
                window.location.replace("#/createExam");
                window.location.reload();
            });
            $("#createExam-btn").on('click', function(){
                window.location.replace("#/createExam");
                window.location.reload();
            });
            $("#createdExams").on('click', function(){
                window.location.replace("#/createdExams");
                window.location.reload();
            });
            
            $("#categories").on('click', function(){
                window.location.replace("#/categories");
                window.location.reload();
            });

            $("#subjects").on('click', function(){
                window.location.replace("#/subjects");
                window.location.reload();
            });

            $("#examinees").on('click', function(){
                window.location.replace("#/examinees");
                window.location.reload();
            });

            $("#scores").on('click', function(){
                window.location.replace("#/scores");
                window.location.reload();
            });
        });
        Path.map("#/categories").to(function(){
            App.canvas.mustache('viewCategories');
            $("#creatorDashboard-logo").on('click', function(){
                window.location.replace("#/creatorDashboard");
                window.location.reload();
            });
            $("#creatorDashboard").on('click', function(){
                window.location.replace("#/creatorDashboard");
                window.location.reload();
            });
            $("#createExam").on('click', function(){
                window.location.replace("#/createExam");
                window.location.reload();
            });
            $("#createdExams").on('click', function(){
                window.location.replace("#/createdExams");
                window.location.reload();
            });
            
            $("#categories").on('click', function(){
                window.location.replace("#/categories");
                window.location.reload();
            });

            $("#subjects").on('click', function(){
                window.location.replace("#/subjects");
                window.location.reload();
            });

            $("#examinees").on('click', function(){
                window.location.replace("#/examinees");
                window.location.reload();
            });

            $("#scores").on('click', function(){
                window.location.replace("#/scores");
                window.location.reload();
            });
        });
        Path.map("#/subjects").to(function(){
            App.canvas.mustache('viewSubjects');
            $("#creatorDashboard-logo").on('click', function(){
                window.location.replace("#/creatorDashboard");
                window.location.reload();
            });
            $("#creatorDashboard").on('click', function(){
                window.location.replace("#/creatorDashboard");
                window.location.reload();
            });
            $("#createExam").on('click', function(){
                window.location.replace("#/createExam");
                window.location.reload();
            });
            $("#createdExams").on('click', function(){
                window.location.replace("#/createdExams");
                window.location.reload();
            });
            
            $("#categories").on('click', function(){
                window.location.replace("#/categories");
                window.location.reload();
            });

            $("#subjects").on('click', function(){
                window.location.replace("#/subjects");
                window.location.reload();
            });

            $("#examinees").on('click', function(){
                window.location.replace("#/examinees");
                window.location.reload();
            });

            $("#scores").on('click', function(){
                window.location.replace("#/scores");
                window.location.reload();
            });
        });
        Path.map("#/examinees").to(function(){
            App.canvas.mustache('viewExaminees');
            $("#creatorDashboard-logo").on('click', function(){
                window.location.replace("#/creatorDashboard");
                window.location.reload();
            });
            $("#creatorDashboard").on('click', function(){
                window.location.replace("#/creatorDashboard");
                window.location.reload();
            });
            $("#createExam").on('click', function(){
                window.location.replace("#/createExam");
                window.location.reload();
            });
            $("#createdExams").on('click', function(){
                window.location.replace("#/createdExams");
                window.location.reload();
            });
            
            $("#categories").on('click', function(){
                window.location.replace("#/categories");
                window.location.reload();
            });

            $("#subjects").on('click', function(){
                window.location.replace("#/subjects");
                window.location.reload();
            });

            $("#examinees").on('click', function(){
                window.location.replace("#/examinees");
                window.location.reload();
            });

            $("#scores").on('click', function(){
                window.location.replace("#/scores");
                window.location.reload();
            });
        });
        Path.map("#/scores").to(function(){
            App.canvas.mustache('viewSummaryScores');
            $("#creatorDashboard-logo").on('click', function(){
                window.location.replace("#/creatorDashboard");
                window.location.reload();
            });
            $("#creatorDashboard").on('click', function(){
                window.location.replace("#/creatorDashboard");
                window.location.reload();
            });
            $("#createExam").on('click', function(){
                window.location.replace("#/createExam");
                window.location.reload();
            });
            $("#createdExams").on('click', function(){
                window.location.replace("#/createdExams");
                window.location.reload();
            });
            
            $("#categories").on('click', function(){
                window.location.replace("#/categories");
                window.location.reload();
            });

            $("#subjects").on('click', function(){
                window.location.replace("#/subjects");
                window.location.reload();
            });

            $("#examinees").on('click', function(){
                window.location.replace("#/examinees");
                window.location.reload();
            });

            $("#scores").on('click', function(){
                window.location.replace("#/scores");
                window.location.reload();
            });
        });
        
        Path.map("#/examineeDashboard").to(function(){
            App.canvas.mustache('examineeDashboard');
            $("#examineeDashboard-logo").on('click', function(){
                window.location.replace("#/examineeDashboard");
                window.location.reload();
            });
            $("#examineeDashboard").on('click', function(){
                window.location.replace("#/examineeDashboard");
                window.location.reload();
            });
            $("#examsToTake").on('click', function(){
                window.location.replace("#/examsToTake");
                window.location.reload();
            });
            $("#examsScores").on('click', function(){
                window.location.replace("#/examScores");
                window.location.reload();
            });
        });
        Path.map("#/examsToTake").to(function(){
            App.canvas.mustache('examsToTake');
            $("#examineeDashboard-logo").on('click', function(){
                window.location.replace("#/examineeDashboard");
                window.location.reload();
            });
            $("#examineeDashboard").on('click', function(){
                window.location.replace("#/examineeDashboard");
                window.location.reload();
            });
            $("#examsToTake").on('click', function(){
                window.location.replace("#/examsToTake");
                window.location.reload();
            });
            $("#examsScores").on('click', function(){
                window.location.replace("#/examScores");
                window.location.reload();
            });
        });
        Path.map("#/examScores").to(function(){
            App.canvas.mustache('examScores');
            $("#examineeDashboard-logo").on('click', function(){
                window.location.replace("#/examineeDashboard");
                window.location.reload();
            });
            $("#examineeDashboard").on('click', function(){
                window.location.replace("#/examineeDashboard");
                window.location.reload();
            });
            $("#examsToTake").on('click', function(){
                window.location.replace("#/examsToTake");
                window.location.reload();
            });
            $("#examsScores").on('click', function(){
                window.location.replace("#/examScores");
                window.location.reload();
            });
        });
        Path.map("#/loginAsGuest").to(function(){
            App.canvas.mustache('loginAsGuest');
            $("#login-parent").hide();
            $("#guestLogin-form").on('submit', function(e){
                e.preventDefault();
                var guestFirstName = $('#guestFirstName').val();
                var guestMiddlename = $('#guestMiddleName').val();
                var guestLastName = $('#guestLastName').val();
                var category = $('#category').val();
                var error = 0;
                var errorMessage = [];
                if(guestFirstName == null || guestFirstName == "")
                {
                    errorMessage.push("First Name ");
                    error++;
                }
                if(guestMiddlename == null || guestMiddlename == "")
                {
                    errorMessage.push("Middle Name ");
                    error++;
                }
                if(guestLastName == null || guestLastName == "")
                {
                    errorMessage.push("Last Name ");
                    error++;
                }
                if(category == null || category == "")
                {
                    errorMessage.push("Category ");
                    error++;
                }
                if(error != 0)
                {
                    alert(errorMessage + "is REQUIRED");
                }
                else
                {
                    $.ajax({
                        type: "post",
                        url: "api/guestLogin",
                        dataType: "json",
                        data: {
                            guestFirstName : guestFirstName,
                            guestMiddlename : guestMiddlename,
                            guestLastName : guestLastName,
                            category : category
                        },
                        success: function (response) {
                        if(response.valid)
                        {
                            alert("Welcome");
                            
                        }
                        else
                        {
                            alert("Something went wrong");
                        }
                        }
                    });
                }
            })
        });
        Path.map("#/prompt").to(function(){
            App.canvas.mustache('prompt');
            $("#login-parent").hide();
            
        });
        Path.map("#/creatorRegister").to(function(){
            App.canvas.mustache('creatorSignup');
            $("#prompt-parent").hide();
            $("#creatorSignup-form").on('submit', function(e){
                e.preventDefault();
                var userType = $('#userType').val();
                var creatorFirstname = $('#creatorFirstname').val();
                var creatorMiddleName = $('#creatorMiddleName').val();
                var creatorLastName = $('#creatorLastName').val();
                var creatorAddress = $('#creatorAddress').val();
                var creatorBirthday = $('#creatorBirthday').val();
                var creatorEmail = $('#creatorEmail').val();
                var creatorPswrd = $('#creatorPswrd').val();
                var creatorContact = $('#creatorContact').val();
                var error = 0;
                var errorMessage = [];
                if(creatorFirstname == null || creatorFirstname == "")
                {
                    errorMessage.push("First Name ");
                    error++;
                }
                if(creatorMiddleName == null || creatorMiddleName == "")
                {
                    errorMessage.push("Middle Name ");
                    error++;
                }
                if(creatorLastName == null || creatorLastName == "")
                {
                    errorMessage.push("Last Name ");
                    error++;
                }
                if(creatorAddress == null || creatorAddress == "")
                {
                    errorMessage.push("Address ");
                    error++;
                }
                if(creatorBirthday == null || creatorBirthday == "")
                {
                    errorMessage.push("Birthday ");
                    error++;
                }
                if(creatorEmail == null || creatorEmail == "")
                {
                    errorMessage.push("Email ");
                    error++;
                }
                if(creatorPswrd == null || creatorPswrd == "")
                {
                    errorMessage.push("Password ");
                    error++;
                }
                if(creatorContact == null || creatorContact == "")
                {
                    errorMessage.push("Contact ");
                    error++;
                }
                if(error != 0)
                {
                    alert(errorMessage + "cannot be BLANK");
                }
                else
                {
                        $.ajax({
                            type: "post",
                            url: "api/creatorRegister",
                            dataType: "json",
                            data: {
                                userType : userType,
                                creatorFirstname : creatorFirstname,
                                creatorMiddleName : creatorMiddleName,
                                creatorLastName : creatorLastName,
                                creatorAddress : creatorAddress,
                                creatorBirthday : creatorBirthday,
                                creatorEmail : creatorEmail,
                                creatorPswrd : creatorPswrd,
                                creatorContact : creatorContact
                            },
                            success: function (response) {
                            if(response.valid)
                            {
                                alert("Your account has been created");
                                window.location.replace("#/login");
                                window.location.reload();
                            }
                            if(response.emailexist)
                            {
                                alert("The email has been registered please provide another");
                            }
                            }
                        });
                }
            })
        });
        Path.map("#/examineeRegister").to(function(){
            App.canvas.mustache('examineeSignup');
            $("#prompt-parent").hide();
            $("#examineeSignup-form").on('submit', function(e){
                e.preventDefault();
                var userType = $('#userType').val();
                var examineeFirstName = $('#examineeFirstName').val();
                var examineeMiddleName = $('#examineeMiddleName').val();
                var examineeLastName = $('#examineeLastName').val();
                var examineeAddress = $('#examineeAddress').val();
                var examineeBirthday = $('#examineeBirthday').val();
                var examineeEmail = $('#examineeEmail').val();
                var examineePswrd = $('#examineePswrd').val();
                var examineeContact = $('#examineeContact').val();
                var category = $('#category').val();
                var error = 0;
                var errorMessage = [];
                if(examineeFirstName == null || examineeFirstName == "")
                {
                    errorMessage.push("First Name ");
                    error++;
                }
                if(examineeMiddleName == null || examineeMiddleName == "")
                {
                    errorMessage.push("Middle Name ");
                    error++;
                }
                if(examineeLastName == null || examineeLastName == "")
                {
                    errorMessage.push("Last Name ");
                    error++;
                }
                if(examineeAddress == null || examineeAddress == "")
                {
                    errorMessage.push("Address ");
                    error++;
                }
                if(examineeBirthday == null || examineeBirthday == "")
                {
                    errorMessage.push("Birthday ");
                    error++;
                }
                if(examineeEmail == null || examineeEmail == "")
                {
                    errorMessage.push("Email ");
                    error++;
                }
                if(examineePswrd == null || examineePswrd == "")
                {
                    errorMessage.push("Password ");
                    error++;
                }
                if(examineeContact == null || examineeContact == "")
                {
                    errorMessage.push("Contact ");
                    error++;
                }
                if(error != 0)
                {
                    alert(errorMessage + "cannot be BLANK");
                }
                else
                {
                    $.ajax({
                        type: "post",
                        url: "api/examineeRegister",
                        dataType: "json",
                        data: {
                            userType : userType,
                            examineeFirstName : examineeFirstName,
                            examineeMiddleName : examineeMiddleName,
                            examineeLastName : examineeLastName,
                            examineeAddress : examineeAddress,
                            examineeBirthday : examineeBirthday,
                            examineeEmail : examineeEmail,
                            examineePswrd : examineePswrd,
                            examineeContact : examineeContact,
                            category : category
                        },
                        success: function (response) {
                        if(response.valid)
                        {
                            alert("Your account has been created");
                            window.location.replace("#/login");
                            window.location.reload();
                        }
                        if(response.emailexist)
                        {
                            alert("The email has been registered please provide another");
                        }
                        }
                    });
                }
            });
        });
        Path.root("#/login");
        Path.listen();
    });
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
    var allow = /[a-zA-z " ".]/;
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