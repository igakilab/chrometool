<?php
$projectid = $_POST['projectid'];
$subjectid = $_POST['subjectid'];
require 'common.php';
$pdo = connect_db();
$sql = "select * from details where projectid = '$projectid' and subjectid = '$subjectid' ";
$stmt = $pdo->query($sql);

foreach ($stmt as $row){
    echo $row['subject']."^".$row['base64data']."^".$row['details'];
  
}