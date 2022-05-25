<?php

// include 'functions.loader.php';
require 'vendors/Slim/Slim.php';
include 'functions/check.php';
include 'functions/insert.php';
include 'functions/update.php';


$app = new Slim();

// $app->get('/try',function(){
//     echo 'hello';
// });

$app->post('/check',function(){
    $uname = $_POST['uname'];
    $email = $_POST['email'];
    $pswd = $_POST['pswd'];
    $check = checkUser($uname,$email,$pswd);
    echo $check;
});
$app->post('/register',function(){
    $fname = $_POST['name'];
    $address = $_POST['address'];
    $uname = $_POST['uname'];
    $email = $_POST['email'];
    $pswd =$_POST['password'];
    $bday = $_POST['bday'];
    $contact = $_POST['contact'];
    $insert = insertUser($fname,$address,$uname,$email,$pswd,$bday,$contact);
    echo json_encode($insert);
});
$app->post('/update', function(){
    $update = $_POST['edit'];
    $newfname = $_POST['name'];
    $newaddress = $_POST['address'];
    $newuname = $_POST['uname'];
    $newemail = $_POST['email'];
    $newpswd = $_POST['password'];
    $newbday = $_POST['bday'];
    $newcontact = $_POST['contact'];
    $update = updateUser($update,$newfname,$newaddress,$newuname,$newemail,$newpswd,$newbday,$newcontact);
    echo json_encode($update);
});

$app->run();

?>