<?php
    include("db.php");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>REBA</title>
    <link rel="stylesheet" href="input.css">
</head>
<body> 
    <h1>
        REBA
    </h1>
    
    <form action="result.html">
        
        <div class="container">
            <div class="column">   
                
             <label for="neck">Neck Score:</label>
            <input type="number" placeholder="Enter The Neck Score" id="neck" name="neck" min="1" max="3" step="1" required>
            <span id="n-em" ></span>
            
            <label for="trunk">Trunk Score:</label>
            <input type="number" placeholder="Enter The Trunk Score" id="trunk" name="trunk" min="1" max="5" step="1" required>
            <span id="t-em" ></span>
            
            <label for="leg">Leg Score:</label>
            <input type="number" placeholder="Enter The Leg Score" id="leg" name="leg" min="1" max="4" step="1" required>
            <span id="l-em" ></span>
            
         </div> 
         <div class="column"> 
             <label for="load">Load Score:</label>
             <input type="number" placeholder="Enter The Load Score" id="load" name="load" min="0" max="2" step="1" required>
             <span id="lo-em" ></span>
                     
             <label for="upper-arm">Upper Arm Score:</label>
             <input type="number" placeholder="Enter The Upper Arm Score" id="upper-arm" name="upper-arm" min="1" max="6" step="1" required>
             <span id="ua-em" ></span>
                 
             <label for="lower-arm">Lower Arm Score:</label>
             <input type="number" placeholder="Enter The Lower Arm Score" id="lower-arm" name="lower-arm" min="1" max="2" step="1" required>
             <span id="la-em" ></span>
                 
         </div>
        
        <div class="column">
            
            <label for="wrist">Wrist Score:</label>
            <input type="number" placeholder="Enter The Wrist Score" id="wrist" name="wrist" min="1" max="3" step="1" required>
            <span id="wr-em"></span>
            
            <label for="coupling">Coupling Score:</label>
            <input type="number" placeholder="Enter The Coupling Score" id="coupling" name="coupling" min="0" max="3" step="1" required>
            <span id="co-em"></span>
            
            <label for="activity">Activity Score:</label>
            <input type="number" placeholder="Enter The Activity Score" id="activity" name="activity" min="0" max="3" step="1" required>
            <span id="ac-em"></span>
            
        </div>
        
        <script src="input.js"></script>
        <script src="result.js"></script>
        
    </div>

    <div class="buttoncontainer">
        <button type="submit" style="align-content: center; justify-content: center; ">Submit</button>    
    </div>

    </form>
</body>
</html>