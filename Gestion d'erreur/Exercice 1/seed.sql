-- Création de la table users
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Suppression des utilisateurs existants (facultatif, à utiliser avec précaution)
DELETE FROM users;

-- Insertion des nouveaux utilisateurs
INSERT INTO users (name, email, password) VALUES
    ('John Doe', 'john.doe@example.com', 'password123'),
    ('Jane Smith', 'jane.smith@example.com', 'password456'),
    ('Alice Johnson', 'alice.johnson@example.com', 'password789');
