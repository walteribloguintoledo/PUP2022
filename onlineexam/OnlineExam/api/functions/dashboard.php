<?php
function dashboardData()
{
    $data = array();
    $exams = ORM::for_table('exams')->count();
    $examinees = ORM::for_table('users')->where('userType',"Examinee")->count();
    $questions = ORM::for_table('exam_entry')->where('keyIndex',"question")->count();
    
    $data = array('exam'=>$exams,'examinees'=>$examinees,'questions'=>$questions);

    return $data;
}
?>