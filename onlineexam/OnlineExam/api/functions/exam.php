<?php
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