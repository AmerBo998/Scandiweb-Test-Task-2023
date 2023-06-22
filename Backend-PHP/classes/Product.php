<?php

include_once "Database.php";

class Product extends Database
{
    private $SKU;
    private $name;
    private $price;
    private $attribute;

    public function setSKU($SKU)
    {
        $this->SKU = $SKU;
    }

    public function setName($name)
    {
        $this->name = $name;
    }
    public function setPrice($price)
    {
        $this->price = $price;
    }
    public function setAttribute($attribute)
    {
        $this->attribute = $attribute;
    }

    public function getSKU()
    {
        return $this->SKU;
    }

    public function getName()
    {
        return $this->name;
    }
    public function getPrice()
    {
        return $this->price;
    }
    public function getAttribute()
    {
        return $this->attribute;
    }

    public function getData()
    {
        $sql = "SELECT * FROM products";

        $result = mysqli_query($this->connection(), $sql);

        $json_array = [];

        while ($row = mysqli_fetch_assoc($result)) {
            $json_array[] = $row;
        }

        return $json_array;
    }

    public function addProduct()
    {
        $sql =
            "INSERT INTO products 
                VALUES
            ('" .
            $this->getSKU() .
            "','" .
            $this->getName() .
            "','" .
            $this->getPrice() .
            "','" .
            $this->getAttribute() .
            "')";

        mysqli_query($this->connection(), $sql);
    }

    public function massDelete($selectedProducts)
    {
        foreach ($selectedProducts as $productId) {
            $sql = "DELETE from products WHERE SKU='" . $productId . "'";
            mysqli_query($this->connection(), $sql);
        }
    }

    public function checkSKU($SKU)
    {
        $sql = "SELECT SKU FROM products WHERE SKU='" . $SKU . "'";
        $result = mysqli_query($this->connection(), $sql);

        if ($result->num_rows > 0) {
            echo false;
        } else {
            echo true;
        }
    }
}
