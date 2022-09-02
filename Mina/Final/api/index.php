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
    // $confirmUser = userIdiormLogin($username, $password);
    // echo $confirmUser;
    $response = array();
    $isValid = 0;
    $msgError = null;
    $result = read_username($username, $password);
    if($result){
        $response = array(
            "Birthdate" => $result->Birthdate
        );
    }
    // $validate = read_user_input($username,$password);
    //echo var_dump($validate);
    // if($validate["existing"]){
    //     $isValid = 1;
    //     $msgError = "Welcome ". $username;
    //     $online = 1; 
    // }
    // else{
    //     $isValid = 0;
    //     $msgError = "User doesn't exist or Incorrect Username/Email and Password";
    //     $online = 0; 
    // }

    // $response = array(
    //     "verified" => $isValid,
    //     "errorMessage" => $msgError,
    //     "userData" => $validate["userArray"] ,
    //     "useronline" => $online
    // );
        echo $result->Birthdate;
    //echo json_encode($response);

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

$app->get('/hello/:name', function ($name) {
    echo "Hello, " . $name;
});

$app->run();