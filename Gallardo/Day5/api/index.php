<?php
require 'vendors/Slim/Slim.php';
require 'vendors/idiorm.php';
include 'functions/check.php';
include 'functions/insert.php';
include 'functions/update.php';
include 'functions/getinfo.php';
include 'functions/view.php';
include 'functions/delete.php';
include 'functions/connect.php';


$app = new Slim();

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
$app->get('/getuserinfo', function(){
    $uid = $_GET['userid'];
    $getUser = getInfo($uid);
    echo json_encode($getUser);
});
$app->get('/view/:id', function($uid){
    //$uid = $_GET['userid'];
    $viewUsers = viewUsers($uid);
    echo json_encode($viewUsers);
});
$app->post('/update', function(){
    $uid = $_POST['edit'];
    $newfname = $_POST['name'];
    $newaddress = $_POST['address'];
    $newuname = $_POST['uname'];
    $newemail = $_POST['email'];
    $newpswd = $_POST['password'];
    $newbday = $_POST['bday'];
    $newcontact = $_POST['contact'];
    $update = updateUser($uid,$newfname,$newaddress,$newuname,$newemail,$newpswd,$newbday,$newcontact);
    echo json_encode($update);
});
$app->post('/delete', function(){
    $delid = $_POST['userid'];
    $delete = deleteUser($delid);
    echo json_encode($delete);
});

$app->run();

?>