<?php

include_once "abstract/Attributes.php";

class Furniture extends Attributes
{
    public function getAppropriateAttribute($formValues)
    {
        return "Dimension: " .
            $formValues["height"] .
            "x" .
            $formValues["width"] .
            "x" .
            $formValues["length"] .
            "";
    }
}
