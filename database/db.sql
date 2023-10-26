CREATE DATABASE municipio

CREATE TABLE multas(
    id SERIAL PRIMARY KEY,
    title VARCHAR(50) UNIQUE,
    description VARCHAR(255)
);