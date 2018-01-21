<?php
print_r($_POST);
$projectid = $_POST['projectid'];
$title = $_POST['title'];
$details = $_POST['details'];

require'common.php';
$pdo = connect_db();
$sql = "UPDATE details SET projectid = $projectid , subject = '$title' , details = '$details' order by subjectid desc limit 1";
$stmt = $pdo->query($sql);