BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "Meals" (
	"date"	TEXT,
	"time"	INTEGER,
	"meal"	TEXT
);
INSERT INTO "Meals" VALUES ('01.09.2020',1,'Schnitzel mit Pommes; Veggie-shit; Halbgefrorenes;');
INSERT INTO "Meals" VALUES ('02.09.2020',2,'Kona plab');
INSERT INTO "Meals" VALUES ('03.09.2020',1,'bo');
INSERT INTO "Meals" VALUES ('04.09.2020',2,'legit');
INSERT INTO "Meals" VALUES ('08.09.2020',1,'vinz');
INSERT INTO "Meals" VALUES ('09.09.2020',1,'woas nt');
INSERT INTO "Meals" VALUES ('10.09.2020',1,'hoi');
INSERT INTO "Meals" VALUES ('01.09.2020',2,'test');
INSERT INTO "Meals" VALUES ('02.09.2020',1,'no a test');
INSERT INTO "Meals" VALUES ('10.09.2020',2,'maybe');
COMMIT;
