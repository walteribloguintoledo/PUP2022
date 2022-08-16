<?php
include 'functions/connect.php';

function registerCreator($userType, $firstname, $middlename, $lastname,$address, $birthday, $email, $pswrd,$contact) // Registers a new Exam Creator
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
function registerExaminee($userType, $firstname, $middlename, $lastname,$address, $birthday, $email, $pswrd,$contact, $category) //Registers a new Examinee
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

function guestLogin($guestFirstname,$guestMiddleName,$guestLastName,$category) // Registers and Logs on Guest user
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

function checkUser($email,$pswd) // Checks if the user exist
{
    $data = array();
    
    $sql = ORM::for_table('users')->where('email',$email)->where('password',$pswd)->find_many();
    
    foreach ($sql as $row)
    {
        $data = array("valid" => true, "id"=> $row->id,"uid" => $row->uid, "userType" => $row->userType, "firstname"=> $row->firstname, "middlename" => $row->middlename, "lastname" => $row->lastname,  "email" => $row->email,"password" => $row->password, "category" => $row->category);
    }
    return $data;
}

function getCategory() // Retrieves exam categories
{
    $data = array();
    $sql = ORM::for_table('category')->find_many();
    foreach ($sql as $row)
    {
       $data[] = array("id"=>$row->id, "uid"=>$row->uid, "category"=>$row->category);
    }

    return $data;
}

function getSubject() // Retrieves Exam Subjects
{
    $data = array();
    $sql = ORM::for_table('subject')->find_many();
    foreach ($sql as $row)
    {
       $data[] = array("id"=>$row->id, "uid"=>$row->uid, "subject"=>$row->subjectName);
    }

    return $data;
}

function addQuestion($level,$examQuestion,$choice1,$choice2,$choice3,$choice4,$answer) // Insert entries in the exam_entry table
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

function addExam($category,$subject,$level) //Creates and inserts exam details
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


function addCategory($categoryCode,$categoryName) //Creates and inserts exam category
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

function addSubject($subjectCategory,$subjectName)//Creates and inserts exam subject
{
    $existSubject = ORM::for_table('subject')->where('subjectName',$subjectName)->where('uid',$subjectCategory)->count();
    if($existSubject==0)
    {
        $sqlsubject = ORM::for_table('subject')->create();
            $sqlsubject->set('uid',$subjectCategory);
            $sqlsubject->set('subjectName',$subjectName);
            $sqlsubject->save();
        $data = array("valid"=>true,"uid"=>$subjectCategory, "subject"=>$subjectName);
    }
    else
    {
        $data = array("valid"=>false);
    }
    return $data;
}

function getCategoryData($editID)//Fetches the category data to edit
{
    $sql = ORM::for_table('category')->where('uid',$editID)->find_many();
    foreach ($sql as $row)
    {
       $data = array("id"=>$row->id, "uid"=>$row->uid, "category"=>$row->category);
    }

    return $data;
}

function editCategory($editID,$newCategory)//Updates exam category
{
    
    $existCategory = ORM::for_table('category')->where('category',$newCategory)->count();
    if($existCategory==0)
    {
        $sql = ORM ::for_table('category')->where('uid',$editID)->find_many();
        $sql->set('category',$newCategory);
        $sql->save();
        $data = array("valid"=>true,"uid"=>$editID,"category"=>$newCategory);
    }
    else
    {
        $data = array("valid"=>false);
    }
    return $data;
}

function deleteCategory($delID) //Deletes exam category
{
    $sql = ORM::for_table('category')->where('uid',$delID)->find_many();
    $sql->delete();
    $delsubjects = ORM::for_table('subject')->where('uid',$delID)->find_many();
    $delsubjects->delete();
    $data = array("valid" => true);
    return $data;
}

function getSubjectData($editID) //Fetches exam subject to edit
{
    $sql = ORM::for_table('subject')->where('id',$editID)->find_many();
    foreach ($sql as $row)
    {
       $data = array("id"=>$row->id, "uid"=>$row->uid, "subject"=>$row->subjectName);
    }

    return $data;
}

function editSubject($editID,$uid,$newSubject) //Updates exam subject
{
    $existSubject = ORM::for_table('subject')->where('subjectName',$newSubject)->where('uid',$uid)->count();
    if($existSubject==0)
    {
        $sql = ORM ::for_table('subject')->where('id',$editID)->find_many();
        $sql->set('subjectName',$newSubject);
        $sql->save();
        $data = array("valid"=>true,"id"=>$editID,"subject"=>$newSubject);
    }
    else
    {
        $data = array("valid"=>false);
    }
    return $data;
}

function deleteSubject($delID)
{
    $delsubjects = ORM::for_table('subject')->where('id',$delID)->find_many();
    $delsubjects->delete();
    $data = array("valid" => true);
    return $data;
}

//======================MAKE THESE INTO A JSON FILE========================//
// function saveSettings($numOfItems1,$numOfItems2,$numOfItems3,$passingGrade)
// {
//     $sqlnumofitems1 = ORM::for_table('settings')->create();
//     $sqlnumofitems1->set('keyIndex','No. of Items for Level 1',$numOfItems1);
//     $sqlnumofitems1->set('value',$numOfItems1);
//     $sqlnumofitems1->save();

//     $sqlnumofitems2 = ORM::for_table('settings')->create();
//     $sqlnumofitems2->set('keyIndex','No. of Items for Level 2',$numOfItems2);
//     $sqlnumofitems2->set('value',$numOfItems2);
//     $sqlnumofitems2->save();

//     $sqlnumofitems3 = ORM::for_table('settings')->create();
//     $sqlnumofitems3->set('keyIndex','No. of Items for Level 3',$numOfItems3);
//     $sqlnumofitems3->set('value',$numOfItems3);
//     $sqlnumofitems3->save();
    
//     $sqlpassingGrade = ORM::for_table('settings')->create();
//     $sqlpassingGrade->set('keyIndex','No. of Items for Level 1',$passingGrade);
//     $sqlpassingGrade->set('value',$passingGrade);
//     $sqlpassingGrade->save();

//     $data = array("valid"=>true,"numOfItems1"=>$numOfItems1,"numOfItems2"=>$numOfItems2,"numOfItems3"=>$numOfItems3, "passingGrade"=>$passingGrade);

//     return $data;
// }
?>