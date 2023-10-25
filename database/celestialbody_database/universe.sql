GRANT ALL PRIVILEGES ON DATABASE universe TO kdrercn;
GRANT ALL PRIVILEGES ON DATABASE universe TO postgres;

CREATE TABLE solar_system(
	solar_system_id SERIAL PRIMARY KEY,
	galaxy_id INT,
	name TEXT NOT NULL UNIQUE,
	age NUMERIC NOT NULL
);

CREATE TABLE galaxy(
	galaxy_id SERIAL PRIMARY KEY,
	name varchar(40),
	diameter numeric
);

CREATE TABLE star(
	star_id SERIAL PRIMARY KEY,
	name varchar(40),
	galaxy_id INT
);

CREATE TABLE planet(
	planet_id SERIAL PRIMARY KEY,
	name varchar(40),
	has_life BOOL,
	has_water BOOL,
	star_id INT
);

CREATE TABLE moon(
	moon_id SERIAL PRIMARY KEY,
	name varchar(40),
	planet_id INT
);

ALTER TABLE solar_system ADD FOREIGN KEY(galaxy_id) REFERENCES galaxy(galaxy_id);

ALTER TABLE star ADD FOREIGN KEY(galaxy_id) REFERENCES galaxy(galaxy_id);

ALTER TABLE planet ADD FOREIGN KEY(star_id) REFERENCES star(star_id);

ALTER TABLE moon ADD FOREIGN KEY(planet_id) REFERENCES planet(planet_id);

INSERT INTO 
	galaxy(name, diameter) 
VALUES
	('milky way', 105700), 
	('andromeda', 220000), 
	('lmc', 14000) ;

SELECT * FROM galaxy;

INSERT INTO 
	star(name, galaxy_id) 
VALUES
	('sagittarius', 9), 
	('orion', 9), 
	('scorpius', 9), 
	('andromeda constellation', 10), 
	('dorado', 11), 
	('mensa', 11) ;

SELECT * FROM star;

INSERT INTO 
	planet(name, has_life, has_water, star_id) 
VALUES
	('earth', 'true', 'true', NULL), 
	('venus', 'false', 'false', NULL), 
	('uranus', 'false', 'false', NULL), 
	('jupiter', 'false', 'false', 1), 
	('mars', 'false', 'false', NULL), 
	('neptune', 'false', 'false', NULL),
	('saturn', 'false', 'false', NULL), 
	('mercury', 'false', 'false', NULL);

SELECT * FROM planet;

INSERT INTO 
	moon(name, planet_id) 
VALUES
	('the moon', 1), 
	('titania', 3), 
	('oberon', 3),
	('Europa', 4), 
	('ganymede', 4), 
	('callisto', 4),
	('phobos', 5), 
	('deimos', 5), 
	('triton', 6),
	('titan', 7),
	('the moon', 7);

SELECT * FROM moon;

INSERT INTO 
	solar_system(name, age, galaxy_id) 
VALUES
	('solar system', 4500000000, 9)