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
                //echo $errorNumber;
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

function userIdiormLogin($username, $password){
    $people = ORM::for_table('allusers')
            ->where_any_is(array(
                array('Username' => $username, 'Password' => $password),
                array('Email' => $username, 'Password' => $password)))
            ->find_many();

return $people;
    
}
