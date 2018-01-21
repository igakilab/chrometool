<?php
require 'common.php';
$pdo = connect_db();
$sql = "select * from project";
$stmt = $pdo->query($sql);

foreach ($stmt as $row){
    echo $row['projectid']."^".$row['projectname'];
    echo '<br>';
}
?>

