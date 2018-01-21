<?php
function connect_db(){
    $dsn = 'mysql:host=localhost;dbname=test2;charset=utf8';
    $username = 'root';
    $password ='';
    
    $options = [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ];
    return new PDO($dsn, $username,$password,$options);
}
?>
