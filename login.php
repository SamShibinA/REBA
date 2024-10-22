<?php
    session_start();

    include("db.php");

    if($_SERVER['REQUEST_METHOD']=="POST"){
        $username=$_POST['uname'];
        $password=$_POST['pword'];


        if(!empty($username) && !empty($password)){
            $query="select * from unameandpass where username='$username' limit 1";
            $result=mysqli_query($con,$query);

            if($result){

                if($result && mysqli_num_rows($result) > 0){

                    $user_data = mysqli_fetch_assoc($result);

                    if($user_data['password']==$password){
                        header("location: input.php");
                        die;
                    }
                }

            }
            echo "<script type='text/javascript'> alert('wrong password or username')</script>";
        }
        else{
            echo "<script type='text/javascript'> alert('wrong password or username')</script>";
        }
    }
?>





<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>REBA</title>
    <link rel="stylesheet" href="login.css">
</head>
<body>
    <h1>REBA</h1>

    <div class="container">
  
        <form method="post">
            <h1 style="padding-top: 3rem;">LOGIN</h1>
            <label for="name">Username</label>
            <input type="text" placeholder="Username" id="name" name="uname" required>
            <label for="password">Password</label>
            <input type="password" placeholder="Password" id="password" name="pword" required>
            <a href="signup.php" style="padding-top:7px; padding-bottom: 27px;margin-left: 0% ;">Sign up?</a>
            <button style="margin-top:10px ;" type="submit">Login</button>
        </form>
        
    </div>
</body>
</html>