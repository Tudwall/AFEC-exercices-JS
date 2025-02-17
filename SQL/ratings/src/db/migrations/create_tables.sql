DROP DATABASE if EXISTS ratings;

CREATE DATABASE if NOT EXISTS ratings;

use ratings;

CREATE TABLE
    products (
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(100),
        description VARCHAR(250),
        price DECIMAL(4, 2)
    );

CREATE TABLE
    ratings (
        id INT PRIMARY KEY AUTO_INCREMENT,
        quality INT CHECK (quality BETWEEN 1 AND 10),
        price INT CHECK (price BETWEEN 1 AND 10),
        utility INT CHECK (utility BETWEEN 1 AND 10),
        product_id INT NOT NULL,
        CONSTRAINT fk_product_id FOREIGN KEY (product_id) REFERENCES products (id)
    );

INSERT INTO
    products (name, description, price)
VALUES
    ("chips", "chips au vinaigre", 0.99),
    ("shampooing", "shampooing aux oeufs", 2.49);

INSERT INTO
    ratings (quality, price, utility, product_id)
VALUES
    (5, 5, 5, 1)