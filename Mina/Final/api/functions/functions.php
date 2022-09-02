<?php
function userLogin($conn, $username, $password){
    $sql = "SELECT * FROM allusers WHERE (( Username = '$username' AND Password = '$password' ) OR ( Email = '$username' AND Password = '$password' ))";
    if ($result = mysqli_query($conn, $sql)) {
        $rowcount = mysqli_num_rows( $result );
        if ($rowcount<1){
            $msgArray = array(0);
            
        }
      else{
        $sql = "SELECT Username, Name, Email, Address, Birthdate, Age, ContactNumber, Password FROM allusers WHERE Username='$username'";
            if ($result = mysqli_query($conn, $sql)) {
            // Fetch one and one row
            while ($row = mysqli_fetch_row($result)) {
                $dbusername = $row[0];
                $dbname = $row[1];
                $dbemail = $row[2];
                $dbaddress = $row[3];
                $dbbday = $row[4];
                $dbage = $row[5];
                $dbcnum = $row[6];
                $dbpass = $row[7];
                $msgArray = array($dbusername,$dbname,$dbemail,$dbaddress,$dbbday ,$dbage,$dbcnum,$dbpass);
            }
            mysqli_free_result($result);
            }
            else {
                $msgArray = array(0,1);
            }
    }
     
     return $msgArray;
    $conn->close();
    }
}

function read_username($username, $password){
    $data = ORM::forTable('allusers')->where('Username', $username)->where('Password', $password)->findOne();
    return $data;
}

function userSignin($conn,$username, $name , $email, $address, $bday, $age, $contactnumber, $password){
    $sql = "SELECT * FROM allusers WHERE Username='$username' OR Email='$email'";
        if ($result = mysqli_query($conn, $sql)) {
            $rowcount = mysqli_num_rows( $result );
            if ($rowcount>0){
                $message = "Error: Username/Email Already Exist!!!";
                $errorNumber = 0;
            }
            else{
                $sql = "INSERT INTO allusers (Username, Name, Email, Address, Birthdate, Age, ContactNumber, Password)
                VALUES ('$username', '$name' , '$email', '$address', '$bday', $age, '$contactnumber', '$password')";
                if ($conn->query($sql) === TRUE) {
                    $message = "New record created successfully!";
                    $errorNumber = 1;
                    //echo $errorNumber;
                } 
                else 
                {
                    $message = "Error: " . $sql . "\n" . $conn->error;
                    $errorNumber = 2;
                    //echo $errorNumber;
                }
            }
               
        }
        return $errorNumber;
        $conn->close();
    }



    function read_user_input($username,$password){
    $userChecker = ORM::forTable('allusers')->where('Username', $username)->where('Password', $password)->findOne();
    if ($userChecker){
        $errorMsg = 1;
        $userData = $userChecker;
        // $person = ORM::for_table('allusers')->create();
        // $person->Username = $username;
        // // Returns array('first_name' => 'Fred', 'surname' => 'Bloggs', 'age' => 50)
        // $data = $person->as_array();
    }
    else{
        $emailChecker = ORM::forTable('allusers')->where('Email', $username)->where('Password', $password)->findOne();
        if ($emailChecker){
            $errorMsg = 1;
            $userData = $emailChecker;
        }
        else{
        $errorMsg = 0;
        $userData= array(0);
        }
    }
    $status = array(
        "existing" => $errorMsg,
        "userArray" => var_dump($userData) );
    
    return $status;
}

function create_records($username, $name , $email, $address, $bday, $age, $contactnumber, $password){
    $userChecker = ORM::forTable('allusers')->where('Username', $username)->findOne();
    if ($userChecker){
        $errorMsg = 1;
    }
    else{
        $emailChecker = ORM::forTable('allusers')->where('Email', $email)->findOne();
        if ($emailChecker){
            $errorMsg = 2;
        }
        else{
            $person = ORM::for_table('allusers')->create();
            $person->Username = $username;
            $person->Name = $name;
            $person->Email = $email;
            $person->Address = $address;
            $person->Birthdate = $bday;
            $person->Age = $age;
            $person->ContactNumber = $contactnumber;
            $person->Password = $password;
            $person->save();
            $errorMsg = 0;
        }
        
    }
    return $errorMsg;

}

function userIdiormLogin($username, $password){ 
    $people = ORM::for_table('allusers')
            ->where_any_is(array(
                array('Username' => $username, 'Password' => $password),
                array('Email' => $username, 'Password' => $password)))
            ->find_many();
            if ($people=0){
                $errorNumber = 1;
            }
            else{
                $userInfo = ORM::for_table('allusers')->where('Username', '$username')->find_one();
                $errorNumber = 0;
            }
    return $errorNumber;
    
}
