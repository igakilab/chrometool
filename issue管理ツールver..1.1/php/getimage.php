<?php
require 'common.php';
$pdo = connect_db();
$sql = "select * from details order by subjectid desc limit 1";
$stmt = $pdo->query($sql);

foreach ($stmt as $row){
    echo $row['base64data'];
}
?>
