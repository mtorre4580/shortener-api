/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Url` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Url_id_key" ON "Url"("id");
