<?php
$people = ORM::for_table('allusers')
        ->where_any_is(array(
            array('Username' => $username, 'Password' => $password),
            array('Email' => $username, 'Password' => $password)))
        ->find_many();

echo $people;






?>

