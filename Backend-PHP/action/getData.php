<?php

include_once "../classes/Product.php";
include_once "../resources/CORS.php";

$retrieve = new Product();

$json_array = $retrieve->getData();

echo json_encode($json_array);
