<?php
//print_r($_POST);
$projectid = $_POST['projectid'];
$url = $_POST['url'];
require 'common.php';
$pdo = connect_db();
$sql = "select * from details where projectid = '$projectid' and url = '$url'";
$stmt = $pdo->query($sql);

foreach ($stmt as $row){
    echo $row['subjectid']."^".$row['subject']."^".$row['base64data'];
    echo '<br>';
}
