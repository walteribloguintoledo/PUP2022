<?php
include "connect.php";
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
?>
