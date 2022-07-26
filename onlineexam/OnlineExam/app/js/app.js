$(document).ready(function(){
    var App = {
        canvas:$("#canvas"),
        url: "http://onlineexam/",
        api: "../api",
        authenticate: function() {
            var authentic = getJSONDoc(App.api+ "/authenticate/" +param);
            return authentic.verified;
        },
        settings: function(){
            var data = [];
            var settings = getJSONDoc (App.api + "/json/settings.json");
            lvl1 = JSON.parse(settings.settings.level1);
            lvl2 = JSON.parse(settings.settings.level2);
            lvl3 = JSON.parse(settings.settings.level3);
            pssgrd = JSON.parse(settings.settings.passingGrade);
            data = {
                lvl1 : lvl1,
                lvl2 : lvl2,
                lvl3 : lvl3,
                pssgrd : pssgrd
            }
            return data;
        }
    }
    var currentUser = getJSONDoc ( App.api + "/getLoggedUser");
    console.log(currentUser);
    var userType = currentUser.userType;
    var param = currentUser.token+"."+currentUser.uid;
    App.authenticate(param);
    var questioncount = 0;
    var questioncountinit=0;
    var getSettings = App.settings();

    if(userType=="Exam Creator" && App.authenticate()==1)
    {
    $.Mustache.load('templates/admin.html').done(function(){
        Path.map("#/creatorDashboard").to(function(){
            App.canvas.mustache('creatorDashboard');
            getSettings;
            var dashContents = getJSONDoc ( App.api + "/creatorDashboard/"+param);
            console.log(dashContents);
            var dashData = {
                exams:dashContents.exam,
                examinees:dashContents.examinees,
                questions:dashContents.questions,       
            };
            $("#numOfExams").append(dashData.exams);
            $("#numOfExaminees").append(dashData.examinees);
            $("#numOfQuestions").append(dashData.questions);
            $("#passing").append(getSettings.pssgrd);
            $("#lvl1").append(getSettings.lvl1);
            $("#lvl2").append(getSettings.lvl2);
            $("#lvl3").append(getSettings.lvl3);

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
            var examcode = getJSONDoc ( App.api + "/examcode/"+param);
            console.log(examcode);
            var categoryList = [];
            var categories = getJSONDoc ( App.api + "/getCategory/"+param); 
            console.log(categories);
            var ctr = 0;
            $.each( categories, function( i, item ) {
                ctr++;
                var result = {
                    num: ctr,
                    id: item.id,
                    uid: item.uid,
                    category: item.category             
                }
            categoryList.push(result);
            });
            
            var templateData = {
                categoryOptions:categoryList,
               }
            console.log(templateData);
            App.canvas.html("").append($.Mustache.render("createExam",templateData));
            $("#category").on('click',function(e){
                e.preventDefault();
                var subjectList = [];
                var subjectData = {
                    subjectOption:subjectList
                };
                if($("#category").val()!='')
                {
                    var examcategory = $("#category").val();
                    var subjects = getJSONDoc ( App.api + "/subjectExam?category=" + examcategory);
                        $.each( subjects, function( i, item ) {
                            ctr++;
                            var result = {
                                num: ctr,
                                id: item.id,
                                uid: item.uid,
                                subject: item.subject            
                            }
                            subjectList.push(result);
                            
                                $("#examsubjects").append('<option value="'+result.subject+'">'+result.subject+'</option>');
                           
                        });
                        console.log(subjectData);
                }
                
            });
            
            $("#level").on('click',function(){
                var level = $("#level").val();
                
                if(level==1)
                {
                    questioncount=lvl1;
                    console.log(level);
                    // console.log(questioncount);
                }
                if(level==2)
                {
                    questioncount=lvl2;
                    console.log(level);
                    // console.log(questioncount);
                }
                if(level==3)
                {
                    questioncount=lvl3;
                    console.log(level);
                    // console.log(questioncount);
                }
                if(questioncount!=0)
                {
                    $("#addExam").attr("disabled",true);
                }
                console.log(questioncount);
            });
            $("#addQuestion").on('click',function(e){
                e.preventDefault();
                var level = $("#level").val();
                var examQuestion = $("#examQuestion").val();
                var choice1 = $("#choice1").val();
                var choice2 = $("#choice2").val();
                var choice3 = $("#choice3").val();
                var choice4 = $("#choice4").val();
                var answer = $("#answer").val();
                var errorMessage = [];
                var  error = 0;
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
                        url: App.api + "/addQuestion/"+param,
                        data: {
                            examcode: examcode,
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
                                alert("Exam question added");
                            }
                            if(response.valid==false)
                            {
                                alert("The question already exist");
                            }
                            else
                            {
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
                        }
                    });
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
                    var errorMessage = [];
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
                            errorMessage.push(" Answer");
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
                        }
                        $("#category").attr('disabled',true);
                        $("#subject").attr('disabled',true);
                        $("#level").attr('disabled',true);
                        $("#examQuestion").val('');
                        $("#choice1").val('');
                        $("#choice2").val('');
                        $("#choice3").val('');
                        $("#choice4").val('');
                        $("#answer").val('');
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
                                    url: App.api + "/createExam/"+param,
                                    data: {
                                        examcode:examcode,
                                        category:category,
                                        subject:subject,
                                        level:level
                                    },
                                    dataType: "json",
                                    success: function (response) {
                                        if(response.valid)
                                        {
                                            alert("Exam Successfully Created");
                                            window.location.replace("#/createdExams");
                                            window.location.reload();
                                        }
                                        else
                                        {
                                            alert("The exam is already created");
                                            $.ajax({
                                                type: "post",
                                                url: App.api +"/deleteDuplicatedExam/"+param,
                                                data: {
                                                    examcode:examcode
                                                },
                                                dataType: "json",
                                                success: function (response) {
                                                    if(response.valid)
                                                    {
                                                        window.location.reload();
                                                    }
                                                    
                                                }
                                            });
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

            $("#settings").on('click',function(){
                window.location.replace("#/examSettings");
                window.location.reload();
            });
        });
        Path.map("#/autoCreateExam").to(function(){
            var examcode = getJSONDoc ( App.api + "/examcode/"+param);
            console.log(examcode);
            var subj = "";
            var cat = "";
            var lvl = 0;
            var categoryList = [];
            var categories = getJSONDoc ( App.api + "/getCategory/"+param); 
            console.log(categories);
            var ctr = 0;
            $.each( categories, function( i, item ) {
                ctr++;
                var result = {
                    num: ctr,
                    id: item.id,
                    uid: item.uid,
                    category: item.category             
                }
            categoryList.push(result);
            });
            
            var templateData = {
                categoryOptions:categoryList,
               }
            console.log(templateData);
            App.canvas.html("").append($.Mustache.render("autoCreateExam",templateData));
            $("#category").on('click',function(e){
                e.preventDefault();
                var subjectList = [];
                var subjectData = {
                    subjectOption:subjectList
                };
                if($("#category").val()!='')
                {
                    var examcategory = $("#category").val();
                    var subjects = getJSONDoc ( App.api + "/subjectExam?category=" + examcategory);
                        $.each( subjects, function( i, item ) {
                            ctr++;
                            var result = {
                                num: ctr,
                                id: item.id,
                                uid: item.uid,
                                subject: item.subject            
                            }
                            subjectList.push(result);
                            
                                $("#examsubjects").append('<option value="'+result.subject+'">'+result.subject+'</option>');
                           
                        });
                        console.log(subjectData);
                }
                
            });
            
            $("#level").on('click',function(){
                var level = $("#level").val();
                
                if(level==1)
                {
                    questioncount=lvl1;
                    console.log(level);
                    // console.log(questioncount);
                }
                if(level==2)
                {
                    questioncount=lvl2;
                    console.log(level);
                    // console.log(questioncount);
                }
                if(level==3)
                {
                    questioncount=lvl3;
                    console.log(level);
                    // console.log(questioncount);
                }
                if(questioncount!=0)
                {
                    $("#addExam").attr("disabled",true);
                }
                console.log(questioncount);
            });

            
            
            $("#importCSVForm").on('submit',function(e){
                e.preventDefault();
                var csvfile = new FormData(this);
                $.ajax({
                    type: "post",
                    url: App.api + "/importcsv/" + param,
                    data:csvfile,
                    cache:false,
                    contentType: false,
                    processData: false,
                    success: function (response) {
                        res = JSON.parse(response);
                        if(res.verified == 1)
                        {
                            alert("CSV File imported successfully");
                            var data = res.data;
                            cat = data[0][6];
                            subj = data[0][7];
                            lvl = data[0][8];
                        }
                        if(res.error == 1)
                        {
                            alert(res.errors[0])
                        }
                    }
                });
            });
            

            $("#autoCreateExam-form").on('submit',function(e){
                e.preventDefault();
                var category = $("#category").val(cat);
                var subject = $("#subject").val(subj);
                var level = $("#level").val(lvl);
                var errorMessage = [];
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
                if(error!=0)
                {
                    alert(errorMessage + " CANNOT BE BLANK");
                }
                else
                {
                    console.log(category);
                    console.log(subject);
                    console.log(level);
                }
            });

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

        Path.map("#/createdExams").to(function(){
            var createdExamsList = [];
            var getCreatedExams = getJSONDoc (App.api + "/viewCreatedExams/"+param);
            console.log(getCreatedExams);
            var ctr = 0;
                $.each( getCreatedExams, function( i, item ) {
                    ctr++;
                    var result = {
                        num: ctr,
                        id: item.id,
                        uid: item.uid,
                        category: item.category,
                        subject: item.subject,
                        level : item.level               
                    }
                createdExamsList.push(result);
                });
                var examsCreated = {
                    createdExams : createdExamsList
                }
                console.log(examsCreated);
            App.canvas.html("").append($.Mustache.render("createdExams",examsCreated));
            $('.btn-deleteExam').off('click').on('click',function(){
                var delID = $(this).attr('delID');
                console.log(delID);
                $.ajax({
                    type: "post",
                    url: App.api + "/deleteExam/"+param,
                    data: {
                        delID:delID
                    },
                    dataType: "json",
                    success: function (response) {
                        if(response.valid)
                        {
                            alert("Exam deleted successfully");
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
        Path.map("#/categories").to(function(){
            var resultsList = [];
            var results = getJSONDoc ( App.api + "/getCategory/"+param); 
            console.log(results);
                var ctr = 0;
                $.each( results, function( i, item ) {
                    ctr++;
                    var result = {
                        num: ctr,
                        id: item.id,
                        uid: item.uid,
                        category: item.category             
                    }
                resultsList.push(result);
                });
                var templateData = {
                    tableRecords: resultsList
                }
            App.canvas.html("").append($.Mustache.render("viewCategories",templateData));
                $('.btn-edit').off('click').on('click',function(){
                    var editID = $(this).attr('editID');
                    console.log(editID);
                    $.ajax({
                        type: "post",
                        url: App.api + "/fetchCategoryEdit/"+param,
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
                                        url: App.api + "/editCategory/"+param,
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
                $('.btn-delete').off('click').on('click',function(){
                    var delID = $(this).attr('delID');
                    console.log(delID);
                    $.ajax({
                        type: "post",
                        url: App.api + "/deleteCategory/"+param,
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

            $("#settings").on('click',function(){
                window.location.replace("#/examSettings");
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
                        url: App.api + "/addCategory/"+param,
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
            var categoryList = [];
                var categories = getJSONDoc ( App.api + "/getCategory/"+param); 
                console.log(categories);
                var ctr = 0;
                $.each( categories, function( i, item ) {
                    ctr++;
                    var result = {
                        num: ctr,
                        id: item.id,
                        uid: item.uid,
                        category: item.category             
                    }
                categoryList.push(result);
                });
            var resultsList = [];
            var results = getJSONDoc ( App.api + "/getSubjects/"+param);
            console.log(results);
                var ctr = 0;
                $.each( results, function( i, item ) {
                    ctr++;
                var result = {
                    num: ctr,
                    id: item.id,
                    uid: item.uid,
                    subject: item.subject             
                }
                resultsList.push(result);
                });
                console.log(resultsList);
            
            var templateData = {
                tableRecords: resultsList,
                categoryOptions:categoryList 
            }
            console.log(templateData);

            App.canvas.html("").append($.Mustache.render("viewSubjects",templateData));
                    $('.btn-edit').off('click').on('click',function(){
                        var editID = $(this).attr('editID');
                        console.log(editID);
                        $.ajax({
                            type: "post",
                            url: App.api + "/getSubjectEdit/"+param,
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
                                            url: App.api + "/editSubject/"+param,
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
                    $('.btn-delete').off('click').on('click',function(){
                        var delID = $(this).attr('delID');
                        console.log(delID);
                        $.ajax({
                            type: "post",
                            url: App.api + "/deleteSubject/"+param,
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

            $("#settings").on('click',function(){
                window.location.replace("#/examSettings");
                window.location.reload();
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
                        url: App.api + "/addSubject/"+param,
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
            var examineeList = [];
            var getExaminees = getJSONDoc (App.api + "/getExaminees/"+param);
            console.log(getExaminees);
            var ctr = 0;
            $.each(getExaminees,function( i , item ){
                ctr++;
                var examinees = {
                    num: ctr,
                    uid: item.uid,
                    name: item.firstname + " " + item.lastname,
                    address: item.address,
                    birthday : item.birthday,
                    email : item.email,
                    contact : item.contact,      
                }
                examineeList.push(examinees);
            });
            var templateData = {
                examinees : examineeList
            }
            console.log(templateData);
            App.canvas.html("").append($.Mustache.render("viewExaminees",templateData));
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

            $("#settings").on('click',function(){
                window.location.replace("#/examSettings");
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

            $("#settings").on('click',function(){
                window.location.replace("#/examSettings");
                window.location.reload();
            });
        });
        
        Path.map("#/examSettings").to(function(){
            getSettings;
            App.canvas.mustache('examSettings');
            $("#numOfItems1").val(getSettings.lvl1);
            $("#numOfItems2").val(getSettings.lvl2);
            $("#numOfItems3").val(getSettings.lvl3);
            $("#passingGrade").val(getSettings.pssgrd);
            
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

            $("#settings").on('click',function(){
                window.location.replace("#/examSettings");
                window.location.reload();
            });
            
            $("#examSettings-form").on('submit',function(e){
                e.preventDefault();
                var numOfItems1 = $("#numOfItems1").val();
                var numOfItems2 = $("#numOfItems2").val();
                var numOfItems3 = $("#numOfItems3").val();
                var passingGrade = $("#passingGrade").val();
                var errorMessage = [];
                var error = 0;
                if(numOfItems1==''|| numOfItems1==null)
                {
                    errorMessage.push(" No. of items for level 1");
                    error = 1;
                }
                if(numOfItems2==''||numOfItems2==null)
                {
                    errorMessage.push(" No. of items for level 2");
                    error = 1;
                }
                if(numOfItems3==''||numOfItems3==null)
                {
                    errorMessage.push(" No. of items for level 3");
                    error = 1;
                }
                if(passingGrade==''||passingGrade==null)
                {
                    errorMessage.push(" Passing Grade");
                    error = 1;
                }
                if(error!=0)
                {
                   alert(errorMessage+" CANNOT BE BLANK")
                }
                else
                {
                    $.ajax({
                        type: "post",
                        url: App.api + "/settings/"+param,
                        data: {
                            numOfItems1:numOfItems1,
                            numOfItems2:numOfItems2,
                            numOfItems3:numOfItems3,
                            passingGrade:passingGrade
                        },
                        dataType: "json",
                        success: function (response) {
                                if(response.valid)
                                {
                                    alert("Settings have ben saved");
                                    
                                }
                            }
                    });
                    getSettings;
                                $("#numOfItems1").val(getSettings.lvl1);
                                $("#numOfItems2").val(getSettings.lvl2);
                                $("#numOfItems3").val(getSettings.lvl3);
                                $("#passingGrade").val(getSettings.pssgrd);
                                window.location.reload();
                }
            });

        });
        
        Path.map("#/logout").to(function(){
            var today = new Date();
            var dateModified = today.getFullYear() +"-"+ (today.getMonth()+1) +"-"+today.getDate() + " "+ today.getHours()+ ":" + today.getMinutes() + ":" + today.getSeconds();
            $.ajax({
                type: "post",
                url: App.api + "/logout/" + param,
                data: {
                    status:0,
                    uid : currentUser.uid,
                    token : currentUser.token,
                    dateModified:dateModified
                },
                dataType: "json",
                success: function (response) {
                    if(response.valid)
                    {
                        alert("You are logging out");
                        window.location.href = "../auth/#/login";
                    }
                   
                }
            });
            
        })
        Path.rescue(function(){
            alert("404: Route Not Found");
            window.location.replace('#/creatorDashboard');
            window.location.reload();
        });
        Path.root("#/creatorDashboard");
        Path.listen();
    });
}

if(userType=="Examinee" && App.authenticate()==1)
{
    var userCategory = currentUser.category
    console.log(userCategory);    
    $.Mustache.load('templates/examinee.html').done(function(){
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
        var paramExaminee = currentUser.token+"."+currentUser.uid+"."+userCategory;
        var examsList = [];
        var getExams = getJSONDoc (App.api + "/viewExamsToTake/" + paramExaminee);
        var ctr = 0;
        $.each( getExams, function( i, item) {
            ctr++;
            var result = {
                num: ctr,
                id: item.id,
                uid: item.uid,
                category: item.category,
                subject: item.subject,
                level : item.level               
            }
        examsList.push(result);
        });
        var exams = {
                exams : examsList
            }
        console.log(exams);
        App.canvas.html("").append($.Mustache.render("examsToTake",exams));

        $("#takeExam").on('click',function(){
            window.location.replace("#/takeExam");
            window.location.reload();
        });

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
        $("#logout").on('click',function(){
            window.location.replace("#/logout");
        });
    });
    Path.map('#/takeExam').to(function(){
        App.canvas.mustache('takeExam');
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
    Path.map("#/logout").to(function(){

        $.ajax({
                type: "post",
                url: App.api + "/logout/" + param,
                data: {
                    status:0,
                    uid : currentUser.uid,
                    token : currentUser.token
                },
                dataType: "json",
                success: function (response) {
                    if(response.valid)
                    {
                        alert("You are logging out");
                        window.location.href = "../auth/#/login";
                    }
                   
                }
            });
            
    });
    Path.root("#/login");
    Path.listen();
});
}
});
// function fileValidation() // this can be implemented on the PHP part
// {
//     var file = $("#fileCSV").val().split('.').pop().toLowerCase();
//         if($.inArray(file, ["csv"]) == -1) {
//             alert('INVALID FILE TYPE Please upload a .csv file');
//             $("#importFile").attr("disabled",true);
//         }
//         else
//         {
//             $("#importFile").attr("disabled",false);
//         }
// }