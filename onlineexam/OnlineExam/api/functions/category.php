<?php
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
