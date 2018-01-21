<?php
$projectid = $_POST['projectid'];
require 'common.php';
$pdo = connect_db();
$sql = "select * from details where projectid = '$projectid' and done = 0";
$stmt = $pdo->query($sql);

foreach ($stmt as $row){
    echo $row['subjectid']."^".$row['subject'];
    echo '<br>';
}