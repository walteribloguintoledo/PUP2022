<?php

function getSubjectExam($categoryName)
{
    $data = array();
    $sql = ORM::for_table('category')->join('subject',array('category.uid','=','subject.uid'))->where('category',$categoryName)->find_many();
    foreach ($sql as $row)
    {
       $data[] = array("id"=>$row->id, "uid"=>$row->uid, "subject"=>$row->subjectName);
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