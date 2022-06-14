$app->post('/signup',function(){
    $fname = $_POST['name'];
    $address = $_POST['address'];
    $uname = $_POST['uname'];
    $email = $_POST['email'];
    $password =$_POST['password'];
    $bday = $_POST['bday'];
    $contact = $_POST['contact'];


    $sql = "INSERT INTO users (fullname, address, username, email, password, birthday, contact) VALUES ('$fname','$address','$uname','$email','$password','$bday','$contact')";

    $mysql = "SELECT * FROM users WHERE username = '$uname' AND email = '$email'";

    $result = mysqli_query($conn, $mysql);

    if(mysqli_num_rows($result) == 1) {
        echo "User exist";
    }
    else 
    {
        echo "User does not exist";
        if(mysqli_query($conn, $sql))
        {
            // echo 'New record created successfully';
        }
        else
        {
            echo "Error: " . $sql . " " . mysqli_error($conn);
        }
    }
});

$app->post('/update/user',function(){
    $update = $_POST['edit'];
    $newname = $_POST['name'];
    $newaddress = $_POST['address'];
    $newuname = $_POST['uname'];
    $newemail = $_POST['email'];
    $newpassword =$_POST['password'];
    $newbday = $_POST['bday'];
    $newcontact = $_POST['contact'];

    $sql = "UPDATE users SET fullname = '$newname',address= '$newaddress',username = '$newuname',email = '$newemail',password = '$newpassword',birthday = '$newbday', contact= '$newcontact' WHERE userid = '$update'";
    $emailsql = "SELECT * FROM users WHERE email = '$newemail'";
    $ures = mysqli_query($conn, $unamesql);
    $resemail = mysqli_query($conn, $emailsql);

    if(mysqli_num_rows($resemail) == 1 )
    {
        $emailtaken = 2;
        echo $emailtaken;
    }
    else{
        if (mysqli_query($conn, $sql)) {
            echo "Record updated successfully";
        } else {
            echo "Error updating record: " . mysqli_error($conn);
        }
    }
});

$app->get('/getuserid',function(){
    $uname = $_GET['username'];
    $email = $_GET['email'];
    $sql = "SELECT * FROM users WHERE username = '$uname' OR email = '$email'"; 

    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) 
    {
        while($row = mysqli_fetch_assoc($result)) {
    $id = $row["userid"];
            echo $id;
    }
    
    } 
    else 
    {
        echo "0 results";
    }
});
$app->get('/view',function(){
    $uname = $_GET['username'];
    $email = $_GET['email'];
    $sql = "SELECT * FROM users WHERE NOT username = '$uname' OR NOT email = '$email' ";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        echo'<table class="table table-sm table-bordered table-hover table-striped table-light">
        <tr>
            <th>ID</th>
            <th>Fullname</th>
            <th>Address</th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th>Birthday</th>
            <th>Contact</th>
            <th>Delete</th>
        </tr>';
        while($row = mysqli_fetch_assoc($result)) {
        //   echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
        echo '<tr>
        <td>'.$row['userid'].'</td>
        <td>'.$row['fullname'].'</td>
        <td>'.$row['address'].'</td>
        <td>'.$row['username'].'</td>
        <td>'.$row['email'].'</td>
        <td>'.$row['password'].'</td>
        <td>'.$row['birthday'].'</td>
        <td>'.$row['contact'].'</td>
        <td><button type="button" class="btn btn-danger" id = "delete" userid='.$row['userid'].'>Delete</button></td>
    </tr>';
        }
        echo '</table>';
        echo '<button type="button" class="w-100 mb-2 btn btn-lg rounded-4btn btn-info" id="backhome" onclick="">Home</button>';
    } else {
        echo "<script>
            alert('There is no registered user');
            location.replace('#/home');
            </script>";
    }
});