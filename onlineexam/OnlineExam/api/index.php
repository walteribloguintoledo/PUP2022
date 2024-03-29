<?php
require 'vendors/Slim/Slim.php';
include 'vendors/idiorm.php';
include 'functions.loader.php';


$app = new Slim();

$app->get("/" , function(){
    $opencsv = fopen("csv/sample quiz - Data analytics (2).csv","r");
    $readcsv = fgetcsv($opencsv, 1000, ",");
    // $readcsv = fread($opencsv,filesize("csv/sample quiz - Data analytics (1).csv"));
    $lines = count(file("csv/sample quiz - Data analytics (2).csv"));
    $cols = count($readcsv);
    echo "col:$cols";
    echo " rows: $lines"."<br>";
    for($i=1; $i < $lines; $i++)
    {
        for($j=0; $j < $cols; $j++)
        {
            $readcsv = fgetcsv($opencsv, 1000, ",");
            if($readcsv!=false)
            {
                echo json_encode($readcsv)."<br>";
            }
           
        }
    }
}); 

$app->get("/authenticate/:var", function($var) {
    $param = explode(".", $var); //fsgggsgsgsg.4645475
    $token = $param[0];
    $uid = $param[1];
    $verified = 0;
    $error = 1;
    $response = array();
    if(count($param)===2) {

        $verified = 1; $error = 0;
    }
    $response = array(
        "verified" => $verified,
        "error" => $error
    );
    echo json_encode($response);
});

$app->post("/storeToken",function(){
    $token = $_POST['token'];
    $userid = $_POST['userid'];
    $category = $_POST['category'];
    $userType = $_POST['userType'];
    $date = $_POST['date'];
    $logdata = logtoken($token,$userid,$category,$userType,$date);
});
$app->get("/getLoggedUser",function(){
    $loggeduser = getloggedUser();
    echo json_encode($loggeduser);
});
$app->get("/checkLoggedUser",function(){
    $loggeduser = checkloggedUser();
    echo json_encode($loggeduser);
});
$app->post("/logout/:var",function($var){
    $param = explode(".", $var); 
    $token = $param[0];
    $uid = $param[1];
    if(count($param)===2) 
    {
        $tkn = $_POST['token'];
        $dateModified = $_POST['dateModified'];
        $logout = userlogout($uid,$tkn,$dateModified);
        echo json_encode($logout);
    }
});
//For registration of Exam Creator

$app->get('/creatorDashboard/:var',function($var){
    $param = explode(".", $var); 
    $token = $param[0];
    $uid = $param[1];
    $verified = 0;
    $error = 1;
    if(count($param)===2) 
    {
        $getDashContents = dashboardData();
        echo json_encode($getDashContents);
    }
    
});
$app->post('/creatorRegister',function(){
    $num = mt_rand(1000,9999);
    $str = substr(str_shuffle('1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ'),0,4);
    $userid = date("Y")."-".$str."-".$num;
    $userType = $_POST['userType'];
    $creatorFirstname = $_POST['creatorFirstname'];
    $creatorMiddleName = $_POST['creatorMiddleName'];
    $creatorLastName = $_POST['creatorLastName'];
    $creatorAddress = $_POST['creatorAddress'];
    $creatorBirthday = $_POST['creatorBirthday'];
    $creatorEmail = $_POST['creatorEmail'];
    $creatorPswrd = $_POST['creatorPswrd'];
    $creatorContact = $_POST['creatorContact'];
    $creatorRegister = registerCreator($userid,$userType, $creatorFirstname, $creatorMiddleName, $creatorLastName,$creatorAddress, $creatorBirthday, $creatorEmail, $creatorPswrd,$creatorContact);
    echo json_encode ($creatorRegister);
});
//For registration of Examinee
$app->post('/examineeRegister',function(){
    $num = mt_rand(1000,9999);
    $str = substr(str_shuffle('1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ'),0,4);
    $userid = date("Y")."-".$str."-".$num;
    $userType = $_POST['userType'];
    $examineeFirstname = $_POST['examineeFirstName'];
    $examineeMiddleName = $_POST['examineeMiddleName'];
    $examineeLastName = $_POST['examineeLastName'];
    $examineeAddress = $_POST['examineeAddress'];
    $examineeBirthday = $_POST['examineeBirthday'];
    $examineeEmail = $_POST['examineeEmail'];
    $examineePswrd = $_POST['examineePswrd'];
    $examineeContact = $_POST['examineeContact'];
    $category = $_POST['category'];
    $examineeRegister = registerExaminee($userid,$userType, $examineeFirstname, $examineeMiddleName, $examineeLastName,$examineeAddress, $examineeBirthday, $examineeEmail, $examineePswrd,$examineeContact,$category);
    echo json_encode ($examineeRegister);
});
//Fetches Category for the examineeRegister and guest
$app->get('/getCategory',function(){
    $fetchCategory = getCategory();
    echo json_encode ($fetchCategory);
});

//Fetch subject for creating exam
$app->get('/subjectExam',function(){
    $categoryName = $_GET['category'];
    $fetchSubject = getSubjectExam($categoryName);
    echo json_encode ($fetchSubject);
});
//Registers and logs guest user
$app->post('/guestLogin',function(){
    $num = mt_rand(1000,9999);
    $str = substr(str_shuffle('1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ'),0,4);
    $userid = date("Y")."-".$str."-".$num;
    $guestFirstname = $_POST['guestFirstName'];
    $guestMiddleName = $_POST['guestMiddlename'];
    $guestLastName = $_POST['guestLastName'];
    $category = $_POST['category'];
    $guest = guestLogin($userid,$guestFirstname,$guestMiddleName,$guestLastName,$category);
    echo json_encode ($guest);
});
//Checks if user is registered
$app->post('/check',function(){
    $email = $_POST['email'];
    $pswrd = $_POST['pswrd'];
    $check = checkUser($email,$pswrd);
    echo json_encode ($check);
});
//Create Exam code
$app->get('/examcode/:var',function($var){
    $param = explode(".", $var); 
    $token = $param[0];
    $uid = $param[1];
    $response = array();
    if(count($param)===2) 
    {
        $verified = 1; $error = 0;
        $examcode = date("Ymd").substr(str_shuffle('1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ'),0,6);
    }
    echo json_encode($examcode);
    
});
//For inserting exam questions
$app->post('/addQuestion/:var',function($var){
    $param = explode(".", $var); 
    $token = $param[0];
    $uid = $param[1];
    $verified = 0;
    $error = 1;
    $auth = checkToken($uid);
    if(count($param)===2) 
    {
        if($auth!=0)
        {
            $verified = 1; $error = 0;
            $keyIndex = ['question','choice1','choice2','choice3','choice4','answer'];
            $examcode = $_POST['examcode'];
            $level = $_POST['level'];
            $examQuestion = $_POST['examQuestion'];
            $choice1 = $_POST['choice1'];
            $choice2 = $_POST['choice2'];
            $choice3 = $_POST['choice3'];
            $choice4 = $_POST['choice4'];
            $answer = $_POST['answer'];
            $insertQuestion = addQuestion($level,$examQuestion,$choice1,$choice2,$choice3,$choice4,$answer,$keyIndex,$examcode);
            echo json_encode($insertQuestion);
        }
        
    }
    
});
//For Creating exam details
$app->post('/createExam/:var',function($var){
    $param = explode(".", $var); 
    $token = $param[0];
    $uid = $param[1];
    $verified = 0;
    $error = 1;
    $auth = checkToken($uid);
    if(count($param)===2) 
    {
        if($auth!=0)
        {
            $verified = 1; $error = 0;
            $examcode = $_POST['examcode'];
            $category = $_POST['category'];
            $subject = $_POST['subject'];
            $level = $_POST['level'];
            $createExam = addExam($category,$subject,$level,$examcode);
            echo json_encode($createExam);
        }
        
    }
    
});

$app->get('/viewCreatedExams/:var',function($var){
    $param = explode(".", $var); 
    $token = $param[0];
    $uid = $param[1];
    $verified = 0;
    $error = 1;
    if(count($param)===2) 
    {
       
        $verified = 1; $error = 0;
        $createdExams = viewCreatedExams();
        echo json_encode($createdExams);
    
    }   

});
$app->post('/deleteExam/:var',function($var){
    $param = explode(".", $var); 
    $token = $param[0];
    $uid = $param[1];
    $verified = 0;
    $error = 1;
    if(count($param)===2) 
    {
        $verified = 1; $error = 0;
        $delID = $_POST['delID'];
        $delete = deleteExam($delID);
        echo json_encode($delete);
    }  
});

$app->post('/deleteDuplicatedExam/:var',function($var){
    $param = explode(".", $var); 
    $token = $param[0];
    $uid = $param[1];
    $verified = 0;
    $error = 1;
    $auth = checkToken($uid);
    if(count($param)===2) 
    {
        if($auth!=0)
        {
            $verified = 1; $error = 0;
            $examcode = $_POST['examcode'];
            $delete = deleteDuplicatedExam($examcode);
            echo json_encode($delete);
        }
        
    }
    
});
//Fetches Category
$app->get('/getCategory/:var',function($var){
    $param = explode(".", $var); //fsgggsgsgsg.4645475
    $token = $param[0];
    $uid = $param[1];
    $verified = 0;
    $error = 1;
    if(count($param)===2)     
    {
        $verified = 1; $error = 0;
        $fetchCategory = getCategory();
        echo json_encode ($fetchCategory);
    }
});

//Creates new category
$app->post('/addCategory/:var',function($var){
    $param = explode(".", $var); //fsgggsgsgsg.4645475
    $token = $param[0];
    $uid = $param[1];
    $verified = 0;
    $error = 1;
    if(count($param)===2) 
    {
        $verified = 1; $error = 0;
        $categoryCode = mt_rand(1000,9999);
        $categoryName = $_POST['categoryName'];
        $insertCategory = addCategory( $categoryCode,$categoryName);
        echo json_encode($insertCategory);
    }
});
//Fetches category to edit
$app->post('/fetchCategoryEdit/:var',function($var){
    $param = explode(".", $var); //fsgggsgsgsg.4645475
    $token = $param[0];
    $uid = $param[1];
    $verified = 0;
    $error = 1;
    if(count($param)===2) 
    {
        $verified = 1; $error = 0;
        $editID = $_POST['editID'];
        $fetch = getCategoryData($editID);
        echo json_encode($fetch);
    }
});
//Updating category
$app->post('/editCategory/:var',function($var){
    $param = explode(".", $var); //fsgggsgsgsg.4645475
    $token = $param[0];
    $uid = $param[1];
    $verified = 0;
    if(count($param)===2) 
    {
        $verified = 1; $error = 0;
        $editID = $_POST['editID'];
        $newCategory = $_POST['newCategory'];
        $edit = editCategory($editID,$newCategory);
        echo json_encode($edit);
    }
});
//Deleting category
$app->post('/deleteCategory/:var',function($var){
    $param = explode(".", $var); 
    $token = $param[0];
    $uid = $param[1];
    $verified = 0;
    $error = 1;
    if(count($param)===2)
    {
        $verified = 1; $error = 0;
        $delID = $_POST['delID'];
        $delete = deleteCategory($delID);
        echo json_encode($delete);
    }
});
//Fetches Subject
$app->get('/getSubjects/:var',function($var){
    $param = explode(".", $var); 
    $token = $param[0];
    $uid = $param[1];
    $verified = 0;
    $error = 1;
    if(count($param)===2)
    {
        $verified = 1; $error = 0;
        $fetchSubject = getSubject();
        echo json_encode ($fetchSubject);
    }
       
});
//Creates new subject
$app->post('/addSubject/:var',function($var){
    $param = explode(".", $var); 
    $token = $param[0];
    $uid = $param[1];
    $verified = 0;
    $error = 1;
    if(count($param)===2)
    {
        $subjectCategory = $_POST['subjectCategory'];
        $subjectName = $_POST['subjectName'];
        $insertSubject = addSubject($subjectCategory,$subjectName);
        echo json_encode($insertSubject);
    }
});
//Fetches subject to edit
$app->post('/getSubjectEdit/:var',function($var){
    $param = explode(".", $var); 
    $uid = $param[1];
    $verified = 0;
    $error = 1;
    if(count($param)===2)
    {
        $editID = $_POST['editID'];
        $fetch = getSubjectData($editID);
        echo json_encode($fetch);
    }
    
});
//Updating subject
$app->post('/editSubject/:var',function($var){
    $param = explode(".", $var); 
    $token = $param[0];
    $uid = $param[1];
    $verified = 0;
    $error = 1;
    if(count($param)===2)
    {
        $editID = $_POST['editID'];
        $uid = $_POST['uid'];
        $newSubject = $_POST['newSubject'];
        $edit = editSubject($editID,$uid,$newSubject);
        echo json_encode($edit);
    }
});
//Deleting subject
$app->post('/deleteSubject/:var',function($var){
    $param = explode(".", $var); //fsgggsgsgsg.4645475
    $token = $param[0];
    $uid = $param[1];
    $verified = 0;
    $error = 1;
    $auth = checkToken($uid);
    if(count($param)===2)
    {
        $delID = $_POST['delID'];
        $delete = deleteSubject($delID);
        echo json_encode($delete);
    }
});

//Saving Settings
$app->post('/settings/:var',function($var){
    $param = explode(".", $var); //fsgggsgsgsg.4645475
    $token = $param[0];
    $uid = $param[1];
    $verified = 0;
    $error = 1;
    if(count($param)===2)
    {
        $numOfItems1 = $_POST['numOfItems1'];
        $numOfItems2 = $_POST['numOfItems2'];
        $numOfItems3 = $_POST['numOfItems3'];
        $passingGrade = $_POST['passingGrade'];
        $settings = array("settings" => array("level1"=>$numOfItems1,"level2"=>$numOfItems2,"level3"=>$numOfItems3,"passingGrade"=>$passingGrade));
        file_put_contents("../api/json/settings.json",json_encode($settings),FILE_USE_INCLUDE_PATH);
        $success = array("valid"=>true);
        echo json_encode($success);
    }
});

$app->post('/importcsv/:var',function($var){
    $param = explode(".", $var); //fsgggsgsgsg.4645475
    $response = array();
    $csvdata = array(); 
    $data1 = array(); 
    $examdata = array();
    $token = $param[0]; 
    $uid = $param[1];
    $verified = 0;
    $error = 1;
    $errors = false;
    if(count($param)===2)
    {        
        if(isset($_FILES['importcsv']))
        {
            $file_name = $_FILES['importcsv']['name'];
            $file_size = $_FILES['importcsv']['size'];
            $file_tmp = $_FILES['importcsv']['tmp_name'];
            $file_type = $_FILES['importcsv']['type'];
            $file_ext = pathinfo($file_name,PATHINFO_EXTENSION); //echo $file_ext;
            $extensions = array("csv");      
            if(in_array($file_ext,$extensions)=== false){
                $error=1; $verified=0;
                $errors[]="File type not allowed, please choose a csv file.";
            }

            if($file_size > 200000){
                $error=1; $verified=0;
                $errors[]='File size must be excately 2 MB';
            }

            if(empty($errors)==true)
            {
                move_uploaded_file($file_tmp,"csv/".$file_name);
                $verified=1; $error=0;
                //functions that reads csv file to save into DB
                $opencsv = fopen("csv/".$file_name,"r");
                $readcsv = fgetcsv($opencsv, 1000, ",");
                $lines = count(file("csv/".$file_name));
                $cols = count($readcsv);
                for($i=1; $i < $lines; $i++)
                {
                    for($j=0; $j < $cols; $j++)
                    {
                        $readcsv = fgetcsv($opencsv, 1000, ",");
                        if($readcsv!=false)
                        {
                            // echo json_encode($readcsv);
                            array_push($csvdata,$readcsv);
                        }
                    }
                }
            }
            //the only problem on this is how will I save the data into the database
            }
            for($r=0; $r < count($csvdata); $r++)
            {
                    $examdata = array(
                        "question" => $csvdata[$r][0],
                        "choice1" => $csvdata[$r][1],
                        "choice2" => $csvdata[$r][2],
                        "choice3" => $csvdata[$r][3],
                        "choice4" => $csvdata[$r][4],
                        "answer" => $csvdata[$r][5],
                        "category" => $csvdata[$r][6],
                        "subject" => $csvdata[$r][7],
                        "level" => $csvdata[$r][8]
                    );
                    array_push($data1,$examdata);
            }
        }   
        autoCreateExam($data1);
    
    $response = array(
        "verified" => $verified,
        "error" => $error,
        "errors" => $errors,
        "data" => $data1
    );
    echo json_encode($response);
});

//Fetching Examinees data
$app->get('/getExaminees/:var',function($var){
    $param = explode(".", $var); //fsgggsgsgsg.4645475
    $token = $param[0];
    $uid = $param[1];
    $verified = 0;
    $error = 1;
    if(count($param)===2)
    {
        $fetchExaminees = getExaminees();
        echo json_encode($fetchExaminees);
    }
    
});

//EXAMINEE

$app->get('/viewExamsToTake/:var', function($var){
    $param = explode(".", $var); //fsgggsgsgsg.4645475
    $token = $param[0];
    $uid = $param[1];
    $category = $param[2];
    $verified = 0;
    $error = 1;
    if(count($param)===3)
    {
        $examsToTake = getExamsToTake($category);
        echo json_encode($examsToTake);
    }
    
});

$app->run();

?>