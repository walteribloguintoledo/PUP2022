<?php
include "/xampp/htdocs/gallardo/Day4/connect.php"
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Submit</title>
</head>
<body>
<form id ="signUp" method = "POST" action="insert.php" >
        <div class="container">
            <div class="row">
            <div class="col align-self-center p-5 pt-0">
                <br>
                <h2 class="fw-bold mb-0">Sign Up</h2>
                <br>
                <div class="form-floating mb-2 w-100">
                    <input type="text" class="form-control" id="fullname" placeholder="name" name="fullname" id="name" onkeypress="lettersOnly(event)">
                    <label for="floatingInput">Name</label>
                </div>
                <div class="form-floating mb-2 w-100">
                    <input type="text" class="form-control" id="address" placeholder="address" name="address" >
                    <label for="floatingInput">Address</label>
                </div>
                <div class="form-floating mb-2 w-100">
                <input type="text" class="form-control" id="username" placeholder="username" name="username" onkeypress="noSpace(event)">
                <label for="floatingInput">Username</label>
                </div>
                <div class="form-floating mb-2 w-100">
                <input type="email" class="form-control" id="email" placeholder="email" name="email" onkeypress="noSpace(event)">
                <label for="floatingInput">Email</label>
                </div>
                <div class="form-floating mb-2 w-100">
                <input type="password" class="form-control" id="password" placeholder="password" name="password" onkeypress="noSpace(event)">
                <label for="floatingInput" maxlength="10">Password</label>
                </div>

                <div class="form-floating mb-2 w-100">
                    <input type="date" class="form-control" id="bday" placeholder="birthday" name="bday" >
                    <label for="floatingInput">Birthday</label>
                </div>
                <div class="form-floating mb-2 w-100">
                    <input type="text" class="form-control" id="contact" placeholder="number" maxlength="11" name="contact" onkeypress="numOnly(event)">
                    <label for="floatingInput">Contact no.</label>
                </div>
                <div>
                <button type="submit" class="w-100 mb-2 btn btn-lg rounded-4btn btn-primary" id="submit" onclick="">Sign Up</button>
                
                </form>
            </div>
            <pre id="array"></pre>
            <div id="inArr">
            </div>
            </div>
        </div>
        <script src="js/app.js"></script>
</body>
</html>