<?php
function addQuestion($level,$examQuestion,$choice1,$choice2,$choice3,$choice4,$answer,$keyIndex,$examcode) // Insert entries in the exam_entry table
{
    $value = [$examQuestion,$choice1,$choice2,$choice3,$choice4,$answer];
    $existquestion = ORM::for_table('exam_entry')->where('value',$examQuestion)->count();
    if($existquestion==0)
    {
        for($i=0;$i<count($keyIndex);$i++)
        {
            $sqlquestion = ORM::for_table('exam_entry')->create();
            $sqlquestion->set('uid',$examcode);
            $sqlquestion->set('keyIndex',$keyIndex[$i]);
            $sqlquestion->set('value',$value[$i]);
            $sqlquestion->set('level',$level);
            $sqlquestion->save();
        }
        $data = array("valid"=>true);
    }
    else
    {
        $data = array("valid"=>false);
    }
    return $data;
}

function addExam($category,$subject,$level,$examcode) //Creates and inserts exam details
{
    $existExam = ORM::for_table('exams')->where('category',$category)->where('subject',$subject)->where('level',$level)->count();
    if($existExam==0)
    {
        $sql = ORM::for_table('exams')->create();
            $sql->set('uid',$examcode);
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

function viewCreatedExams()
{
    $sql = ORM::for_table('exams')->find_many();
    foreach ($sql as $row)
    {
        $data[]=array("valid"=>true,"id"=>$row->id,"uid"=>$row->uid,"category"=>$row->category,"subject"=>$row->subject,"level"=>$row->level);
    }
    return $data;
}
?>