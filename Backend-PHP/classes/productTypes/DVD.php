<?php

include_once "abstract/Attributes.php";

class DVD extends Attributes
{
    public function getAppropriateAttribute($formValues)
    {
        return "Size: " . $formValues["size"] . "MB";
    }
}
