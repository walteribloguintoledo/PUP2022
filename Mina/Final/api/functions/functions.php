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
                } 
                else 
                {
                    $message = "Error: " . $sql . "\n" . $conn->error;
                    $errorNumber = 2;
                }
            }
               
        }
        return $errorNumber;
        $conn->close();
    }


function read_username($username, $password){
    $data = ORM::forTable('allusers')->where('Username', $username)->where('Password', $password)->findOne();
    if ($data){
        return $data;
    }
    else{
        $data = ORM::forTable('allusers')->where('Email', $username)->where('Password', $password)->findOne();
        if ($data){
        return $data;
        }
    }
}

function read_forgot_email($email){
    $userChecker = ORM::forTable('allusers')->where('Email', $email)->findOne();
    if ($userChecker){
        $errorMsg = 0;
        $userPass = $userChecker->Password;
    }
    else{
        $errorMsg = 1;
        $userPass = null;
    }
    $status = array(
        "message" => $errorMsg,
        "password" => $userPass
    );
    return $status;

}

function read_user_input($username,$password){
    $userChecker = ORM::forTable('allusers')->where('Username', $username)->where('Password', $password)->findOne();
    if ($userChecker){
        $errorMsg = 0;
    }
    else{
        $emailChecker = ORM::forTable('allusers')->where('Email', $username)->where('Password', $password)->findOne();
        if ($emailChecker){
            $errorMsg = 0;
        }
        else{
        $errorMsg = 1;
        }
    }

    return $errorMsg;
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
