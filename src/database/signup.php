<?php
require 'db_connection.php';

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $email = $_POST['email'];
    $username = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    $query = "INSERT INTO users (email, username, password) VALUES ('$email', '$username', '$password')";
    $result = pg_query_params($conn, $query, array($email, $username, $password));

    if($result){
        echo json_encode(array("message" => "User created successfully"));
    }else{
        echo json_encode(array("message" => "Error creating user: ".pg_last_error($conn)));
    }
}
?>