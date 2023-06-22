<?php

include_once "../classes/Product.php";
include_once "../classes/productTypes/DVD.php";
include_once "../classes/productTypes/Book.php";
include_once "../classes/productTypes/Furniture.php";
include_once "../resources/CORS.php";

$data = file_get_contents("php://input");
$formData = json_decode($data, true);

$product = new Product();

$product->setSKU($formData["SKU"]);
$product->setName($formData["Name"]);
$product->setPrice($formData["Price"]);

$attributeClass = new $formData["switcher"];
$productAttribute = $attributeClass->getAppropriateAttribute($formData);

$product->setAttribute($productAttribute);

$product->addProduct();
