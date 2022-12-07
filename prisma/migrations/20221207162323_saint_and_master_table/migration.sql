-- CreateTable
CREATE TABLE "Saint" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "alignment" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "armour" TEXT NOT NULL,
    "constelation" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "sex" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "sign" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Master" (
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
    "saintId" INTEGER NOT NULL,
    CONSTRAINT "Master_saintId_fkey" FOREIGN KEY ("saintId") REFERENCES "Saint" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Saint_name_key" ON "Saint"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Master_name_key" ON "Master"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Master_saintId_key" ON "Master"("saintId");
