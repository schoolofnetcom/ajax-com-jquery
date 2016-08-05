<?php


if($_GET){
    //var_dump($_GET);exit;
    //echo "<name>{$_GET['name']}</name>";
    //header("HTTP/1.0 404 Not Found");exit;
    echo json_encode($_GET);exit;
}

if($_POST){
    $_POST['name'] = $_POST['name']." DB";
    $_POST['email'] = $_POST['email']." DB";
    $_POST['tel'] = $_POST['tel']." DB";
    echo json_encode($_POST);exit;
}


