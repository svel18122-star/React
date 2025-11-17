CREATE DATABASE companyDB;
CREATE TABLE employees (
id INT PRIMARY KEY,
name VARCHAR(100) NOT NULL,
salary INT DEFAULT 30000,
email VARCHAR(100)
);
ALTER TABLE employees
ADD CONSTRAiNT unique_email UNIQUE (email);

CREATE TABLE products (
id INT PRIMARY KEY,
name VARCHAR(100),
price int);
ALTER TABLE products
ADD stock INT;
ALTER TABLE products
CHANGE price unit_price INT;

EXEC sp_rename 'products.price', 'unit_price', 'column'
