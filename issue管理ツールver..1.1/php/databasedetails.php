<?php
//print_r($_POST);
$subjectid = $_POST['subjectid'];
require 'common.php';
$pdo = connect_db();
$sql ="select * from details where subjectid = '$subjectid'";
$stmt = $pdo->query($sql);

foreach ($stmt as $row){
    echo $row['base64data']."^".$row['details'];
    echo '<br>';
}