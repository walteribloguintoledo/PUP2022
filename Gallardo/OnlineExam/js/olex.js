var App = {
    canvas:$("#canvas"),
    url: "http://localhost/PUP2022-1/Gallardo/OnlineExam/#",
    api: "/api"
}
var currentUser = [];
var login = 0;
var logout = 0;
var questioncount=0;//counter for the number of exam questions per exam
var questioncountinit=0;//variable which states that the number of question is reached
var categoryCode = 0; // variable for the category code generation
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
            $.ajax({
                type: "get",
                url: "api/getCategory",//on this part add the JOIN on category and subject
                dataType: "json",
                success: function (response) {
                    console.log(response);
                    var rlen = response.length;
                    console.log(rlen);
                    for(i=0;rlen>0;i++)
                    {
                        $("#examcategories").append('<option>'+response[i].category+'</option>');
                        rlen--;
                    }
                }
            });
            $.ajax({
                type: "get",
                url: "api/getSubjects",
                dataType: "json",
                success: function (response) {
                    console.log(response);
                    var rlen = response.length;
                    console.log(rlen);
                    for(i=0;rlen>0;i++)
                    {
                        $("#examsubjects").append('<option>'+response[i].subject+'</option>');
                        rlen--;
                    }
                }
            });
            
            $("#level").on('click',function(){
                var level = $("#level").val();
                
                if(level==1)
                {
                    questioncount=2;
                    console.log(level);
                    console.log(questioncount);
                }
                if(level==2)
                {
                    questioncount=3;
                    console.log(level);
                    console.log(questioncount);
                }
                if(level==3)
                {
                    questioncount=5;
                    console.log(level);
                    console.log(questioncount);
                }
                if(questioncount!=0)
                {
                    $("#addExam").attr("disabled",true);
                }
            });
            $("#addQuestion").on('click',function(e){
                e.preventDefault();
                var category = $("#category").val();
                var subject = $("#subject").val();
                var level = $("#level").val();
                var examQuestion = $("#examQuestion").val();
                var choice1 = $("#choice1").val();
                var choice2 = $("#choice2").val();
                var choice3 = $("#choice3").val();
                var choice4 = $("#choice4").val();
                var answer = $("#answer").val();
                errorMessage = [];
                error = 0;
                if(category==""||category==null)
                {
                    errorMessage.push(" Category");
                    error++;
                }
                if(subject==""||subject==null)
                {
                    errorMessage.push(" Subject");
                    error++;
                }
                if(level==""||level==null)
                {
                    errorMessage.push(" Level");
                    error++;
                }
                if(examQuestion==""||examQuestion==null)
                {
                    errorMessage.push(" Exam question");
                    error++;
                }
                if(choice1==""||choice1==null)
                {
                    errorMessage.push(" Choice 1");
                    error++;
                }
                if(choice2==""||choice2==null)
                {
                    errorMessage.push(" Choice 2");
                    error++;
                }
                if(choice3==""||choice3==null)
                {
                    errorMessage.push(" Choice 3");
                    error++;
                }
                if(choice4==""||choice4==null)
                {
                    errorMessage.push(" Choice 4");
                    error++;
                }
                if(answer==""||answer==null)
                {
                    errorMessage.push(" Answer");
                    error++;
                }
                if(error!=0)
                {
                    alert(errorMessage + " CANNOT BE BLANK");
                }
                
                else
                {
                    console.log(examQuestion);
                    console.log(choice1);
                    console.log(choice2);
                    console.log(choice3);
                    console.log(choice4);
                    console.log(answer);
                    $.ajax({
                        type: "post",
                        url: "api/addQuestion",
                        data: {
                            level:level,
                            examQuestion : examQuestion,
                            choice1: choice1,
                            choice2 : choice2,
                            choice3 : choice3,
                            choice4 : choice4,
                            answer : answer
                        },
                        dataType: "json",
                        success: function (response) {
                            if(response.valid)
                            {
                                alert("Exam Question Added");
                            }
                            else
                            {
                                alert("The question already exist");
                            }
                        }
                    });
                    $("#examQuestion").val('');
                    $("#choice1").val('');
                    $("#choice2").val('');
                    $("#choice3").val('');
                    $("#choice4").val('');
                    $("#answer").val('');
                    $("#category").attr('disabled',true);
                    $("#subject").attr('disabled',true);
                    $("#level").attr('disabled',true);
                    questioncount--;
                    console.log(questioncount);
                    if(questioncount==0)
                    {
                        $("#addExam").attr("disabled",false);
                        $("#addQuestion").attr("disabled",true);
                        $("#examQuestion").attr("disabled",true);
                        $("#choice1").attr("disabled",true);
                        $("#choice2").attr("disabled",true);
                        $("#choice3").attr("disabled",true);
                        $("#choice4").attr("disabled",true);
                        $("#answer").attr("disabled",true);
                        questioncountinit = 1;
                        console.log(questioncountinit);
                    }
                }
            });
            $("#createExam-form").on('submit',function(e){
                    e.preventDefault();
                    var category = $("#category").val();
                    var subject = $("#subject").val();
                    var level = $("#level").val();
                    var examQuestion = $("#examQuestion").val();
                    var choice1 = $("#choice1").val();
                    var choice2 = $("#choice2").val();
                    var choice3 = $("#choice3").val();
                    var choice4 = $("#choice4").val();
                    var answer = $("#answer").val();
                    errorMessage = [];
                    error = 0;
                    if(questioncountinit==0)
                    {
                        if(category==""||category==null)
                        {
                            errorMessage.push(" Category");
                            error++;
                        }
                        if(subject==""||subject==null)
                        {
                            errorMessage.push(" Subject");
                            error++;
                        }
                        if(level==""||level==null)
                        {
                            errorMessage.push(" Level");
                            error++;
                        }
                        if(examQuestion==""||examQuestion==null)
                        {
                            errorMessage.push(" Exam question");
                            error++;
                        }
                        if(choice1==""||choice1==null)
                        {
                            errorMessage.push(" Choice 1");
                            error++;
                        }
                        if(choice2==""||choice2==null)
                        {
                            errorMessage.push(" Choice 2");
                            error++;
                        }
                        if(choice3==""||choice3==null)
                        {
                            errorMessage.push(" Choice 3");
                            error++;
                        }
                        if(choice4==""||choice4==null)
                        {
                            errorMessage.push(" Choice 4");
                            error++;
                        }
                        if(answer==""||answer==null)
                        {
                            errorMessage.push(" Answer 4");
                            error++;
                        }
                        if(error!=0)
                        {
                            alert(errorMessage + " CANNOT BE BLANK");
                        }
                        else
                        {
                                console.log(category);
                                console.log(subject);
                                console.log(level);
                                console.log(examQuestion);
                                console.log(choice1);
                                console.log(choice2);
                                console.log(choice3);
                                console.log(choice4);
                                console.log(answer);
                                console.log(questioncount);
                        }
                    }
                    else
                    {
                        if(category==""||category==null)
                        {
                            errorMessage.push(" Category");
                            error++;
                        }
                        if(subject==""||subject==null)
                        {
                            errorMessage.push(" Subject");
                            error++;
                        }
                        if(level==""||level==null)
                        {
                            errorMessage.push(" Level");
                            error++;
                        }
                        else
                        {
                                console.log(category);
                                console.log(subject);
                                console.log(level);
                                console.log(questioncount);
                                $.ajax({
                                    type: "post",
                                    url: "api/createExam",
                                    data: {
                                        category:category,
                                        subject:subject,
                                        level:level
                                    },
                                    dataType: "json",
                                    success: function (response) {
                                        if(response.valid)
                                        {
                                            alert("Exam Successfully Created");
                                        }
                                        else
                                        {
                                            alert("The exam is already created")
                                        }
                                    }
                                });
                        }
                    }
                   
                });
            
            
            
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
            
            // var resultsList = [];
            $.getJSON( "api/getCategory", function( response ) {
                var ctr = 0;
                $.each( response, function( i, item ) {
                    $("#tb").append(
                    '<tr><td>'+response[i].id+'</td><td>'+response[i].uid+'</td><td>'+response[i].category+'<td><button class="btn btn-primary btn-success" id="editCategory" type="button" data-bs-toggle="modal" data-bs-target="#editCategoryModal" editID='+response[i].uid+'><i class="fas fa-edit"></i></button></td><td><button class="btn btn-primary btn-danger" type="button" delID='+response[i].uid+' id="deleteCategory"><i class="fas fa-trash-alt"></i></button></td></tr>)');
            //         ctr++;
            //     var result = {
            //         num: ctr,
            //         id: item.id,
            //         uid: item.uid,
            //         category: item.category             
            //     }
            //     resultsList.push(result);
                });
            //     console.log(resultsList);
            });
            // var templateData = {
            //     tableRecord: resultsList
            // }
            // console.log(templateData);
            // App.canvas.mustache('viewCategories', templateData);
            // $.ajax({
            //     type: "get",
            //     url: "api/getCategory",
            //     dataType: "json",
            //     success: function (response) {
            //         console.log(response);
            //         var rlen = response.length;
            //         console.log(rlen);
            //         for(i=0;rlen>0;i++)
            //         {
            //             $("#tb").append(
            //             '<tr><td>'+response[i].id+'</td><td>'+response[i].uid+'</td><td>'+response[i].category+'<td><button class="btn btn-primary btn-success" id="editCategory" type="button" data-bs-toggle="modal" data-bs-target="#editCategoryModal" editID='+response[i].uid+'><i class="fas fa-edit"></i></button></td><td><button class="btn btn-primary btn-danger" type="button" delID='+response[i].uid+' id="deleteCategory"><i class="fas fa-trash-alt"></i></button></td></tr>)');
            //             rlen--;
            //         }
                    $(document).on('click','#editCategory',function(){
                        var editID = $(this).attr('editID');
                        console.log(editID);
                        $.ajax({
                            type: "post",
                            url: "api/fetchCategoryEdit",
                            data: {
                                editID : editID
                            },
                            dataType: "json",
                            success: function (response) {
                                console.log(response.category);
                                $("#newCategory").val(response.category);
                                $("#editCategoryModal-form").on('submit',function(e){
                                    e.preventDefault();
                                    var newCategory = $("#newCategory").val();
                                    if(newCategory==''||newCategory==null)
                                    {
                                        alert("Category CANNOT BE BLANK");
                                    }
                                    else
                                    {
                                        $.ajax({
                                            type: "post",
                                            url: "api/editCategory",
                                            data: {
                                                editID : editID,
                                                newCategory : newCategory
                                            },
                                            dataType: "json",
                                            success: function (response) {
                                                console.log(response);
                                                if(response.valid)
                                                {
                                                    alert("New Category saved");
                                                    window.location.reload();
                                                }
                                                else
                                                {
                                                    alert("The category already exist");
                                                }
                                            }
                                        });
                                    }
                                })
                            }
                        });
                    });
                    $(document).on('click','#deleteCategory',function(){
                        var delID = $(this).attr('delID');
                        console.log(delID);
                        $.ajax({
                            type: "post",
                            url: "api/deleteCategory",
                            data: {
                                delID:delID
                            },
                            dataType: "json",
                            success: function (response) {
                                if(response.valid)
                                {
                                    alert("Category deleted successfully");
                                    window.location.reload();
                                }
                                else
                                {
                                    alert("Something went wrong");
                                    window.location.reload();
                                }
                            }
                        });
                    });
                // }
            // });
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
            $("#addCategorymodal-form").on('submit',function(e){
                e.preventDefault();
                var categoryName = $("#category").val();
                if(categoryName==''|| categoryName==null)
                {
                    alert("Category Name CANNOT BE BLANK")
                }
                else
                {
                    $.ajax({
                        type: "post",
                        url: "api/addCategory",
                        data: {
                            categoryName : categoryName
                        },
                        dataType: "json",
                        success: function (response) {
                            if(response.valid)
                            {
                                alert("Category Successfully Added");
                                $("#category").val('');
                                console.log(response.uid)
                                console.log(response.category)
                                window.location.reload();
                            }
                            else
                            {
                                alert("Category already exist");
                            }
                        }
                    });
                    
                }
                
            });
        });
        Path.map("#/subjects").to(function(){
            // var resultsList = [];
            App.canvas.mustache('viewSubjects');
            $.getJSON("api/getSubjects", function( response ) {
                
            //     var ctr = 0;
                $.each( response, function( i, item ) {
                    $("#tb").append(
                    '<tr><td>'+response[i].id+'</td><td>'+response[i].uid+'</td><td>'+response[i].subject+'</td><td><button class="btn btn-primary btn-success" id="editSubeject" type="button" data-bs-toggle="modal" data-bs-target="#editSubjectModal" editID ='+response[i].id+'><i class="fas fa-edit"></i></button></td><td><button class="btn btn-primary btn-danger" type="button" id="deleteSubject" delID = '+response[i].id+'><i class="fas fa-trash-alt"></i></button></td></tr>');
            //         ctr++;
            //     var result = {
            //         num: ctr,
            //         id: item.id,
            //         uid: item.uid,
            //         subject: item.subject             
            //     }
            //     resultsList.push(result);
                });
            //     console.log(resultsList);
            });
            // var templateData = {
            //     tableRecord: resultsList
            // }
            // console.log(templateData);
            // App.canvas.mustache('viewSubjects', templateData);

            // App.canvas.mustache('viewSubjects');
            
            // $.ajax({
            //     type: "get",
            //     url: "api/getSubjects",
            //     dataType: "json",
            //     success: function (response) {
            //         console.log(response);
            //         var rlen = response.length;
            //         console.log(rlen);
            //         for(i=0;rlen>0;i++)
            //         {
            //             $("#tb").append(
            //                 '<tr><td>'+response[i].id+'</td><td>'+response[i].uid+'</td><td>'+response[i].subject+'</td><td><button class="btn btn-primary btn-success" id="editSubeject" type="button" data-bs-toggle="modal" data-bs-target="#editSubjectModal" editID ='+response[i].id+'><i class="fas fa-edit"></i></button></td><td><button class="btn btn-primary btn-danger" type="button" id="deleteSubject" delID = '+response[i].id+'><i class="fas fa-trash-alt"></i></button></td></tr>');
            //             rlen--;
            //         }
                    $(document).on('click','#editSubeject',function(){
                        var editID = $(this).attr('editID');
                        console.log(editID);
                        $.ajax({
                            type: "post",
                            url: "api/getSubjectEdit",
                            data: {
                                editID : editID
                            },
                            dataType: "json",
                            success: function (response) {
                                console.log(response.subject);
                                $("#newSubject").val(response.subject);
                                var uid = response.uid;
                                $("#editSubjectModal-form").on('submit',function(e){
                                    e.preventDefault();
                                    var newSubject = $("#newSubject").val();
                                    if(newSubject==''||newSubject==null)
                                    {
                                        alert("Category CANNOT BE BLANK");
                                    }
                                    else
                                    {
                                        $.ajax({
                                            type: "post",
                                            url: "api/editSubject",
                                            data: {
                                                editID : editID,
                                                uid: uid,
                                                newSubject : newSubject
                                            },
                                            dataType: "json",
                                            success: function (response) {
                                                console.log(response);
                                                if(response.valid)
                                                {
                                                    alert("New Subject saved");
                                                    window.location.reload();
                                                }
                                                else
                                                {
                                                    alert("The Subject already exist");
                                                }
                                            }
                                        });
                                    }
                                })
                            }
                        });
                    });
                // }
            // });
                    $(document).on('click','#deleteSubject',function(){
                        var delID = $(this).attr('delID');
                        console.log(delID);
                        $.ajax({
                            type: "post",
                            url: "api/deleteSubject",
                            data: {
                                delID:delID
                            },
                            dataType: "json",
                            success: function (response) {
                                if(response.valid)
                                {
                                    alert("Subject deleted successfully");
                                    window.location.reload();
                                }
                                else
                                {
                                    alert("Something went wrong");
                                    window.location.reload();
                                }
                            }
                        });
                    });
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
            $("#addSubject").on('click',function(){
                $.ajax({
                    type: "get",
                    url: "api/getCategory",
                    dataType: "json",
                    success: function (response) {
                        console.log(response);
                        var rlen = response.length;
                        console.log(rlen);
                        for(i=0;rlen>0;i++)
                        {
                            $("#examcategories").append('<option id = "categoryOpt" value='+response[i].uid+'>'+response[i].category+'</option>');
                            console.log(response[i].uid) // THIS NEEDS SOME FIXING AND THINKING
                            rlen--;
                        }
                    }
                });
                
            });
            $("#addSubjectModal-form").on('submit',function(e){
                e.preventDefault();
                var subjectCategory = $("#subjectCategory").val();
                var subjectName =$("#subjectName").val();
                var error = 0;
                var errorMessage=[];
                if(subjectCategory==''|| subjectCategory==null)
                {
                    errorMessage.push(" Category");
                    error++;
                }
                if(subjectName==''|| subjectName==null)
                {
                    errorMessage.push(" Subject");
                    error++;
                }
                if(error!=0)
                {
                    alert(errorMessage + "CANNOT BE BLANK");
                }
                else
                {
                    $.ajax({
                        type: "post",
                        url: "api/addSubject",
                        data: {
                            subjectCategory : subjectCategory,
                            subjectName : subjectName
                        },
                        dataType: "json",
                        success: function (response) {
                            if(response.valid)
                            {
                                console.log(response);
                                alert("Exam subject added");
                                window.location.reload()
                            }
                            else
                            {
                                console.log(response);
                                alert("Exam subject already exist");
                            }
                        }
                    });
                }
                
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
            $.ajax({
                type: "get",
                url: "api/getCategory",
                dataType: "json",
                success: function (response) {
                    console.log(response);
                    var rlen = response.length;
                    console.log(rlen);
                    for(i=0;rlen>0;i++)
                    {
                        $("#categories").append('<option>'+response[i].category+'</option>');
                    }
                }
            });
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
            $.ajax({
                type: "get",
                url: "api/getCategory",
                dataType: "json",
                success: function (response) {
                    console.log(response);
                    var rlen = response.length;
                    console.log(rlen);
                    for(i=0;rlen>0;i++)
                    {
                        $("#categories").append('<option>'+response[i].category+'</option>');
                    }
                }
            });
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
// function generateCategoryCode()
// {
    
//   $.ajax({
//         type: "post",
//         url: "api/categoryCode",
//         dataType: "json",
//         success: function (response) {
//             if(response.valid)
//             {
//                 categoryCode = response.code;
//                 console.log(categoryCode);
//                 return categoryCode;
                
//             }
//         }
//     });
// }