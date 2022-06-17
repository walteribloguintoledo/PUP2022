<?php
require 'vendors/Slim/Slim.php';
include 'vendors/idiorm.php';
include 'functions.php';


$app = new Slim();

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

$app->get('/getCategory',function(){
    $fetchCategory = getCategory();
    echo json_encode ($fetchCategory);
});

$app->get('/getSubjects',function(){
    $fetchSubject = getSubject();
    echo json_encode ($fetchSubject);
});

$app->post('/guestLogin',function(){
    $guestFirstname = $_POST['guestFirstName'];
    $guestMiddleName = $_POST['guestMiddlename'];
    $guestLastName = $_POST['guestLastName'];
    $category = $_POST['category'];
    $guest = guestLogin($guestFirstname,$guestMiddleName,$guestLastName,$category);
    echo json_encode ($guest);
});

$app->post('/check',function(){
    $email = $_POST['email'];
    $pswrd = $_POST['pswrd'];
    $check = checkUser($email,$pswrd);
    echo json_encode ($check);
});
$app->run();

?>