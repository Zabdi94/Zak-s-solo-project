
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "films"(
"id" SERIAL PRIMARY KEY,
"original_title" VARCHAR(50),
"poster_path" VARCHAR (255) NOT NULL,
"overview" TEXT NOT NULL
);

CREATE TABLE "user_films" (
"id" SERIAL PRIMARY KEY,
 "user_id" INT REFERENCES "user",
 "films_id" INT REFERENCES "films"
);

CREATE TABLE "comments" (
"id" SERIAL PRIMARY KEY,
"user_id" VARCHAR (50)
);

