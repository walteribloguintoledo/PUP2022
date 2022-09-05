<?php
include "functions.loader.php";

global $conn;

$app = new Slim();

$app->get('/login', function(){
    echo "Hello," ;
});

$app->post('/user/login', function(){
    $username = $_POST['user'];
    $password = $_POST['password'];
    $response = array();
    $isValid = 0;
    $msgError = null;

    $validate = read_user_input($username,$password);
    $result = read_username($username, $password);
    if($validate==0){
        $isValid = 1;
        $msgError = "Welcome ". $result->Name;
        $online = 1; 
        $userInfo = array($result->Username, $result->Name, $result->Email, $result->Address, $result->Birthdate, $result->Age, $result->ContactNumber);
    }
    else if ($validate==1){
        $isValid = 0;
        $msgError = "Incorrect Username/Email and Password";
        $online = 0; 
        $userInfo = array(0);
    }

    $response = array(
        "verified" => $isValid,
        "errorMessage" => $msgError,
        "userData" => $userInfo ,
        "useronline" => $online
    );
    
    echo json_encode($response);

});

$app->post('/user/signin', function() {
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
    $confirm = create_records($username, $name , $email, $address, $bday, $age, $contactnumber, $password);
    if($confirm==1){
        $isValid = 1;
        $msgError = "Error: Username already exist";
    }
    else if ($confirm==2){
        $isValid = 2;
        $msgError = "Error: Email already exist";
    }
    elseif ($confirm==0){
        $isValid = 0;
        $msgError = "New account created!! Try logging in :)";
    }

    $response = array(
        "verified" => $isValid,
        "errorMessage" => $msgError,
    );

    echo json_encode($response);
});

$app->post('/user/forgot', function(){
    $email = $_POST['email'];

    $checker = read_forgot_email($email);
    if ($checker["message"]== 0){
        $query = 1;
        $errorMsg = "One Query Found!";
    }
    else{
        $query = 0;
        $errorMsg = "No query Found!";
    }
    $response = array(
        "query" => $query,
        "message" => $errorMsg,
        "password" => $checker["password"]
    );

    echo json_encode($response);
});

$app->get('/hello/:name', function ($name) {
    echo "Hello, " . $name;
});

$app->run();