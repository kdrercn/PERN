CREATE TABLE accidents(
		id INT PRIMARY KEY,
		Local_Authority TEXT,
		Latitude NUMERIC,
		Longitude NUMERIC,
		Year INT,
		District TEXT
	);

COPY accidents (id, Local_Authority, Latitude, Longitude, Year, District)
FROM 'D:\Kadir\Codes\UK_accidents\data_filter_new.csv'
WITH (FORMAT csv, HEADER true)

SELECT * FROM accidents WHERE id=557531;

DELETE FROM accidents
WHERE id IN (
    SELECT id
    FROM accidents
    ORDER BY RANDOM()
    LIMIT 1369608
);