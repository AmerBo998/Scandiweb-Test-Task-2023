<?php

include_once "../classes/Product.php";

include_once "../resources/CORS.php";

$data = file_get_contents("php://input");
$SKU = json_decode($data, true);

$product = new Product();

$product->checkSKU($SKU);
