
<?php



// require 'db_connection.php';

// if ($_SERVER['REQUEST_METHOD'] === 'POST') {
//     $email = $_POST['email'];
//     $username = $_POST['username'];
//     $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

//     $query = "INSERT INTO users (email, username, password) VALUES ($1, $2, $3)";
//     $result = pg_query_params($dbconn, $query, array($email, $username, $password));

//     if ($result) {
//         // User registered successfully, now send an email
//         $to = $email;
//         $subject = "Welcome to Mafia Detected";
//         $message = "Hello $username,\n\nThank you for registering on our website!";
//         $headers = "From: noreply@mafiadetected.com";

//         if(mail($to, $subject, $message, $headers)) {
//             echo json_encode(['success' => true, 'message' => 'User registered successfully and welcome email sent']);
//         } else {
//             echo json_encode(['success' => true, 'message' => 'User registered successfully but failed to send welcome email']);
//         }
//     } else {
//         echo json_encode(['success' => false, 'message' => 'Registration failed']);
//     }





error_reporting(E_ALL);
ini_set('display_errors', 1);

// Log the incoming request
file_put_contents('signup_log.txt', date('Y-m-d H:i:s') . ": Received signup request\n", FILE_APPEND);

require 'db_connection.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $email = $data['email'];
    $username = $data['username'];
    $password = password_hash($data['password'], PASSWORD_DEFAULT);

    // Log the parsed data
    file_put_contents('signup_log.txt', date('Y-m-d H:i:s') . ": Email: $email, Username: $username\n", FILE_APPEND);

    $query = "INSERT INTO users (email, username, password) VALUES ($1, $2, $3)";
    $result = pg_query_params($dbconn, $query, array($email, $username, $password));

    if ($result) {
        file_put_contents('signup_log.txt', date('Y-m-d H:i:s') . ": User registered successfully\n", FILE_APPEND);
        echo json_encode(['success' => true, 'message' => 'User registered successfully']);
    } else {
        file_put_contents('signup_log.txt', date('Y-m-d H:i:s') . ": Registration failed: " . pg_last_error($dbconn) . "\n", FILE_APPEND);
        echo json_encode(['success' => false, 'message' => 'Registration failed']);
    }
} else {
    file_put_contents('signup_log.txt', date('Y-m-d H:i:s') . ": Invalid request method\n", FILE_APPEND);
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
}
?>