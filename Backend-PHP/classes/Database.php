<?php

class Database
{
    private $host = "sql201.infinityfree.com";
    private $username = "if0_34422453";
    private $password = "l5o32zO8RNu4";
    private $databaseName = "if0_34422453_products";

    public function connection()
    {
        $connect = mysqli_connect(
            $this->host,
            $this->username,
            $this->password,
            $this->databaseName
        );

        return $connect;
    }
}
