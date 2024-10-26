<?php
$host = "670a3bb7cf43";
$password = "test";
$database = "postgres";
$user = "super_user";
$port = 5432;

$connection_string = "host=$host port=$port dbname=$database user=$user password=$password";

$conn = pg_connect($connection_string);

if (!$conn) {
    die("Connection to the database failed. ".pg_last_error());
}
?>