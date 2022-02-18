CREATE DATABASE IF NOT EXISTS exercicios_backend_23_1;

USE exercicios_backend_23_1;

CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  email VARCHAR(30) NOT NULL,
  password VARCHAR(16) NOT NULL
);