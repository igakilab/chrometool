<?php
print_r($_POST);
$projectname = $_POST['projectname'];

require'common.php';
$pdo = connect_db();
$sql = "INSERT INTO project(projectname) VALUE ('$projectname')";
$stmt = $pdo->query($sql);


