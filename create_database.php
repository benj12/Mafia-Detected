<?php
$db_path = __DIR__ . '/mafia-game.db';
$db = new SQLite3($db_path);

if ($db) {
    echo "New database created successfully or existing database opened.";
} else {
    echo "Error creating database: " . $db->lastErrorMsg();
}

$db->close();
?>
