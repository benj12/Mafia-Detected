<?php
require 'db_connection.php';

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $email = $_POST['email'];
    $password = $_POST['password'];

    $query = "SELECT * FROM users WHERE email = $1";
    $result = pg_query_params($conn, $query, array($email));

    if($row = pg_fetch_assoc($result)){
        if(password_verify($password, $row['password'])){
            echo json_encode(['success' => true, 'message' => 'Login successful']);
        } else{
            echo json_encode(['success' => false, 'message' => 'Invalid password']);
        }
    } else{
        echo json_encode(['success' => false, 'message' => 'User not found']);
    }
}
?>