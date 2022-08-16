<?php
function registerCreator($userid,$userType, $firstname, $middlename, $lastname,$address, $birthday, $email, $pswrd,$contact) // Registers a new Exam Creator
{
        $existemail= ORM::for_table('users')->where('email',$email)->count();
        if($existemail == 0)
        {
            $sql = ORM::for_table('users')->create();
            $sql->set('uid',$userid);
            $sql->set('usertype',$userType);
            $sql->set('firstname',$firstname);
            $sql->set('middlename',$middlename);
            $sql->set('lastname',$lastname);
            $sql->set('address', $address);  
            $sql->set('birthday',$birthday);
            $sql->set('email' ,$email);
            $sql->set('password',$pswrd);
            $sql->set('contact',$contact);
            $sql->save();
            $data = array("valid"=> true,"uid"=>$userid, "userType"=> $userType,"firstname"=> $firstname, "middlename"=>  $middlename,"lastname"=> $lastname, "address"=> $address,"birthday"=> $birthday, "email"=> $email,"password" => $pswrd, "contact" => $contact);
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
function registerExaminee($userid,$userType, $firstname, $middlename, $lastname,$address, $birthday, $email, $pswrd,$contact, $category) //Registers a new Examinee
{
        $existemail= ORM::for_table('users')->where('email',$email)->count();
        if($existemail == 0)
        {
            $sql = ORM::for_table('users')->create();
            $sql->set('uid',$userid);
            $sql->set('usertype',$userType);
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
            $data = array("valid"=> true,"userid"=>$userid,"userType"=> $userType,"firstname"=> $firstname, "middlename"=>  $middlename,"lastname"=> $lastname, "address"=> $address,"birthday"=> $birthday, "email"=> $email,"password" => $pswrd, "contact" => $contact, "category" => $category);
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

function guestLogin($userid,$guestFirstname,$guestMiddleName,$guestLastName,$category) // Registers and Logs on Guest user
{
        $sql = ORM::for_table('guest')->create();
        $sql->set('uid',$userid);
        $sql->set('firstname',$guestFirstname);
        $sql->set('middlename',$guestMiddleName);
        $sql->set('lastname',$guestLastName);
        $sql->set('category', $category);
        $sql->save();
        $data = array("valid"=> true,"userid"=>$userid,"firstname"=> $guestFirstname, "middlename"=>  $guestMiddleName,"lastname"=> $guestLastName,"category" => $category);
        
        return $data;
}

?>