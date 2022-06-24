$(document).ready(function(){
    var App = {
        canvas:$("#canvas"),
        url: "http://localhost/PUP2022-1/Gallardo/OnlineExam/#",
        api: "/api"
    }
    var currentUser = [];
    var login = 0;
    var logout = 0;
    $.Mustache.load('authentication.html').done(function(){
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

            $("#settings").on('click',function(){
                window.location.replace("#/examSettings");
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
            // App.canvas.mustache('viewCategories');
            
            
            var resultsList = [];
            $.getJSON( "api/getCategory", function( response ) {
                var ctr = 0;
                $.each( response, function( i, item ) {
                    ctr++;
                    var result = {
                        num: ctr,
                        id: item.id,
                        uid: item.uid,
                        category: item.category             
                    }
                resultsList.push(result);
                });
                console.log(resultsList);
            });
            var templateData = {
                tableRecords: resultsList
            }
            console.log(templateData);
            App.canvas.html("").append($.Mustache.render("viewCategories",templateData));
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
        
        Path.map("#/examSettings").to(function(){
            App.canvas.mustache('examSettings');
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
        Path.root("#/login");
        Path.listen();
    });
});
