<?php
include_once "../classes/Product.php";
include_once "../resources/CORS.php";

$data1 = file_get_contents("php://input");
$data2 = json_decode($data1, true);

$product = new Product();

$product->massDelete($data2);
