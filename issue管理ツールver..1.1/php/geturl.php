<?php
$projectid = $_POST['projectid'];
require 'common.php';
$pdo = connect_db();
$sql = "select distinct url from details where projectid = '$projectid'";
$stmt = $pdo->query($sql);

foreach ($stmt as $row){
    echo $row['url'];
    echo '<br>';
}