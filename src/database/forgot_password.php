<?php
require 'db_connection.php';

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $email = $_POST['email'];

    $query = "SELECT * FROM users WHERE email = $1";
    $result = pg_query_params($conn, $query, array($email));

    if($row = pg_fetch_assoc($result)){
        //Generate a unique reset token
        $reset_token = bin2hex(random_bytes(50));

        //Store the reset token in the database
        $expiry = date('Y-m-d H:i:s', time() + 3600); //1 hour from now

        $updateQuery = "UPDATE users SET reset_token = $1 WHERE email = $2";
        $result = pg_query_params($conn, $query, array($reset_token, $expiry, $email));

        $resetLink = "http://localhost:8081/reset-password?token=$reset_token";

        //Send the reset link to the user's email
        $to = $email;
        $subject = "Password Reset Request";
        $message = "Click the following link to reset your password: $resetLink";
        $headers = "From: mafia.game.app@gmail.com";

        mail($to, $subject, $message, $headers);

        echo json_encode(array("message" => "Reset link sent to email"));
    }else{
        echo json_encode(array("message" => "User not found"));
    }
}
?>