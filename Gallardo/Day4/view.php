<?php
include "connect.php";
$sql = "SELECT * FROM users";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0) 
{
    echo '<table class="table table-hover">
    <th>ID</th> <th>Name</th> <th>Address</th> <th>Username</th> <th>Email</th> <th>Password</th> <th>Birthday</th> <th>Contact no.</th>';
    while($row = mysqli_fetch_assoc($result)) {
        echo 
        '<tr> <td>$row["id"]</td> <td>$row["fullname"]</td> <td>$row["address"]</td> <td>$row["username"]</td> <td>$row["email"]</td> <td>$row["password"]</td> <td>$row["birthday"]</td> <td>$row["contact"]</td></tr>'
    }
    echo '</table>'
} 
else 
{
    echo "0 results";
}
?>