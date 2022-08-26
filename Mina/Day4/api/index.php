<?php
include "functions.loader.php";

$app = new Slim();

$app->get('/login', function(){
    echo "Hello," ;
});

$app->get('/hello/:name', function ($name) {
    echo "Hello, " . $name;
});

$app->run();