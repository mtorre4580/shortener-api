/*
  Warnings:

  - The primary key for the `Url` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Url` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Url" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "shortURL" TEXT NOT NULL,
    "longURL" TEXT NOT NULL
);
INSERT INTO "new_Url" ("id", "longURL", "shortURL") SELECT "id", "longURL", "shortURL" FROM "Url";
DROP TABLE "Url";
ALTER TABLE "new_Url" RENAME TO "Url";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
