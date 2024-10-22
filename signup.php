<?php
    session_start();

    include("db.php");

    if($_SERVER['REQUEST_METHOD']=="POST"){
        $username=$_POST['uname'];
        $password=$_POST['pword'];


        if(!empty($username) && !empty($password)){

            $query = "insert into unameandpass (username,password) values('$username','$password')";

            mysqli_query($con, $query);

            echo "<script type='text/javascript'> alert('Successfully Registered')</script>";
        }
        else{
            
            echo "<script type='text/javascript'> alert('Please Enter Some Valid Information')</script>";
        }
    }

?>





<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>REBA</title>
    <link rel="stylesheet" href="signup.css">
</head>
<body>
    <div class="container">
        <form method="POST">
            <h1 style="padding-top: 3rem;">SIGN UP</h1>
            <label for="name" >Username</label>
            <input type="text" placeholder="Enter The Username" id="name" name="uname" required>
            <label for="password">Create Password</label>
            <input type="password" placeholder="Create Password" id="password" name="pword" required>
            <a href="login.php">Login?</a>
            <button type="submit">Sign up</button>
        </form>
    </div>
    <h1 class="r">REBA</h1>
</body>
</html>