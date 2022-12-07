-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Master" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "alignment" TEXT,
    "charClass" TEXT NOT NULL,
    "armour" TEXT,
    "constelation" TEXT,
    "imageUrl" TEXT,
    "sex" TEXT,
    "age" TEXT,
    "sign" TEXT,
    "specie" TEXT,
    "saintId" INTEGER NOT NULL,
    CONSTRAINT "Master_saintId_fkey" FOREIGN KEY ("saintId") REFERENCES "Saint" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Master" ("age", "alignment", "armour", "charClass", "constelation", "id", "imageUrl", "name", "saintId", "sex", "sign", "specie") SELECT "age", "alignment", "armour", "charClass", "constelation", "id", "imageUrl", "name", "saintId", "sex", "sign", "specie" FROM "Master";
DROP TABLE "Master";
ALTER TABLE "new_Master" RENAME TO "Master";
CREATE UNIQUE INDEX "Master_name_key" ON "Master"("name");
CREATE UNIQUE INDEX "Master_saintId_key" ON "Master"("saintId");
CREATE TABLE "new_Saint" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "alignment" TEXT,
    "charClass" TEXT,
    "armour" TEXT,
    "constelation" TEXT,
    "imageUrl" TEXT,
    "sex" TEXT,
    "age" TEXT,
    "sign" TEXT,
    "specie" TEXT
);
INSERT INTO "new_Saint" ("age", "alignment", "armour", "charClass", "constelation", "id", "imageUrl", "name", "sex", "sign", "specie") SELECT "age", "alignment", "armour", "charClass", "constelation", "id", "imageUrl", "name", "sex", "sign", "specie" FROM "Saint";
DROP TABLE "Saint";
ALTER TABLE "new_Saint" RENAME TO "Saint";
CREATE UNIQUE INDEX "Saint_name_key" ON "Saint"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
