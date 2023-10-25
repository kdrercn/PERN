CREATE TABLE accidents(
		id INT,
		Local_Authority TEXT,
		Latitude NUMERIC,
		Longitude NUMERIC,
		Year INT,
		District TEXT
	);

COPY accidents (id, Local_Authority, Latitude, Longitude, Year, District)
FROM 'D:\Kadir\Codes\UK_accidents\data_filter_new.csv'
WITH (FORMAT csv, HEADER true);


ALTER TABLE accidents DROP COLUMN id;
ALTER TABLE accidents ADD COLUMN id SERIAL PRIMARY KEY;

SELECT * FROM accidents;
SELECT * FROM accidents WHERE longitude=0 and district='City of London';

SELECT * FROM accidents WHERE district='İstanbul';

SELECT * FROM accidents WHERE id > 1469609;

DELETE FROM accidents;