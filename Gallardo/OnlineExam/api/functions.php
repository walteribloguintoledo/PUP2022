<?php
include 'functions/connect.php';

function registerCreator($userType, $firstname, $middlename, $lastname,$address, $birthday, $email, $pswrd,$contact)
{
        $existemail= ORM::for_table('users')->where('email',$email)->count();
        if($existemail == 0)
        {
            $sql = ORM::for_table('users')->create();
            $sql->set('userType',$userType);
            $sql->set('firstname',$firstname);
            $sql->set('middlename',$middlename);
            $sql->set('lastname',$lastname);
            $sql->set('address', $address);  
            $sql->set('birthday',$birthday);
            $sql->set('email' ,$email);
            $sql->set('password',$pswrd);
            $sql->set('contact',$contact);
            $sql->save();
            $data = array("valid"=> true,"userType"=> $userType,"firstname"=> $firstname, "middlename"=>  $middlename,"lastname"=> $lastname, "address"=> $address,"birthday"=> $birthday, "email"=> $email,"password" => $pswrd, "contact" => $contact);
        }
        else if($existemail != 0)
        {
            $data = array("emailexist" => true);
        }
        else
        {
            $data = array("valid" => false);
        }
        
        return $data;
}
function registerExaminee($userType, $firstname, $middlename, $lastname,$address, $birthday, $email, $pswrd,$contact, $category)
{
        $existemail= ORM::for_table('users')->where('email',$email)->count();
        if($existemail == 0)
        {
            $sql = ORM::for_table('users')->create();
            $sql->set('userType',$userType);
            $sql->set('firstname',$firstname);
            $sql->set('middlename',$middlename);
            $sql->set('lastname',$lastname);
            $sql->set('address', $address);  
            $sql->set('birthday',$birthday);
            $sql->set('email' ,$email);
            $sql->set('password',$pswrd);
            $sql->set('contact',$contact);
            $sql->set('category', $category);
            $sql->save();
            $data = array("valid"=> true,"userType"=> $userType,"firstname"=> $firstname, "middlename"=>  $middlename,"lastname"=> $lastname, "address"=> $address,"birthday"=> $birthday, "email"=> $email,"password" => $pswrd, "contact" => $contact, "category" => $category);
        }
        else if($existemail != 0)
        {
            $data = array("emailexist" => true);
        }
        else
        {
            $data = array("valid" => false);
        }
        
        return $data;
}

function guestLogin($guestFirstname,$guestMiddleName,$guestLastName,$category)
{
        $sql = ORM::for_table('guest')->create();
        
        $sql->set('firstname',$guestFirstname);
        $sql->set('middlename',$guestMiddleName);
        $sql->set('lastname',$guestLastName);
        $sql->set('category', $category);
        $sql->save();
        $data = array("valid"=> true,"firstname"=> $guestFirstname, "middlename"=>  $guestMiddleName,"lastname"=> $guestLastName,"category" => $category);
        
        return $data;
}

function checkUser($email,$pswd)
{
    $data = array();
    
    $sql = ORM::for_table('users')->where('email',$email)->where('password',$pswd)->find_many();
    
    foreach ($sql as $row)
    {
        $data = array("valid" => true, "id"=> $row->id,"uid" => $row->uid, "userType" => $row->userType, "firstname"=> $row->firstname, "middlename" => $row->middlename, "lastname" => $row->lastname,  "email" => $row->email,"password" => $row->password, "category" => $row->category);
    }
    return $data;
}
?>