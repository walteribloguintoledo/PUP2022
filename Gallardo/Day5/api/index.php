<?php

// include 'functions.loader.php';
require 'vendors/Slim/Slim.php';
include 'functions/check.php';
include 'functions/insert.php';


$app = new Slim();

// $app->post('/try',function(){
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
    echo $insert;
});
// $app->get("/sample", function() {
//     echo "gggsg";
// });

$app->run();

?>