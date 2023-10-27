SELECT * FROM accidents;

DELETE FROM accidents;

ALTER TABLE accidents DROP COLUMN id;
ALTER TABLE accidents ADD COLUMN id SERIAL PRIMARY KEY;

COPY accidents (id, Local_Authority, Latitude, Longitude, Year, District)
FROM 'D:\Kadir\Codes\UK_accidents\data_filter_new.csv'
WITH (FORMAT csv, HEADER true);

DELETE FROM accidents
WHERE id IN (
    SELECT id
    FROM accidents
    ORDER BY RANDOM()
    LIMIT 1459609
);

SELECT * FROM accidents WHERE year=1;


