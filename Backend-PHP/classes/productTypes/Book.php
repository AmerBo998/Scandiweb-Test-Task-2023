<?php

include_once "abstract/Attributes.php";

class Book extends Attributes
{
    public function getAppropriateAttribute($formValues)
    {
        return "Weight: " . $formValues["weight"] . "KG";
    }
}
