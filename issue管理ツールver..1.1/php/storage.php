
<?php

$img = $_POST['img_data'];
$url = $_POST['url'];
//setcookie("username","taguchi");
//echo $_COOKIE['username'];
//$name = taguchi;
//setcookie("username",$name);
//setcookie("aaa","bbb");
//
//$a = $_COOKIE("aaa");
//echo $a;
//echo $_COOKIE['aaa'];
//$img = $_POST;
//echo $img;
//$img = str_replace('data:image/png;base64,', '', $img);
//$img = str_replace(' ', '+', $img);
//$fileData = base64_decode($img);
//$fileName = 'photo.jpg';
//file_put_contents($fileName, $fileData);
//echo $_COOKIE['aaa'];
//print_r($_POST);


require'common.php';
$pdo = connect_db();
 $sql = "INSERT INTO details(url,base64data) VALUES ('$url','$img')";
$stmt = $pdo->query($sql);




//  $name = filter_input(INPUT_POST, 'name');
//require'common.php';
// $img = file_get_contents($_FILES[$fileName]["tmp_name"]);
// $pdo = connect_db();
// $sql = "INSERT INTO details(base64data) VALUES ('$img')";
//  $stmt = $pdo->prepare($sql);
//  $stmt->execute([$img]);
//    $query->execute();
//$stmt = $pdo->query($sql);
 
?>
