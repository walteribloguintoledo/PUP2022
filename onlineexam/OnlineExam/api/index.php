<?php
require 'vendors/Slim/Slim.php';
include 'vendors/idiorm.php';
include 'functions.php';


$app = new Slim();

// $app->post("/sample/post/:var", function($var) {
//     $param = explode(".", $var); //fsgggsgsgsg.4645475
//     $token = $param[0];
//     $uid = $param[1];
//     $verified = 0;
//     $error = 1;
//     $response = array();
//     if(count($param)===2) {

//         $verified = 1; $error = 0;
//     }
//     $response = array(
//         "verified" => $verified,
//         "error" => $error
//     );
//     echo json_encode($response);
// });

//For registration of Exam Creator
$app->post('/creatorRegister',function(){
    $userType = $_POST['userType'];
    $creatorFirstname = $_POST['creatorFirstname'];
    $creatorMiddleName = $_POST['creatorMiddleName'];
    $creatorLastName = $_POST['creatorLastName'];
    $creatorAddress = $_POST['creatorAddress'];
    $creatorBirthday = $_POST['creatorBirthday'];
    $creatorEmail = $_POST['creatorEmail'];
    $creatorPswrd = $_POST['creatorPswrd'];
    $creatorContact = $_POST['creatorContact'];
    $creatorRegister = registerCreator($userType, $creatorFirstname, $creatorMiddleName, $creatorLastName,$creatorAddress, $creatorBirthday, $creatorEmail, $creatorPswrd,$creatorContact);
    echo json_encode ($creatorRegister);
});
//For registration of Examinee
$app->post('/examineeRegister',function(){
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
    $examineeRegister = registerExaminee($userType, $examineeFirstname, $examineeMiddleName, $examineeLastName,$examineeAddress, $examineeBirthday, $examineeEmail, $examineePswrd,$examineeContact,$category);
    echo json_encode ($examineeRegister);
});
//Fetches Category
$app->get('/getCategory',function(){
    $fetchCategory = getCategory();
    echo json_encode ($fetchCategory);
});
//Fetches Subject
$app->get('/getSubjects',function(){
    $fetchSubject = getSubject();
    echo json_encode ($fetchSubject);
});
//Registers and logs guest user
$app->post('/guestLogin',function(){
    $guestFirstname = $_POST['guestFirstName'];
    $guestMiddleName = $_POST['guestMiddlename'];
    $guestLastName = $_POST['guestLastName'];
    $category = $_POST['category'];
    $guest = guestLogin($guestFirstname,$guestMiddleName,$guestLastName,$category);
    echo json_encode ($guest);
});
//Checks if user is registered
$app->post('/check',function(){
    $email = $_POST['email'];
    $pswrd = $_POST['pswrd'];
    $check = checkUser($email,$pswrd);
    echo json_encode ($check);
});
//For inserting exam questions
$app->post('/addQuestion',function(){
    $level = $_POST['level'];
    $examQuestion = $_POST['examQuestion'];
    $choice1 = $_POST['choice1'];
    $choice2 = $_POST['choice2'];
    $choice3 = $_POST['choice3'];
    $choice4 = $_POST['choice4'];
    $answer = $_POST['answer'];
    $inserQuestion = addQuestion($level,$examQuestion,$choice1,$choice2,$choice3,$choice4,$answer);
    echo json_encode($inserQuestion);
});
//For Creating exam details
$app->post('/createExam',function(){
    $category = $_POST['category'];
    $subject = $_POST['subject'];
    $level = $_POST['level'];
    $createExam = addExam($category,$subject,$level);
    echo json_encode($createExam);
});
//Creates new category
$app->post('/addCategory',function(){
    $categoryCode = mt_rand(1000,9999);
    $categoryName = $_POST['categoryName'];
    $insertCategory = addCategory( $categoryCode,$categoryName);
    echo json_encode($insertCategory);
});
//Creates new subject
$app->post('/addSubject',function(){
    $subjectCategory = $_POST['subjectCategory'];
    $subjectName = $_POST['subjectName'];
    $insertSubject = addSubject($subjectCategory,$subjectName);
    echo json_encode($insertSubject);
});
//Fetches category to edit
$app->post('/fetchCategoryEdit',function(){
    $editID = $_POST['editID'];
    $fetch = getCategoryData($editID);
    echo json_encode($fetch);
});
//Fetches subject to edit
$app->post('/getSubjectEdit',function(){
    $editID = $_POST['editID'];
    $fetch = getSubjectData($editID);
    echo json_encode($fetch);
});
//Updating category
$app->post('/editCategory',function(){
    $editID = $_POST['editID'];
    $newCategory = $_POST['newCategory'];
    $edit = editCategory($editID,$newCategory);
    echo json_encode($edit);
});
//Updating subject
$app->post('/editSubject',function(){
    $editID = $_POST['editID'];
    $uid = $_POST['uid'];
    $newSubject = $_POST['newSubject'];
    $edit = editSubject($editID,$uid,$newSubject);
    echo json_encode($edit);
});
//Deleting category
$app->post('/deleteCategory',function(){
    $delID = $_POST['delID'];
    $delete = deleteCategory($delID);
    echo json_encode($delete);
});

//Deleting subject
$app->post('/deleteSubject',function(){
    $delID = $_POST['delID'];
    $delete = deleteSubject($delID);
    echo json_encode($delete);
});
$app->run();

?>