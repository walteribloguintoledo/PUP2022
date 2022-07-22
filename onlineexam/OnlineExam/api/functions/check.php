<?php
function checkUser($email,$pswd) // Checks if the user exist
{
    $data = array();
    
    $sql = ORM::for_table('users')->where('email',$email)->where('password',$pswd)->find_many();
    
    foreach ($sql as $row)
    {
        $data = array("valid" => true, "id"=> $row->id,"uid" => $row->uid, "userType" => $row->usertype, "firstname"=> $row->firstname, "middlename" => $row->middlename, "lastname" => $row->lastname,  "email" => $row->email,"password" => $row->password, "category" => $row->category);
    }
    return $data;
}
// function checkToken($uid)
// {
//     $response = 0;
//     $sql = ORM::for_table('users')->where('uid',$uid)->count();
//     if($sql==1)
//     {
//         $response = true;
//     }
//     else
//     {
//         $response = false;
//     }
//     return $response;
// }
function logtoken($token,$userid,$category,$userType,$date)
{
    $sql = ORM::for_table('token_auth')->create();
    $sql->set('uid',$userid);
    $sql->set('category',$category);
    $sql->set('userType',$userType);
    $sql->set('token',$token);
    $sql->set('date_created',$date);
    $sql->save();
}
function getloggedUser()
{
    $data = array();
    $sql = ORM::for_table('token_auth')->find_many();

    foreach ($sql as $row)
    {
        $data = array("valid" => true, "id"=> $row->id,"uid" => $row->uid, "token" => $row->token,"userType" => $row->usertype, "category" => $row->category);
    }
    return $data;
}
function checkloggedUser()
{
    $data = array();
    $sql = ORM::for_table('token_auth')->where('status','1')->find_many();

    foreach ($sql as $row)
    {
        $data = array("valid" => true, "id"=> $row->id,"uid" => $row->uid, "token" => $row->token,"userType" => $row->usertype, "category" => $row->category);
    }
    return $data;
}
function userlogout($uid,$tkn,$dateModified)
{
    $data=[];
    $sql = ORM::for_table('token_auth')->where('token',$tkn)->find_many();
    $sql->set('status', 0 );
    $sql->set('date_modified',$dateModified);
    $sql->save();
    $data = array("valid"=>true);
    return $data;
}
// ->where('uid',$uid)
?>