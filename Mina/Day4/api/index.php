<?php
include "functions.loader.php";
include ""; 

global $conn;

$app = new Slim();

$app->get('/login', function(){
    echo "Hello," ;
});

$app->post('/user/login', function()use ($conn){
    $username = $_POST['user'];
    $password = $_POST['password'];
    
    // $msg = userIdiormLogin($username, $password);
    // echo $msg;
    $response = array();
    $isLoggedin = 0;
    $msgError = null;
    $msg = userLogin($conn,$username,$password);
    if(count($msg)===1){
        $msgError = "Incorrect Username/Email or Password";
        $isLoggedin = 0;
    }
    else if(count($msg)===2){
        $msgError = "Error: Unable to connect to server";
        $isLoggedin = 2;
    }
    else if (count($msg)>2){
        $msgError = "Welcome,". $username;
        $isLoggedin = 1;
    }

    $response = array(
        "logToken" => $isLoggedin,
        "errorMessage" => $msgError,
        "userInfo" => $msg
    );

    echo json_encode($response);
    
});

$app->post('/user/signin', function() use ($conn) {
    $username = $_POST['username'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $address = $_POST['address'];
    $bday = $_POST['birthday'];
    $age = $_POST['age'];
    $contactnumber = $_POST['cnumber'];
    $password = $_POST['password'];

    $response = array();
    $isValid = 0;
    $msgError = null;
    $msg = userSignin($conn,$username, $name , $email, $address, $bday, $age, $contactnumber, $password);
    if($msg===0){
        $msgError = "Username/Email already exist";
        
    }
    else if($msg===1){
        $msgError = "New account is created";
        $isValid = 1;
    }
    else if ($msg===2){
        $msgError = "Error, creating new account unsuccessful";
        $isValid = 2;
    }

    $response = array(
        "verified" => $isValid,
        "errorMessage" => $msgError
    );

    echo json_encode($response);
});

$app->get('/hello/:name', function ($name) {
    echo "Hello, " . $name;
});

$app->run();