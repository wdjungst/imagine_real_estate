CREATE TABLE agents (
  ID SERIAL PRIMARY KEY,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  featured BOOLEAN DEFAULT false,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(255) NOT NULL,
  bio TEXT,
  url VARCHAR(255),
  imgUrl VARCHAR(255),
  agentHeaderId VARCHAR(255),
  website VARCHAR(255)
);

CREATE TABLE services (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  url VARCHAR(255),
  category VARCHAR(255),
  phone VARCHAR(255)
);

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  type VARCHAR(50)
);

