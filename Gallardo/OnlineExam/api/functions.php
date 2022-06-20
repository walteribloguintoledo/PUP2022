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

function getCategory()
{
    $data = array();
    $sql = ORM::for_table('category')->find_many();
    foreach ($sql as $row)
    {
       $data[] = array("id"=>$row->id, "uid"=>$row->uid, "category"=>$row->category);
    }

    return $data;
}

function getSubject()
{
    $data = array();
    $sql = ORM::for_table('subject')->find_many();
    foreach ($sql as $row)
    {
       $data[] = array("id"=>$row->id, "uid"=>$row->uid, "subject"=>$row->subjectName);
    }

    return $data;
}

function addQuestion($level,$examQuestion,$choice1,$choice2,$choice3,$choice4,$answer)
{
    $existquestion = ORM::for_table('exam_entry')->where('value',$examQuestion)->count();
    if($existquestion==0)
    {
        $sqlquestion = ORM::for_table('exam_entry')->create();
            $sqlquestion->set('keyIndex','question');
            $sqlquestion->set('value',$examQuestion);
            $sqlquestion->set('level',$level);
            $sqlquestion->save();

        $sqlchoice1 = ORM::for_table('exam_entry')->create();
            $sqlchoice1->set('keyIndex','choice1');
            $sqlchoice1->set('value',$choice1);
            $sqlchoice1->set('level',$level);
            $sqlchoice1->save();

        $sqlchoice2 = ORM::for_table('exam_entry')->create();
            $sqlchoice2->set('keyIndex','choice2');
            $sqlchoice2->set('value',$choice2);
            $sqlchoice2->set('level',$level);
            $sqlchoice2->save();

        $sqlchoice3 = ORM::for_table('exam_entry')->create();
            $sqlchoice3->set('keyIndex','choice3');
            $sqlchoice3->set('value',$choice3);
            $sqlchoice3->set('level',$level);
            $sqlchoice3->save();

        $sqlchoice4 = ORM::for_table('exam_entry')->create();
            $sqlchoice4->set('keyIndex','choice4');
            $sqlchoice4->set('value',$choice4);
            $sqlchoice4->set('level',$level);
            $sqlchoice4->save();

        $sqlanswer = ORM::for_table('exam_entry')->create();
            $sqlanswer->set('keyIndex','answer');
            $sqlanswer->set('value',$answer);
            $sqlanswer->set('level',$level);
        $sqlanswer->save();

        $data = array("valid"=>true);
    }
    else
    {
        $data = array("valid"=>false);
    }
    return $data;
}

function addExam($category,$subject,$level)
{
    $existExam = ORM::for_table('exams')->where('category',$category)->where('subject',$subject)->where('level',$level)->count();
    if($existExam==0)
    {
        $sql = ORM::for_table('exams')->create();
            $sql->set('category',$category);
            $sql->set('subject',$subject);
            $sql->set('level',$level);
            $sql->save();
        $data = array("valid"=>true);
    }
    else
    {
        $data = array("valid"=>false);
    }
    return $data;
}

function addCategory($categoryCode,$categoryName)
{
    $existCategory = ORM::for_table('category')->where('category',$categoryName)->count();
    if($existCategory ==0)
    {
        $sql = ORM::for_table('category')->create();
        $sql->set('uid',$categoryCode);
            $sql->set('category',$categoryName);
            $sql->save();
        $data = array("valid"=>true, "uid"=>$categoryCode, "category"=>$categoryName);
    }
    else
    {
        $data = array("valid"=>false);
    }
    return $data;
}

// function generateCategoryCode()
// {
//     $categoryCode = mt_rand(1000,9999);
//     return $categoryCode;
// }
?>