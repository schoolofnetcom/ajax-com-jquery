<?php

if($_GET){
    //var_dump($_GET);exit;
    //echo "<name>{$_GET['name']}</name>";
    //header("HTTP/1.0 404 Not Found");exit;
    echo json_encode($_GET);exit;
}

if($_POST){
    var_dump($_POST);exit;
}


