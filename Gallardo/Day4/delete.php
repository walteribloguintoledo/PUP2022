<?php
include "connect.php";
$delid = $_POST['userid'];
$sql = "DELETE FROM users WHERE userid = '$delid'";

if (mysqli_query($conn, $sql)) {
  echo "Record deleted successfully";
} else {
  echo "Error deleting record: " . mysqli_error($conn);
}
?>