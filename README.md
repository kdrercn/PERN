PostgreSQL Notes:
-----------------------------------------------------
Docker'da bulunan sanal makineye bağlanmak için:

	psql --username=freecodecamp --dbname=postgres
	
Veritabanı içeriği:

	\l
	
Veritabanı oluşturma:
	
	CREATE DATABASE first_database;
	
Veritabanına bağlanma:
	
	\c second_database;
	
Veritabanındaki tabloları gösterme:

	\d
	
Tablo oluştuma:

	CREATE TABLE table_name();
	CREATE TABLE table_name(column_name DATATYPE CONSTRAINTS);
	
Sütun ekleme:
	
	ALTER TABLE table_name ADD COLUMN first_column INT;
	
	ALTER TABLE table_name ADD COLUMN id SERIAL;
		*SERIAL ile sütun INT ve NOT NULL olur ve satır eklendikçe otomatik olarak artar. 

	ALTER TABLE table_name ADD COLUMN first_column INT NOT NULL UNIQUE;

Sütun çıkarma:

	ALTER TABLE table_name DROP COLUMN first_column;
	
Sütun adı değiştirme:

	ALTER TABLE table_name RENAME COLUMN name TO username;
	
Değer(satır) ekleme:

	INSERT INTO table_name(column_1, column_2) VALUES(value1, value2);
	
Değerleri gösterme:

	SELECT * FROM table_name;
	SELECT columns FROM table_name ORDER BY column_name;
	
Değer silme:
	
	DELETE FROM table_name WHERE condition;
	
Tablo silme:

	DROP TABLE table_name;
	
Veritabanı adını değiştirme:

	ALTER DATABASE database_name RENAME TO new_database_name;
	
Veritabanı silme:

	DROP DATABASE database_name;
	
Değer değiştirme:

	UPDATE table_name SET column_name=new_value WHERE condition;
	
PRIMARY KEY ekleme:
	
	ALTER TABLE table_name ADD PRIMARY KEY(column_name);
	
PRIMARY KEY çıkarma:

	ALTER TABLE table_name DROP CONSTRAINT character_pkey;
	
FOREIGN KEY ekleme:

	ALTER TABLE table_name ADD COLUMN column_name DATATYPE REFERENCES referenced_table_name(referenced_column_name);
	
	ALTER TABLE table_name ADD FOREIGN KEY(column_name) REFERENCES referenced_table(referenced_column);
	
	UNIQUE:
		ALTER TABLE table_name ADD UNIQUE(column_name);
	NOT NULL:
		ALTER TABLE table_name ALTER COLUMN column_name SET NOT NULL;
	
JOIN:

	SELECT columns FROM table_1 FULL JOIN table_2 ON table_1.primary_key_column = table_2.foreign_key_column;
	
	SELECT columns FROM junction_table
	FULL JOIN table_1 ON junction_table.foreign_key_column = table_1.primary_key_column
	FULL JOIN table_2 ON junction_table.foreign_key_column = table_2.primary_key_column;

LEFT OUTER JOIN:

	SELECT columns FROM table_1 LEFT OUTER JOIN table_2 ON table_1.primary_key_column = table_2.foreign_key_column
	
RIGHT OUTER JOIN:

	SELECT columns FROM table_1 RIGHT OUTER JOIN table_2 ON table_1.primary_key_column = table_2.foreign_key_column
	
COPY metodu:

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

	SELECT * FROM accidents;

SELECT: LİSTELEME

	SET search_path TO schema,public;

	SELECT * FROM "customers";

	SELECT "CompanyName", "ContactName" FROM "customers";

WHERE: KOŞUL

	SELECT * FROM "customers" WHERE "Country" = 'Argentina';

	SELECT * FROM "customers" WHERE "Country" != 'Brazil';

	SELECT * FROM "customers" WHERE "Country"='Brazil' AND "Region" = 'SP';

	SELECT * FROM "customers" WHERE "Country" = 'Türkiye' OR "Country" = 'Japan';

	SELECT * FROM "order_details" WHERE "UnitPrice" = 14;

	SELECT * FROM "order_details" WHERE "UnitPrice" < 14;

	SELECT * FROM "order_details" WHERE "UnitPrice" <= 14;

	SELECT * FROM "order_details" WHERE "UnitPrice" >= 14;

	SELECT * FROM "order_details" WHERE "UnitPrice" > 14;

DISTINCT: Sorgu sonucunda yer alan tekrarlı kayıtların (satırların), tek kayıt olarak getirilmesini sağlar

	SELECT DISTINCT "City" from "customers";

	SELECT DISTINCT "OrderID", "Discount" FROM "order_details" ORDER BY "OrderID";

ORDER BY: SIRALAMA

	SELECT * FROM "customers" ORDER BY "ContactName" ASC;

	SELECT * FROM "customers" ORDER BY "ContactName" DESC;

	SELECT * FROM "customers" ORDER BY "ContactName" DESC, "CompanyName";

	SELECT * FROM "customers" ORDER BY "Country", "ContactName";

LIKE/NOT LIKE : DESEN ARAMA

	SELECT * FROM "customers" WHERE "Country" LIKE 'P%';

	SELECT * FROM "customers" WHERE "Country" NOT LIKE 'P%'; # NULL olanlar getirilmez

	SELECT * FROM "customers" WHERE "Country" LIKE '%e';

	SELECT * FROM "customers" WHERE "Country" LIKE '_a%';

	SELECT * FROM "customers" WHERE "Country" LIKE '%pa%';

	SELECT * FROM "customers" WHERE "Country" LIKE '%pa_';

BETWEEN:

	SELECT * FROM "products" WHERE "UnitPrice" BETWEEN 10 AND 20;

	SELECT * FROM "products" WHERE "ProductName" BETWEEN 'C' AND 'M';

IN:

	SELECT * FROM "customers" WHERE "public"."customers"."Country" IN ('Türkiye', 'Kuzey Kıbrıs Türk Cumhuriyeti');

NULL SORGUSU:

	SELECT * FROM "customers" WHERE "Region" IS NOT NULL;

	SELECT * FROM "customers" WHERE "Region" IS NULL;

AS: TAKMA AD

	SELECT "CompanyName" AS "musteriler" FROM "customers";

**NOTE :**

	postgresql.conf: This file contains various settings that control the general behavior and configuration of the PostgreSQL server.

	pg_hba.conf: This file is responsible for managing client authentication, which includes specifying the rules for how clients can connect to the database instance and the authentication methods used.

**! CMD ile veritabanına bağlanmak için** psql -h localhost -U myuser mydb

**Extensions:**

	https://airbyte.com/data-engineering-resources/postgresql-extensions

# PERN Notes:

to start database : node index.js (cd uk_accidents_pern)

to start build : npm start (cd client)