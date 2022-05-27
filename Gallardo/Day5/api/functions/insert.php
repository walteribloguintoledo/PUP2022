<?php
    function insertUser($fname,$address,$uname,$email,$pswd,$bday,$contact)
    {
        include "connect.php";
        $existuser = ORM::for_table('users')->where('username',$uname)->count();
        $existemail= ORM::for_table('users')->where('email',$email)->count();
        if($existuser == 0 && $existemail == 0)
        {
            $sql = ORM::for_table('users')->create();
            $sql->set('fullname',$fname);
            $sql->set('address', $address);  
            $sql->set('username',$uname);
            $sql->set('email' ,$email);
            $sql->set('password',$pswd);
            $sql->set('birthday',$bday);
            $sql->set('contact',$contact);
            $sql->save();
            $data = array("valid" => true, "fullname" => $fname, "address" => $address, "username" => $uname, "email" => $email, "password" => $pswd, "bday" => $bday, "contact" => $contact);
        }
        else if($existuser != 0)
        {
            $data = array("userexist" => true);
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
    
?>
