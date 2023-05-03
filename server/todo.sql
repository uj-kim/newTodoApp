-- create table
CREATE TABLE todos(
    -> id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    -> username VARCHAR(30) NOT NULL,
    -> title VARCHAR(255) NOT NULL,
    -> startdate DATETIME DEFAULT NULL,
    -> enddate DATETIME DEFAULT NULL,
    -> done BOOLEAN NOT NULL DEFAULT FALSE
    -> );