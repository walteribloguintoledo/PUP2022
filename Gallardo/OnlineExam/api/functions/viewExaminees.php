<?php
function getExaminees()
{
    $examinee = "Examinee";
    $data = array();
    $sql = ORM::for_table('users')->where('userType',"Examinee")->find_many();
    foreach ($sql as $row)
    {
        $data[] = array("id"=>$row->id, "uid"=>$row->uid, "firstname"=>$row->firstname, "lastname"=>$row->lastname, "address"=>$row->address, "birthday"=>$row->birthday, "email"=>$row->email, "contact"=>$row->contact);
    }

    return $data;
}