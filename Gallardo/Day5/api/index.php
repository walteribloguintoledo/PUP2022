<?php
include 'functions.loader.php';
//include 'connect.php';

$app = new Slim();

$app->post('/try',function(){
    echo 'hello';
});

$app->post('/check',function(){
    $uname = $_POST['uname'];
    $email = $_POST['email'];
    $password = $_POST['pswd'];
    echo "SAMPLE";
    // $sql = "SELECT * FROM users WHERE username = '$uname' AND email = '$email' AND password = '$password'";
    // $result = mysqli_query($conn, $sql);
    
    // if(mysqli_num_rows($result) == 1) {
    //     echo "User Found";
       
    //}
    // else {
    //     echo "User does not exist";
    //}
});

$app->get("/sample", function() {
    echo "gggsg";
});

$app->run();

?>