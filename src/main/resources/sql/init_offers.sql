CREATE TABLE offer (
  id SERIAL PRIMARY KEY,
  cityId INTEGER REFERENCES city(id),
  categoryId INTEGER REFERENCES category(id),
  price NUMERIC ,
  name VARCHAR(200),
  content TEXT,
  contactEmail VARCHAR(100),
  creationTime BIGINT,
  expirationTime BIGINT
);
