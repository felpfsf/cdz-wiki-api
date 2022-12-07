/*
  Warnings:

  - You are about to alter the column `age` on the `Saint` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `age` on the `Master` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Saint" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "alignment" TEXT,
    "charClass" TEXT,
    "armour" TEXT,
    "constelation" TEXT,
    "imageUrl" TEXT,
    "sex" TEXT,
    "age" INTEGER,
    "sign" TEXT,
    "specie" TEXT
);
INSERT INTO "new_Saint" ("age", "alignment", "armour", "charClass", "constelation", "id", "imageUrl", "name", "sex", "sign", "specie") SELECT "age", "alignment", "armour", "charClass", "constelation", "id", "imageUrl", "name", "sex", "sign", "specie" FROM "Saint";
DROP TABLE "Saint";
ALTER TABLE "new_Saint" RENAME TO "Saint";
CREATE UNIQUE INDEX "Saint_name_key" ON "Saint"("name");
CREATE TABLE "new_Master" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "alignment" TEXT,
    "charClass" TEXT NOT NULL,
    "armour" TEXT,
    "constelation" TEXT,
    "imageUrl" TEXT,
    "sex" TEXT,
    "age" INTEGER,
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
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
