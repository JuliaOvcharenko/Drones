/*
  Warnings:

  - You are about to drop the column `block_order` on the `ProductInfoBlock` table. All the data in the column will be lost.
  - Added the required column `blockOrder` to the `ProductInfoBlock` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "ProductImage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "image" TEXT NOT NULL,
    "imageOrder" INTEGER NOT NULL,
    "infoBlockId" INTEGER NOT NULL,
    CONSTRAINT "ProductImage_infoBlockId_fkey" FOREIGN KEY ("infoBlockId") REFERENCES "ProductInfoBlock" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ProductMainImage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "image" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,
    CONSTRAINT "ProductMainImage_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ProductInfoBlock" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "blockOrder" INTEGER NOT NULL,
    "align" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,
    CONSTRAINT "ProductInfoBlock_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ProductInfoBlock" ("align", "content", "id", "productId", "title") SELECT "align", "content", "id", "productId", "title" FROM "ProductInfoBlock";
DROP TABLE "ProductInfoBlock";
ALTER TABLE "new_ProductInfoBlock" RENAME TO "ProductInfoBlock";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "ProductMainImage_productId_key" ON "ProductMainImage"("productId");
