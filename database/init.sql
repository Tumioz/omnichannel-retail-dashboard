CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    sku VARCHAR(50) UNIQUE NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    in_stock INTEGER NOT NULL
);

INSERT INTO products (name, sku, price, in_stock) VALUES
('Wireless Earbuds', 'AUDIO-001', 1499.99, 45),
('Mechanical Keyboard', 'TECH-042', 2150.00, 12),
('USB-C Hub', 'ACC-993', 450.50, 89);