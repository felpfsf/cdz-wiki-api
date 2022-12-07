/*
  Warnings:

  - Added the required column `specie` to the `Master` table without a default value. This is not possible if the table is not empty.
  - Added the required column `specie` to the `Saint` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Master" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "alignment" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "armour" TEXT NOT NULL,
    "constelation" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "sex" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "sign" TEXT NOT NULL,
    "specie" TEXT NOT NULL,
    "saintId" INTEGER NOT NULL,
    CONSTRAINT "Master_saintId_fkey" FOREIGN KEY ("saintId") REFERENCES "Saint" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Master" ("age", "alignment", "armour", "class", "constelation", "id", "imageUrl", "name", "saintId", "sex", "sign") SELECT "age", "alignment", "armour", "class", "constelation", "id", "imageUrl", "name", "saintId", "sex", "sign" FROM "Master";
DROP TABLE "Master";
ALTER TABLE "new_Master" RENAME TO "Master";
CREATE UNIQUE INDEX "Master_name_key" ON "Master"("name");
CREATE UNIQUE INDEX "Master_saintId_key" ON "Master"("saintId");
CREATE TABLE "new_Saint" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "alignment" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "armour" TEXT NOT NULL,
    "constelation" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "sex" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "sign" TEXT NOT NULL,
    "specie" TEXT NOT NULL
);
INSERT INTO "new_Saint" ("age", "alignment", "armour", "class", "constelation", "id", "imageUrl", "name", "sex", "sign") SELECT "age", "alignment", "armour", "class", "constelation", "id", "imageUrl", "name", "sex", "sign" FROM "Saint";
DROP TABLE "Saint";
ALTER TABLE "new_Saint" RENAME TO "Saint";
CREATE UNIQUE INDEX "Saint_name_key" ON "Saint"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
